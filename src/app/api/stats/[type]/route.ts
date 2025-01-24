import { TimePeriodValue } from "@/lib/utils/time";
import { NextResponse } from "next/server";

// app/api/stats/[type]/route.ts
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const period = searchParams.get('period') as TimePeriodValue;
  
    // Mock data
    return NextResponse.json({
      value: 1000,
      change: 0.15,
      timePeriod: period
    });
  }