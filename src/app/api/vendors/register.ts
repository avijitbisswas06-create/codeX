import { NextResponse } from "next/server";

let vendors: any[] = [];

export async function POST(request: Request) {
  const { name, email, password } = await request.json();
  const newVendor = { id: Date.now().toString(), name, email, password };
  vendors.push(newVendor);
  return NextResponse.json({ success: true, vendor: newVendor });
}
