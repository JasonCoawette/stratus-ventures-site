import { NextResponse } from 'next/server';
import { getUsers } from '@/data/getUsers';

export async function GET() {
  try {
    const totalUsers = await getUsers();
    return NextResponse.json({ totalUsers });
  } catch (error) {
    console.error('Error fetching total users:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}