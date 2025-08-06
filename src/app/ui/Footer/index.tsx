import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">
              Canadian Citizenship Test Prep
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your comprehensive resource for Canadian citizenship test
              preparation. Study guides, practice tests, and mock exams all in
              one place.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Study Categories</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/categories/canadas-history"
                  className="text-gray-300 hover:text-white"
                >
                  Canada&apos;s History
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/canadas-regions"
                  className="text-gray-300 hover:text-white"
                >
                  Canada&apos;s Regions
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/applying-for-citizenship"
                  className="text-gray-300 hover:text-white"
                >
                  Applying for Citizenship
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/rights-and-responsibilities-of-citizenship"
                  className="text-gray-300 hover:text-white"
                >
                  Rights & Responsibilities
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/categories/mock-test"
                  className="text-gray-300 hover:text-white"
                >
                  Mock Test
                </Link>
              </li>
              <li>
                <Link
                  href="/#categories"
                  className="text-gray-300 hover:text-white"
                >
                  All Categories
                </Link>
              </li>
              <li>
                <a
                  href="https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-citizenship/become-canadian-citizen/citizenship-test.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  Official Test Info
                </a>
              </li>
              <li>
                <a
                  href="https://www.canada.ca/content/dam/ircc/migration/ircc/english/pdf/pub/discover.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  Discover Canada Guide
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Test Information</h4>
            <div className="text-sm text-gray-300 space-y-2">
              <p>
                <strong>Test Duration:</strong> 30 minutes
              </p>
              <p>
                <strong>Questions:</strong> 20 multiple choice
              </p>
              <p>
                <strong>Pass Score:</strong> 15/20 (75%)
              </p>
              <p>
                <strong>Age Range:</strong> 18-54 must take test
              </p>
              <p>
                <strong>Languages:</strong> English or French
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <div className="mb-4 text-sm text-gray-300">
            <p className="mb-2">
              This website is an independent study resource and is not
              affiliated with the Government of Canada or Immigration, Refugees
              and Citizenship Canada (IRCC).
            </p>
            <p>
              All test questions are based on the official &ldquo;Discover
              Canada: The Rights and Responsibilities of Citizenship&ldquo;
              study guide.
            </p>
          </div>
          <p className="text-sm text-gray-400">
            &copy; {currentYear}{" "}
            <a href="https://0x.company" className="hover:text-white">
              0x Code Limited
            </a>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
