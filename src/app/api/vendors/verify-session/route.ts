import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get("Authorization");
    
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json(
        { error: "No session provided" },
        { status: 401 }
      );
    }

    const sessionId = authHeader.replace("Bearer ", "");
    
    // In a real app, this would validate against a database/session store
    // For demo purposes, we'll accept any non-empty session ID
    if (sessionId && sessionId.startsWith("session_")) {
      return NextResponse.json({
        valid: true,
        sessionId,
        vendorId: "vendor_123",
        email: "demo@travelmarket.com"
      });
    }

    return NextResponse.json(
      { error: "Invalid session" },
      { status: 401 }
    );

  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
