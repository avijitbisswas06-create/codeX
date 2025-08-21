import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // Simulated vendor statistics
  const stats = {
    totalBookings: Math.floor(Math.random() * 500) + 100,
    totalRevenue: Math.floor(Math.random() * 50000) + 10000,
    averageRating: (Math.random() * 1.5 + 3.5).toFixed(1),
    activeServices: Math.floor(Math.random() * 20) + 5,
  };
  
  return NextResponse.json(stats);
}
