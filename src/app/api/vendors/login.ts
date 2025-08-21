import { NextResponse } from "next/server";
import { createSession } from "../../../lib/session";

let vendors: any[] = []; // This should ideally be replaced with a proper database in production

export async function POST(request: Request) {
  const { email, password } = await request.json();
  const vendor = vendors.find(v => v.email === email && v.password === password);
  
  if (vendor) {
    const sessionId = createSession(vendor.id);
    return NextResponse.json({ success: true, vendor, sessionId });
  } else {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }
}
