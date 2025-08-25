import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    universalCredentials: {
      email: "demo@travelmarket.com",
      password: "password"
    },
    vendorInfo: {
      id: "vendor_123",
      name: "Demo Vendor",
      email: "demo@travelmarket.com"
    },
    loginEndpoint: "/api/vendors/login",
    method: "POST",
    note: "Use these credentials to login as a vendor and access vendor dashboard features"
  });
}
