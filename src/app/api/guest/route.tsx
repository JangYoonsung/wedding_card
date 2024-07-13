import { TSchema } from '@/container/CardForm';
import { addRows, loadSheet } from '@/services/spread-sheet';
import { NextRequest, NextResponse } from 'next/server';

export const GET = (req: NextRequest) => {
  return NextResponse.json({ hoge: 'taro' });
};

export const POST = async (req: NextRequest) => {
  const body: TSchema = await req.json();
  const docs = await loadSheet();
  const sheet = await addRows(docs, body);
  console.log(sheet);
  return NextResponse.json({});
};
