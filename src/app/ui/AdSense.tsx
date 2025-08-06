"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";

const AdSense = () => {
  const pathname = usePathname();

  // Only load ads on pages with substantial content
  // Exclude quiz pages (except those with study guides) and pages under construction
  const shouldLoadAds =
    pathname === "/" ||
    (pathname.startsWith("/categories/") &&
      pathname !== "/categories/mock-test");

  if (!shouldLoadAds) {
    return null;
  }

  return (
    <Script
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4083721213057833"
      strategy="afterInteractive"
      async
      crossOrigin="anonymous"
    />
  );
};

export default AdSense;
