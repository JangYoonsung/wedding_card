import { addRows, loadSheet } from '@/services/spread-sheet';
import { NextRequest, NextResponse } from 'next/server';

export const GET = (req: NextRequest) => {
  return NextResponse.json({ hoge: 'taro' });
};

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const docs = await loadSheet();
  const sheet = await addRows(docs);
  console.log(sheet);
  return NextResponse.json({});
};
