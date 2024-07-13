import { TSchema } from '@/container/CardForm';
import { JWT } from 'google-auth-library';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (req: NextRequest) => {
  const body: TSchema = await req.json();
  const docs = await loadSheet();
  const sheet = await addRows(docs, body);
  return NextResponse.json(await sheet.json(), { status: sheet.status });
};

const loadSheet = async () => {
  const auth = new JWT({
    email: process.env.SERVICE_ACCOUNT_EMAIL,
    key: process.env.SERVICE_ACCOUNT_KEY,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const spreadSheetId = process.env.SPREAD_SHEET_ID;
  if (typeof spreadSheetId !== 'string') {
    throw new Error('');
  }

  const doc = new GoogleSpreadsheet(spreadSheetId, auth);
  await doc.loadInfo();

  return doc;
};

const addRows = async (doc: GoogleSpreadsheet, body: TSchema) => {
  const sheet = doc.sheetsById[0];
  const rows = await sheet.getRows();
  const isRegistered = rows.some((row) => row.get('email') === body.email);

  if (isRegistered) {
    return NextResponse.json({ message: `${body.email} is already exist` }, { status: 409 });
  }

  const now = new Date();
  const result = await sheet.addRow({
    attendanceStatus: body.attendanceStatus === 'attendance' ? '出席' : '欠席',
    name: body.firstName + body.lastName,
    kanaName: body.firstNameKana + body.lastNameKana,
    tel: body.tel,
    email: body.email,
    zipCode: body?.zipCode ?? '',
    address: body?.address1 ?? '' + body?.address2 ?? '',
    memo: body.memo ?? '',
    isAccompanied: body.isAccompanied ? 'あり' : 'なし',
    companionInfo:
      body.companionInfo
        ?.map((v) => `[${v.firstName + v.lastName}, ${v.firstNameKana + v.lastNameKana}]`)
        .join(', ') ?? '',
    createdAt: now.toLocaleDateString(),
  });
  return NextResponse.json(result, { status: 201 });
};
