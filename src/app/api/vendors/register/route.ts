import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

// In-memory storage for demo - replace with database in production
let vendors: any[] = [];

export async function POST(request: Request) {
  try {
    const {
      name,
      email,
      password,
      businessName,
      businessDescription,
      phone,
      location,
      businessType,
      serviceCategories
    } = await request.json();

    // Basic validation
    if (!email || !password || !businessName) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existingVendor = vendors.find(v => v.email === email);
    if (existingVendor) {
      return NextResponse.json(
        { error: "Email already registered" },
        { status: 409 }
      );
    }

    // Hash the password before storing
    const hashedPassword = await bcrypt.hash(password, 10);

    const newVendor = {
      id: Date.now().toString(),
      name,
      email,
      password: hashedPassword, // Store hashed password
      businessName,
      businessDescription,
      phone,
      location,
      businessType,
      serviceCategories,
      verified: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    vendors.push(newVendor);
    
    return NextResponse.json({
      success: true,
      vendor: {
        id: newVendor.id,
        name: newVendor.name,
        email: newVendor.email,
        businessName: newVendor.businessName,
        verified: newVendor.verified
      }
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// GET endpoint to fetch all vendors (for admin purposes)
export async function GET() {
  return NextResponse.json({ vendors });
}
