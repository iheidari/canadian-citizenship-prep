import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: " Canadian Citizenship Test Preparation",
  description: "Best resource to prepare for Canadian Citizenship Test",
  keywords: "Canadian Citizenship Test, Canada, Citizenship, Test, Preparation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google AdSense code */}
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4083721213057833"
          strategy="beforeInteractive"
          async
          crossOrigin="anonymous"
        />
        <main>{children}</main>
      </body>
    </html>
  );
}
