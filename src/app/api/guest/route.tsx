import { NextRequest, NextResponse } from 'next/server';

export const GET = (req: NextRequest) => {
  return NextResponse.json({ hoge: 'taro' });
};

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  console.log(body);
  return NextResponse.json({});
};
