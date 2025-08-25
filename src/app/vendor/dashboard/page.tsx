"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface VendorData {
  id: string;
  name: string;
  email: string;
}

export default function VendorDashboard() {
  const [vendor, setVendor] = useState<VendorData | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const sessionId = localStorage.getItem("sessionId");
    const vendorId = localStorage.getItem("vendorId");

    if (!sessionId || !vendorId) {
      router.push("/login");
      return;
    }

    // Verify session and get vendor data
    const verifySession = async () => {
      try {
        const response = await fetch("/api/vendors/verify-session", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${sessionId}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setVendor({
            id: data.vendorId,
            name: "Demo Vendor",
            email: data.email
          });
        } else {
          // Session invalid, redirect to login
          localStorage.removeItem("sessionId");
          localStorage.removeItem("vendorId");
          router.push("/login");
        }
      } catch (error) {
        console.error("Session verification failed:", error);
        router.push("/login");
      } finally {
        setLoading(false);
      }
    };

    verifySession();
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("sessionId");
    localStorage.removeItem("vendorId");
    router.push("/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (!vendor) {
    return null; // Will redirect to login
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">Vendor Dashboard</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Welcome, {vendor.name}</span>
              <button
                onClick={handleLogout}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md text-sm hover:bg-gray-300"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Dashboard Cards */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">My Services</h3>
            <p className="text-gray-600 mb-4">Manage your travel services and listings</p>
            <Link
              href="/vendor/services"
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700"
            >
              View Services
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Bookings</h3>
            <p className="text-gray-600 mb-4">View and manage customer bookings</p>
            <button className="bg-green-600 text-white px-4 py-2 rounded-md text-sm hover:bg-green-700">
              View Bookings
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Profile</h3>
            <p className="text-gray-600 mb-4">Update your vendor information</p>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm hover:bg-purple-700">
              Edit Profile
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Analytics</h3>
            <p className="text-gray-600 mb-4">View performance metrics and earnings</p>
            <button className="bg-orange-600 text-white px-4 py-2 rounded-md text-sm hover:bg-orange-700">
              View Analytics
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Support</h3>
            <p className="text-gray-600 mb-4">Get help and support</p>
            <button className="bg-gray-600 text-white px-4 py-2 rounded-md text-sm hover:bg-gray-700">
              Contact Support
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h4 className="text-sm font-medium text-gray-600">Total Services</h4>
            <p className="text-2xl font-bold text-gray-900">12</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h4 className="text-sm font-medium text-gray-600">Active Bookings</h4>
            <p className="text-2xl font-bold text-gray-900">8</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h4 className="text-sm font-medium text-gray-600">Total Revenue</h4>
            <p className="text-2xl font-bold text-gray-900">$2,450</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h4 className="text-sm font-medium text-gray-600">Rating</h4>
            <p className="text-2xl font-bold text-gray-900">4.8/5</p>
          </div>
        </div>
      </main>
    </div>
  );
}
