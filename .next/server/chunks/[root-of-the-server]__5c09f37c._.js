module.exports = {

"[project]/.next-internal/server/app/api/services/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

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
"[project]/src/app/api/services/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
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
// Mock services database - in a real app, this would be a proper database
let services = [
    {
        id: "1",
        title: "Luxury Beach Resort Maldives",
        description: "5-star beachfront resort with overwater villas, spa, and world-class dining. Perfect for honeymoons and luxury getaways.",
        price: 599,
        rating: 4.9,
        category: "accommodation",
        vendor: {
            id: "v1",
            name: "Paradise Hotels Group",
            verified: true,
            email: "contact@paradisehotels.com"
        },
        imageUrl: "https://placehold.co/400x300?text=Luxury+overwater+villa+resort+with+crystal+clear+turquoise+waters",
        location: "Maldives",
        amenities: [
            "Spa",
            "Restaurant",
            "Pool",
            "WiFi",
            "Beach Access"
        ],
        availability: true,
        createdAt: "2024-01-15T10:00:00Z"
    },
    {
        id: "2",
        title: "Himalayan Trekking Adventure",
        description: "7-day guided trek through the stunning Himalayan mountains with experienced local guides and camping under the stars.",
        price: 899,
        rating: 4.8,
        category: "adventure",
        vendor: {
            id: "v2",
            name: "Mountain Adventures Co",
            verified: true,
            email: "info@mountainadventures.com"
        },
        imageUrl: "https://placehold.co/400x300?text=Himalayan+mountain+trekking+with+snow+capped+peaks+and+adventure+gear",
        location: "Nepal",
        amenities: [
            "Guide",
            "Equipment",
            "Meals",
            "Camping Gear"
        ],
        availability: true,
        createdAt: "2024-01-14T15:30:00Z"
    },
    {
        id: "3",
        title: "European City Tour Package",
        description: "10-day guided tour covering Paris, Rome, and Barcelona with luxury accommodations and expert local guides.",
        price: 1299,
        rating: 4.7,
        category: "tours",
        vendor: {
            id: "v3",
            name: "Euro Travel Experts",
            verified: true,
            email: "bookings@eurotravelexperts.com"
        },
        imageUrl: "https://placehold.co/400x300?text=European+city+tour+with+historic+architecture+and+cultural+landmarks",
        location: "Europe",
        amenities: [
            "Guide",
            "Hotels",
            "Meals",
            "Transportation"
        ],
        availability: true,
        createdAt: "2024-01-13T09:15:00Z"
    },
    {
        id: "4",
        title: "Private Airport Transfer Service",
        description: "Luxury private transfer service with professional drivers and premium vehicles. Available 24/7 for all major airports.",
        price: 89,
        rating: 4.6,
        category: "transport",
        vendor: {
            id: "v4",
            name: "Elite Transport Services",
            verified: true,
            email: "reservations@elitetransport.com"
        },
        imageUrl: "https://placehold.co/400x300?text=Luxury+private+car+transfer+service+with+professional+driver",
        location: "Global",
        amenities: [
            "Professional Driver",
            "Luxury Vehicle",
            "24/7 Service",
            "Meet & Greet"
        ],
        availability: true,
        createdAt: "2024-01-12T14:45:00Z"
    },
    {
        id: "5",
        title: "Boutique City Hotel Downtown",
        description: "Stylish boutique hotel in the heart of the city with modern amenities, rooftop bar, and easy access to attractions.",
        price: 189,
        rating: 4.5,
        category: "accommodation",
        vendor: {
            id: "v5",
            name: "Urban Boutique Hotels",
            verified: true,
            email: "stay@urbanboutique.com"
        },
        imageUrl: "https://placehold.co/400x300?text=Modern+boutique+hotel+with+stylish+interior+and+city+skyline+views",
        location: "New York",
        amenities: [
            "Rooftop Bar",
            "Gym",
            "WiFi",
            "Concierge",
            "Restaurant"
        ],
        availability: true,
        createdAt: "2024-01-11T11:20:00Z"
    },
    {
        id: "6",
        title: "Scuba Diving Experience",
        description: "Professional scuba diving experience with certified instructors. Explore coral reefs and marine life in crystal clear waters.",
        price: 149,
        rating: 4.8,
        category: "adventure",
        vendor: {
            id: "v6",
            name: "Deep Blue Diving",
            verified: true,
            email: "dive@deepblue.com"
        },
        imageUrl: "https://placehold.co/400x300?text=Underwater+scuba+diving+with+colorful+coral+reefs+and+tropical+fish",
        location: "Caribbean",
        amenities: [
            "Certified Instructor",
            "Equipment",
            "Boat Transfer",
            "Lunch"
        ],
        availability: true,
        createdAt: "2024-01-10T16:00:00Z"
    },
    {
        id: "7",
        title: "Wine Tasting Tour Tuscany",
        description: "Full-day wine tasting tour through the beautiful Tuscan countryside visiting family-owned vineyards and historic cellars.",
        price: 179,
        rating: 4.9,
        category: "tours",
        vendor: {
            id: "v7",
            name: "Tuscan Wine Tours",
            verified: true,
            email: "tours@tuscanwine.com"
        },
        imageUrl: "https://placehold.co/400x300?text=Tuscan+vineyard+wine+tasting+with+rolling+hills+and+grape+vines",
        location: "Italy",
        amenities: [
            "Wine Tasting",
            "Lunch",
            "Transportation",
            "Guide"
        ],
        availability: true,
        createdAt: "2024-01-09T13:30:00Z"
    },
    {
        id: "8",
        title: "Helicopter City Tour",
        description: "Breathtaking helicopter tour offering panoramic views of the city skyline and famous landmarks from above.",
        price: 299,
        rating: 4.7,
        category: "transport",
        vendor: {
            id: "v8",
            name: "Sky High Tours",
            verified: true,
            email: "fly@skyhightours.com"
        },
        imageUrl: "https://placehold.co/400x300?text=Helicopter+aerial+city+tour+with+panoramic+skyline+and+landmarks+view",
        location: "Various Cities",
        amenities: [
            "Professional Pilot",
            "Safety Equipment",
            "Photo Opportunities",
            "Commentary"
        ],
        availability: true,
        createdAt: "2024-01-08T10:45:00Z"
    }
];
async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const category = searchParams.get('category');
        const search = searchParams.get('search');
        const vendorId = searchParams.get('vendorId');
        let filteredServices = [
            ...services
        ];
        // Filter by category
        if (category && category !== 'all') {
            filteredServices = filteredServices.filter((service)=>service.category === category);
        }
        // Filter by search query
        if (search) {
            const searchLower = search.toLowerCase();
            filteredServices = filteredServices.filter((service)=>service.title.toLowerCase().includes(searchLower) || service.description.toLowerCase().includes(searchLower) || service.vendor.name.toLowerCase().includes(searchLower) || service.location.toLowerCase().includes(searchLower));
        }
        // Filter by vendor
        if (vendorId) {
            filteredServices = filteredServices.filter((service)=>service.vendor.id === vendorId);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            services: filteredServices,
            total: filteredServices.length,
            categories: [
                'accommodation',
                'tours',
                'transport',
                'adventure'
            ]
        });
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: error.message || "Failed to fetch services"
        }, {
            status: 500
        });
    }
}
async function POST(request) {
    try {
        const serviceData = await request.json();
        // Validate required fields
        const requiredFields = [
            'title',
            'description',
            'price',
            'category',
            'vendorId'
        ];
        for (const field of requiredFields){
            if (!serviceData[field]) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: `${field} is required`
                }, {
                    status: 400
                });
            }
        }
        const newService = {
            id: Date.now().toString(),
            title: serviceData.title,
            description: serviceData.description,
            price: parseFloat(serviceData.price),
            rating: 0,
            category: serviceData.category,
            vendor: {
                id: serviceData.vendorId,
                name: serviceData.vendorName || "New Vendor",
                verified: false,
                email: serviceData.vendorEmail || "contact@newvendor.com"
            },
            imageUrl: serviceData.imageUrl || `https://placehold.co/400x300?text=${encodeURIComponent(serviceData.title)}`,
            location: serviceData.location || "Location TBD",
            amenities: serviceData.amenities || [],
            availability: true,
            createdAt: new Date().toISOString()
        };
        services.push(newService);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            service: newService,
            message: "Service created successfully"
        });
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: error.message || "Failed to create service"
        }, {
            status: 500
        });
    }
}
async function PUT(request) {
    try {
        const { searchParams } = new URL(request.url);
        const serviceId = searchParams.get('id');
        if (!serviceId) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Service ID is required"
            }, {
                status: 400
            });
        }
        const updateData = await request.json();
        const serviceIndex = services.findIndex((s)=>s.id === serviceId);
        if (serviceIndex === -1) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Service not found"
            }, {
                status: 404
            });
        }
        // Update service
        services[serviceIndex] = {
            ...services[serviceIndex],
            ...updateData,
            id: serviceId,
            updatedAt: new Date().toISOString()
        };
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            service: services[serviceIndex],
            message: "Service updated successfully"
        });
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: error.message || "Failed to update service"
        }, {
            status: 500
        });
    }
}
async function DELETE(request) {
    try {
        const { searchParams } = new URL(request.url);
        const serviceId = searchParams.get('id');
        if (!serviceId) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Service ID is required"
            }, {
                status: 400
            });
        }
        const serviceIndex = services.findIndex((s)=>s.id === serviceId);
        if (serviceIndex === -1) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Service not found"
            }, {
                status: 404
            });
        }
        // Remove service
        const deletedService = services.splice(serviceIndex, 1)[0];
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            service: deletedService,
            message: "Service deleted successfully"
        });
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: error.message || "Failed to delete service"
        }, {
            status: 500
        });
    }
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__5c09f37c._.js.map