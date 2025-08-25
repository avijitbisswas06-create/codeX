import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { connectToDatabase } from "@/lib/db"; // Move this to the top

// Input validation schema
const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = loginSchema.parse(body);

const db = await connectToDatabase();
const vendorCollection = db.collection("vendors"); // Assuming the collection is named "vendors"

const vendor = await vendorCollection.findOne({ email });
if (!vendor) {
  return NextResponse.json(
    { error: "Invalid email or password" },
    { status: 401 }
  );
}

    // Verify password
    const isValidPassword = await bcrypt.compare(password, vendor.password);
    if (!isValidPassword) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    // Create session
    const sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    return NextResponse.json({
      success: true,
      sessionId,
      vendorId: vendor.id,
      vendorName: vendor.name,
      email: vendor.email,
    });

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid input data", details: error.errors },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
