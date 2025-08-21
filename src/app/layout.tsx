import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TravelMarket - AI-Powered Travel Marketplace",
  description: "Connect with verified travel vendors worldwide. Get AI-powered recommendations, book unique experiences, and grow your travel business with our comprehensive marketplace platform.",
  keywords: "travel, marketplace, AI assistant, booking, vendors, hotels, tours, adventure sports",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
