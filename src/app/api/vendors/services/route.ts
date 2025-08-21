import { NextResponse } from "next/server";

// In-memory storage for vendor services
let services: any[] = [];

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

    const vendorServices = services.filter(s => s.vendorId === vendorId);
    return NextResponse.json({ services: vendorServices });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const {
      vendorId,
      title,
      description,
      price,
      duration,
      category,
      location,
      images,
      availability
    } = await request.json();

    if (!vendorId || !title || !price || !category) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const newService = {
      id: Date.now().toString(),
      vendorId,
      title,
      description,
      price: parseFloat(price),
      duration,
      category,
      location,
      images: images || [],
      availability: availability || "available",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    services.push(newService);
    
    return NextResponse.json({
      success: true,
      service: newService
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
    const { serviceId, ...updates } = await request.json();
    
    const serviceIndex = services.findIndex(s => s.id === serviceId);
    if (serviceIndex === -1) {
      return NextResponse.json(
        { error: "Service not found" },
        { status: 404 }
      );
    }

    services[serviceIndex] = {
      ...services[serviceIndex],
      ...updates,
      updatedAt: new Date().toISOString()
    };

    return NextResponse.json({
      success: true,
      service: services[serviceIndex]
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { serviceId } = await request.json();
    
    const serviceIndex = services.findIndex(s => s.id === serviceId);
    if (serviceIndex === -1) {
      return NextResponse.json(
        { error: "Service not found" },
        { status: 404 }
      );
    }

    services.splice(serviceIndex, 1);
    
    return NextResponse.json({
      success: true,
      message: "Service deleted successfully"
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
