"use client";

import Link from "next/link";
import ChatAssistant from "@/components/ChatAssistant";

export default function ChatPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-blue-600">
                TravelMarket
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link href="/marketplace" className="text-gray-700 hover:text-blue-600">
                Browse Services
              </Link>
              <Link href="/vendor/register" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                Become a Vendor
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">AI Travel Assistant</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Get personalized travel recommendations, instant answers to your questions, and expert advice for your next adventure.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar with Tips */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">How I Can Help</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-sm">🗺️</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm">Destination Advice</h4>
                    <p className="text-xs text-gray-600">Get recommendations for places to visit based on your preferences</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-sm">💰</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm">Budget Planning</h4>
                    <p className="text-xs text-gray-600">Help you plan trips within your budget constraints</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-sm">📅</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm">Itinerary Planning</h4>
                    <p className="text-xs text-gray-600">Create detailed day-by-day travel itineraries</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t">
                <h4 className="font-medium text-gray-900 text-sm mb-2">Quick Actions</h4>
                <div className="space-y-2">
                  <Link
                    href="/marketplace"
                    className="block w-full text-center bg-blue-600 text-white py-2 px-3 rounded text-sm hover:bg-blue-700 transition-colors"
                  >
                    Browse Services
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Chat Interface */}
          <div className="lg:col-span-3">
            <ChatAssistant className="h-[600px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
