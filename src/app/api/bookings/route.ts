import { NextResponse } from "next/server";

// Mock bookings database - in a real app, this would be a proper database
let bookings: any[] = [];

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const vendorId = searchParams.get('vendorId');
    const userId = searchParams.get('userId');
    const status = searchParams.get('status');
    
    let filteredBookings = [...bookings];
    
    // Filter by vendor
    if (vendorId) {
      filteredBookings = filteredBookings.filter(booking => 
        booking.vendorId === vendorId
      );
    }
    
    // Filter by user
    if (userId) {
      filteredBookings = filteredBookings.filter(booking => 
        booking.userId === userId
      );
    }
    
    // Filter by status
    if (status) {
      filteredBookings = filteredBookings.filter(booking => 
        booking.status === status
      );
    }
    
    return NextResponse.json({ 
      bookings: filteredBookings,
      total: filteredBookings.length
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Failed to fetch bookings" }, 
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const bookingData = await request.json();
    
    // Validate required fields
    const requiredFields = ['serviceId', 'vendorId', 'startDate', 'endDate', 'guests'];
    for (const field of requiredFields) {
      if (!bookingData[field]) {
        return NextResponse.json(
          { error: `${field} is required` }, 
          { status: 400 }
        );
      }
    }
    
    // Validate dates
    const startDate = new Date(bookingData.startDate);
    const endDate = new Date(bookingData.endDate);
    const today = new Date();
    
    if (startDate < today) {
      return NextResponse.json(
        { error: "Start date cannot be in the past" }, 
        { status: 400 }
      );
    }
    
    if (endDate <= startDate) {
      return NextResponse.json(
        { error: "End date must be after start date" }, 
        { status: 400 }
      );
    }
    
    // Calculate booking amount
    const days = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    const basePrice = bookingData.servicePrice || 100;
    const guests = parseInt(bookingData.guests);
    const totalAmount = basePrice * days * guests;
    
    const newBooking = {
      id: "BOOK" + Date.now(),
      serviceId: bookingData.serviceId,
      vendorId: bookingData.vendorId,
      userId: bookingData.userId || "guest_" + Date.now(),
      serviceTitle: bookingData.serviceTitle || "Travel Service",
      vendorName: bookingData.vendorName || "Travel Vendor",
      startDate: bookingData.startDate,
      endDate: bookingData.endDate,
      guests: guests,
      specialRequests: bookingData.specialRequests || "",
      status: "confirmed",
      totalAmount: totalAmount,
      currency: "USD",
      paymentStatus: "pending",
      customerInfo: {
        name: bookingData.customerName || "Guest User",
        email: bookingData.customerEmail || "guest@example.com",
        phone: bookingData.customerPhone || ""
      },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    bookings.push(newBooking);
    
    return NextResponse.json({ 
      success: true, 
      bookingId: newBooking.id,
      booking: newBooking,
      message: "Booking confirmed successfully"
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Failed to create booking" }, 
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const bookingId = searchParams.get('id');
    
    if (!bookingId) {
      return NextResponse.json(
        { error: "Booking ID is required" }, 
        { status: 400 }
      );
    }
    
    const updateData = await request.json();
    const bookingIndex = bookings.findIndex(b => b.id === bookingId);
    
    if (bookingIndex === -1) {
      return NextResponse.json(
        { error: "Booking not found" }, 
        { status: 404 }
      );
    }
    
    // Update booking
    bookings[bookingIndex] = {
      ...bookings[bookingIndex],
      ...updateData,
      id: bookingId, // Ensure ID doesn't change
      updatedAt: new Date().toISOString()
    };
    
    return NextResponse.json({ 
      success: true, 
      booking: bookings[bookingIndex],
      message: "Booking updated successfully"
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Failed to update booking" }, 
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const bookingId = searchParams.get('id');
    
    if (!bookingId) {
      return NextResponse.json(
        { error: "Booking ID is required" }, 
        { status: 400 }
      );
    }
    
    const bookingIndex = bookings.findIndex(b => b.id === bookingId);
    
    if (bookingIndex === -1) {
      return NextResponse.json(
        { error: "Booking not found" }, 
        { status: 404 }
      );
    }
    
    // Cancel booking instead of deleting
    bookings[bookingIndex].status = "cancelled";
    bookings[bookingIndex].updatedAt = new Date().toISOString();
    
    return NextResponse.json({ 
      success: true, 
      booking: bookings[bookingIndex],
      message: "Booking cancelled successfully"
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Failed to cancel booking" }, 
      { status: 500 }
    );
  }
}
