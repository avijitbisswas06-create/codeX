"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface VendorStats {
  totalBookings: number;
  totalRevenue: number;
  averageRating: number;
  activeServices: number;
}

export default function VendorDashboard() {
  const [vendorData, setVendorData] = useState<VendorStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const checkAuthAndFetchData = async () => {
      const sessionId = localStorage.getItem("sessionId");
      
      if (!sessionId) {
        // Redirect to login with return URL
        router.push(`/login?redirect=/vendor/dashboard`);
        return;
      }

      try {
        // For demo purposes, we'll use mock data
        // In a real app, this would verify session and fetch real data
        setTimeout(() => {
          setVendorData({
            totalBookings: 42,
            totalRevenue: 12500,
            averageRating: 4.8,
            activeServices: 8
          });
          setLoading(false);
        }, 1000);
        
      } catch (err) {
        setError("Failed to load dashboard data");
        setLoading(false);
      }
    };

    checkAuthAndFetchData();
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("sessionId");
    localStorage.removeItem("vendorId");
    router.push("/");
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

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-3xl font-bold text-gray-900">Vendor Dashboard</h1>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-sm font-medium text-gray-500">Total Bookings</h3>
            <p className="mt-2 text-3xl font-bold text-gray-900">
              {vendorData?.totalBookings || 0}
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-sm font-medium text-gray-500">Total Revenue</h3>
            <p className="mt-2 text-3xl font-bold text-gray-900">
              ${vendorData?.totalRevenue || 0}
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-sm font-medium text-gray-500">Average Rating</h3>
            <p className="mt-2 text-3xl font-bold text-gray-900">
              {vendorData?.averageRating || 0}/5
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-sm font-medium text-gray-500">Active Services</h3>
            <p className="mt-2 text-3xl font-bold text-gray-900">
              {vendorData?.activeServices || 0}
            </p>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h2>
          <div className="flex flex-wrap gap-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Add New Service
            </button>
            <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
              View Bookings
            </button>
            <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">
              Analytics
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
