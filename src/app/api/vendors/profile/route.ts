import { NextResponse } from "next/server";

// In-memory storage
let vendors: any[] = [];

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const vendorId = url.searchParams.get('vendorId');
    
    if (!vendorId) {
      return NextResponse.json(
        { error: "Vendor ID required" },
        { status: 400 }
      );
    }

    const vendor = vendors.find(v => v.id === vendorId);
    if (!vendor) {
      return NextResponse.json(
        { error: "Vendor not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      id: vendor.id,
      name: vendor.name,
      email: vendor.email,
      businessName: vendor.businessName,
      businessDescription: vendor.businessDescription,
      phone: vendor.phone,
      location: vendor.location,
      businessType: vendor.businessType,
      serviceCategories: vendor.serviceCategories,
      verified: vendor.verified,
      createdAt: vendor.createdAt
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const { vendorId, ...updates } = await request.json();
    
    const vendorIndex = vendors.findIndex(v => v.id === vendorId);
    if (vendorIndex === -1) {
      return NextResponse.json(
        { error: "Vendor not found" },
        { status: 404 }
      );
    }

    vendors[vendorIndex] = {
      ...vendors[vendorIndex],
      ...updates,
      updatedAt: new Date().toISOString()
    };

    return NextResponse.json({
      success: true,
      vendor: vendors[vendorIndex]
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
