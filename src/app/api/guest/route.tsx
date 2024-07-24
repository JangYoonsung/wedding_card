import { ATTENDANCE_STATUS, FIELD_NAMES } from '@/constants/form';
import { schema } from '@/constants/schema';
import { TSchema } from '@/types/schema';
import { messagingApi, OAuth } from '@line/bot-sdk';
import dayjs from 'dayjs';
import { JWT } from 'google-auth-library';
import { GoogleSpreadsheet, GoogleSpreadsheetWorksheet } from 'google-spreadsheet';
import { NextRequest, NextResponse } from 'next/server';

const loadSheet = async () => {
  const auth = new JWT({
    email: process.env.SERVICE_ACCOUNT_EMAIL,
    key: (process.env.SERVICE_ACCOUNT_KEY as string).replace(/\\n/g, '\n'),
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const spreadSheetId = process.env.SPREAD_SHEET_ID as string;

  const doc = new GoogleSpreadsheet(spreadSheetId, auth);
  await doc.loadInfo();

  return doc;
};

const getLineAccessToken = async (sheet: GoogleSpreadsheetWorksheet) => {
  const rows = await sheet.getRows();
  const accessToken: string = rows[0]?.get('accessToken');

  if (!accessToken || dayjs().isAfter(rows[1]?.get('tokenExp'))) {
    const credential = await new OAuth().issueAccessToken(
      process.env.CHANNEL_ID as string,
      process.env.CHANNEL_SECRET as string,
    );

    await sheet.clearRows();
    await sheet.addRow({
      accessToken: credential.access_token,
      tokenExp: dayjs().add(credential.expires_in, 'second').toDate(),
    });

    return credential.access_token;
  }
  return accessToken;
};

const sendLineMessage = async (doc: GoogleSpreadsheet, message: string) => {
  const sheet = await doc.sheetsByIndex[1];
  const accessToken = await getLineAccessToken(sheet);

  const lineBot = new messagingApi.MessagingApiClient({
    channelAccessToken: accessToken,
  });

  return lineBot.pushMessage({
    to: process.env.LINE_ID as string,
    messages: [{ type: 'text', text: message }],
  });
};

const convertToRowData = (data: TSchema, fields: Record<string, string>) => {
  const rowData: Record<string, any> = {};
  Object.keys(fields).forEach((key) => {
    const field = fields[key];
    switch (key) {
      case 'attendanceStatus':
        rowData[field] = data.attendanceStatus === ATTENDANCE_STATUS.PRESENT ? '出席' : '欠席';
        break;
      case 'firstName':
        rowData[field] = `${data.firstName}${data.lastName}`;
        break;
      case 'firstNameKana':
        rowData[field] = `${data.firstNameKana}${data.lastNameKana}`;
        break;
      case 'isAccompanied':
        rowData[field] = data.isAccompanied ? 'あり' : 'なし';
        break;
      case 'companionInfo':
        if (!data.companionInfo || data.companionInfo?.length === 0) break;
        rowData[field] = data.companionInfo
          .map((val, index) => {
            const name = `${val.firstName}${val.lastName}`;
            const kanaName = `${val.firstNameKana}${val.lastNameKana}`;

            return `${index + 1}人目: ${name}(${kanaName})`;
          })
          .join('\n');
        break;
      case 'createdAt':
        rowData[field] = dayjs().format('YYYY-MM-DD HH:mm:ss');
        break;
      default:
        rowData[field] = data[key as keyof TSchema] ?? '';
    }
  });
  return rowData;
};

const addRows = async (doc: GoogleSpreadsheet, body: TSchema) => {
  const sheet = doc.sheetsById[0];
  const rows = await sheet.getRows();
  const isRegistered = rows.some((row) => row.get('メールアドレス') === body.email);

  if (isRegistered) {
    // eslint-disable-next-line no-console
    console.error(`${body.email} is already exist`);
    return NextResponse.json(
      { message: `すでに登録されているメールアドレスです。` },
      { status: 409 },
    );
  }

  const result = await sheet.addRow(convertToRowData(body, FIELD_NAMES));

  const message = `답변이 도착했습니다
이름: ${result.get('お名前')}
출결여부: ${result.get('出欠席')}(${result.get('ふりがな')})`;
  await sendLineMessage(doc, message);

  return NextResponse.json(result.toObject(), { status: 201 });
};

export const POST = async (req: NextRequest) => {
  const today = dayjs();
  if (today.isAfter('2024-08-09', 'day')) {
    return NextResponse.json({ message: '回答期限がすぎました。' }, { status: 400 });
  }

  const body: TSchema = await req.json();
  const docs = await loadSheet();
  const parse = schema.safeParse(body);
  if (parse.error) {
    return NextResponse.json({ message: parse.error.message }, { status: 400 });
  }

  const sheet = await addRows(docs, body);
  return NextResponse.json(await sheet.json(), { status: sheet.status });
};
