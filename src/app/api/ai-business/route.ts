import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { vendorId } = await request.json();
  // Simulated insights based on vendorId
  const insights = [
    "Increase your marketing budget",
    "Focus on customer feedback",
    "Consider seasonal promotions"
  ];
  return NextResponse.json({ insights });
}
