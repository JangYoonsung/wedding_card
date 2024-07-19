import { ATTENDANCE_STATUS, FIELD_NAMES } from '@/constants/form';
import { schema } from '@/constants/schema';
import { TSchema } from '@/types/schema';
import dayjs from 'dayjs';
import { JWT } from 'google-auth-library';
import { GoogleSpreadsheet } from 'google-spreadsheet';
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

const convertToRowData = (data: TSchema, fields: Record<string, string>) => {
  const rowData: Record<string, any> = {};
  Object.keys(fields).map((key) => {
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
        rowData[field] =
          data.companionInfo
            ?.map(
              (val) => `[${val.firstName}${val.lastName}, ${val.firstNameKana}${val.lastNameKana}]`,
            )
            .join('、') ?? '';
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
  const isRegistered = rows.some((row) => row.get('email') === body.email);

  if (isRegistered) {
    return NextResponse.json({ message: `${body.email} is already exist` }, { status: 409 });
  }

  const result = await sheet.addRow(convertToRowData(body, FIELD_NAMES));
  return NextResponse.json(result.toObject(), { status: 201 });
};

export const POST = async (req: NextRequest) => {
  const body: TSchema = await req.json();
  const docs = await loadSheet();
  const parse = schema.safeParse(body);
  if (parse.error) {
    return NextResponse.json({ message: parse.error.message }, { status: 400 });
  }

  const sheet = await addRows(docs, body);
  return NextResponse.json(await sheet.json(), { status: sheet.status });
};
