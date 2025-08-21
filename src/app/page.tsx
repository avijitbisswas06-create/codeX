"use client";

import { useState } from "react";
import Link from "next/link";

export default function HomePage() {
  const [userType, setUserType] = useState<'traveler' | 'vendor'>('traveler');

  const heroImage = "https://placehold.co/1920x1080?text=Global+travel+marketplace+connecting+travelers+with+local+vendors+worldwide";
  const vendorImage = "https://placehold.co/800x600?text=Vendor+dashboard+analytics+and+business+growth+tools";
  const marketplaceImage = "https://placehold.co/600x400?text=Browse+thousands+of+travel+services+from+verified+vendors";

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">TravelMarket</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setUserType('traveler')}
                className={`px-4 py-2 rounded-md ${
                  userType === 'traveler' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                For Travelers
              </button>
              <button
                onClick={() => setUserType('vendor')}
                className={`px-4 py-2 rounded-md ${
                  userType === 'vendor' 
                    ? 'bg-green-600 text-white' 
                    : 'text-gray-700 hover:text-green-600'
                }`}
              >
                For Vendors
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {userType === 'traveler' ? (
                <>
                  <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    Your AI-Powered Travel Companion
                  </h1>
                  <p className="text-xl mb-8 text-blue-100">
                    Discover amazing destinations, book unique experiences, and get personalized recommendations from our AI travel assistant. Connect with verified local vendors worldwide.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/marketplace"
                      className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
                    >
                      Browse Services
                    </Link>
                    <Link
                      href="/chat"
                      className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center"
                    >
                      Chat with AI Assistant
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    Grow Your Travel Business
                  </h1>
                  <p className="text-xl mb-8 text-blue-100">
                    Join thousands of vendors on our marketplace. Get AI-powered business insights, connect with other vendors, and reach travelers worldwide.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/vendor/register"
                      className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors text-center"
                    >
                      Start Selling
                    </Link>
                    <Link
                      href="/vendor/dashboard"
                      className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center"
                    >
                      Vendor Dashboard
                    </Link>
                  </div>
                </>
              )}
            </div>
            <div className="relative">
              <img
                src={heroImage}
                alt="Travel marketplace connecting travelers with vendors"
                className="rounded-lg shadow-2xl"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {userType === 'traveler' ? (
            <>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Everything You Need for Perfect Travel
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  From AI-powered recommendations to seamless bookings, we make travel planning effortless.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">AI Travel Assistant</h3>
                  <p className="text-gray-600">
                    Get personalized recommendations, instant answers to travel questions, and smart itinerary planning.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                    <span className="text-2xl">🏨</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Verified Vendors</h3>
                  <p className="text-gray-600">
                    Book with confidence from thousands of verified hotels, tour operators, and service providers.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Instant Booking</h3>
                  <p className="text-gray-600">
                    Seamless booking experience with instant confirmations and 24/7 customer support.
                  </p>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Powerful Tools for Travel Businesses
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Advanced analytics, AI insights, and networking tools to grow your travel business.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">AI Business Insights</h3>
                  <p className="text-gray-600">
                    Get AI-powered recommendations for pricing, marketing, and business growth strategies.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Vendor Network</h3>
                  <p className="text-gray-600">
                    Connect with other vendors, form partnerships, and expand your service offerings.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                    <span className="text-2xl">💰</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Revenue Analytics</h3>
                  <p className="text-gray-600">
                    Track performance, analyze trends, and optimize your revenue with detailed reports.
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Marketplace Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {userType === 'traveler' 
                  ? 'Thousands of Services at Your Fingertips'
                  : 'Reach Millions of Travelers Worldwide'
                }
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                {userType === 'traveler'
                  ? 'Browse accommodations, tours, transport, and adventure activities from verified vendors around the world.'
                  : 'List your services on our global marketplace and connect with travelers looking for authentic experiences.'
                }
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">
                    {userType === 'traveler' ? 'Verified vendors only' : 'Global customer reach'}
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">
                    {userType === 'traveler' ? 'Instant booking confirmation' : 'Real-time booking management'}
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">
                    {userType === 'traveler' ? '24/7 customer support' : 'AI-powered business insights'}
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={userType === 'traveler' ? marketplaceImage : vendorImage}
                alt={userType === 'traveler' 
                  ? 'Browse travel services marketplace' 
                  : 'Vendor dashboard and analytics'
                }
                className="rounded-lg shadow-xl"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {userType === 'traveler' 
              ? 'Ready to Start Your Journey?'
              : 'Ready to Grow Your Business?'
            }
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            {userType === 'traveler'
              ? 'Join millions of travelers who trust TravelMarket for their adventures.'
              : 'Join thousands of successful vendors on our global marketplace.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {userType === 'traveler' ? (
              <>
                <Link
                  href="/marketplace"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Explore Marketplace
                </Link>
                <Link
                  href="/chat"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Try AI Assistant
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/vendor/register"
                  className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
                >
                  Get Started Free
                </Link>
                <Link
                  href="/vendor/dashboard"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  View Demo Dashboard
                </Link>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">TravelMarket</h3>
              <p className="text-gray-400">
                The world's leading AI-powered travel marketplace connecting travelers with local vendors.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Travelers</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/marketplace" className="hover:text-white">Browse Services</Link></li>
                <li><Link href="/chat" className="hover:text-white">AI Assistant</Link></li>
                <li><Link href="/bookings" className="hover:text-white">My Bookings</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Vendors</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/vendor/register" className="hover:text-white">Join Marketplace</Link></li>
                <li><Link href="/vendor/dashboard" className="hover:text-white">Dashboard</Link></li>
                <li><Link href="/vendor/network" className="hover:text-white">Vendor Network</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/help" className="hover:text-white">Help Center</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
                <li><Link href="/about" className="hover:text-white">About</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TravelMarket. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
