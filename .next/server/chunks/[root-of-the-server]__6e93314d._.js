module.exports = {

"[project]/.next-internal/server/app/api/bookings/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/app/api/bookings/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DELETE": (()=>DELETE),
    "GET": (()=>GET),
    "POST": (()=>POST),
    "PUT": (()=>PUT)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
// Mock bookings database - in a real app, this would be a proper database
let bookings = [];
async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const vendorId = searchParams.get('vendorId');
        const userId = searchParams.get('userId');
        const status = searchParams.get('status');
        let filteredBookings = [
            ...bookings
        ];
        // Filter by vendor
        if (vendorId) {
            filteredBookings = filteredBookings.filter((booking)=>booking.vendorId === vendorId);
        }
        // Filter by user
        if (userId) {
            filteredBookings = filteredBookings.filter((booking)=>booking.userId === userId);
        }
        // Filter by status
        if (status) {
            filteredBookings = filteredBookings.filter((booking)=>booking.status === status);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            bookings: filteredBookings,
            total: filteredBookings.length
        });
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: error.message || "Failed to fetch bookings"
        }, {
            status: 500
        });
    }
}
async function POST(request) {
    try {
        const bookingData = await request.json();
        // Validate required fields
        const requiredFields = [
            'serviceId',
            'vendorId',
            'startDate',
            'endDate',
            'guests'
        ];
        for (const field of requiredFields){
            if (!bookingData[field]) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: `${field} is required`
                }, {
                    status: 400
                });
            }
        }
        // Validate dates
        const startDate = new Date(bookingData.startDate);
        const endDate = new Date(bookingData.endDate);
        const today = new Date();
        if (startDate < today) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Start date cannot be in the past"
            }, {
                status: 400
            });
        }
        if (endDate <= startDate) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "End date must be after start date"
            }, {
                status: 400
            });
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
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            bookingId: newBooking.id,
            booking: newBooking,
            message: "Booking confirmed successfully"
        });
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: error.message || "Failed to create booking"
        }, {
            status: 500
        });
    }
}
async function PUT(request) {
    try {
        const { searchParams } = new URL(request.url);
        const bookingId = searchParams.get('id');
        if (!bookingId) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Booking ID is required"
            }, {
                status: 400
            });
        }
        const updateData = await request.json();
        const bookingIndex = bookings.findIndex((b)=>b.id === bookingId);
        if (bookingIndex === -1) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Booking not found"
            }, {
                status: 404
            });
        }
        // Update booking
        bookings[bookingIndex] = {
            ...bookings[bookingIndex],
            ...updateData,
            id: bookingId,
            updatedAt: new Date().toISOString()
        };
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            booking: bookings[bookingIndex],
            message: "Booking updated successfully"
        });
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: error.message || "Failed to update booking"
        }, {
            status: 500
        });
    }
}
async function DELETE(request) {
    try {
        const { searchParams } = new URL(request.url);
        const bookingId = searchParams.get('id');
        if (!bookingId) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Booking ID is required"
            }, {
                status: 400
            });
        }
        const bookingIndex = bookings.findIndex((b)=>b.id === bookingId);
        if (bookingIndex === -1) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Booking not found"
            }, {
                status: 404
            });
        }
        // Cancel booking instead of deleting
        bookings[bookingIndex].status = "cancelled";
        bookings[bookingIndex].updatedAt = new Date().toISOString();
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            booking: bookings[bookingIndex],
            message: "Booking cancelled successfully"
        });
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: error.message || "Failed to cancel booking"
        }, {
            status: 500
        });
    }
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__6e93314d._.js.map