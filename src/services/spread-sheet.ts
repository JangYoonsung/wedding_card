import { JWT } from 'google-auth-library';
import { GoogleSpreadsheet } from 'google-spreadsheet';

export const loadSheet = async (): Promise<GoogleSpreadsheet> => {
  const auth = new JWT({
    email: process.env.SERVICE_ACCOUNT_EMAIL,
    key: process.env.SERVICE_ACCOUNT_KEY,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const sheet = new GoogleSpreadsheet(String(process.env.SPREAD_SHEET_ID), auth);
  await sheet.loadInfo();

  return sheet;
};

export const addRows = async (doc: GoogleSpreadsheet) => {
  const sheet = doc.sheetsById[0];
  const rows = await sheet.getRows();
  const isRegistered = rows.some((row) => row.get('email') === '');

  if (isRegistered) throw new Error('this email already exist');

  const now = new Date();
  return await sheet.addRow({});
};
