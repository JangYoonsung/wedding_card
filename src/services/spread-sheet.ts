import { TSchema } from '@/container/CardForm';
import { JWT } from 'google-auth-library';
import { GoogleSpreadsheet } from 'google-spreadsheet';

export const loadSheet = async (): Promise<GoogleSpreadsheet> => {
  const auth = new JWT({
    email: process.env.SERVICE_ACCOUNT_EMAIL,
    key: process.env.SERVICE_ACCOUNT_KEY,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const spreadSheetId = process.env.SPREAD_SHEET_ID;
  if (typeof spreadSheetId !== 'string') throw new Error('spread sheet id is invalid type');

  const doc = new GoogleSpreadsheet(spreadSheetId, auth);
  await doc.loadInfo();

  return doc;
};

export const addRows = async (doc: GoogleSpreadsheet, body: TSchema) => {
  const sheet = doc.sheetsById[0];
  const rows = await sheet.getRows();
  const isRegistered = rows.some((row) => row.get('email') === body.email);

  if (isRegistered) throw new Error('this email already exist');

  const now = new Date();
  return await sheet.addRow({
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
};
