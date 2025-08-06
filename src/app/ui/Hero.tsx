import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div
      className="relative bg-cover bg-center py-16"
      style={{
        backgroundImage: "url('/images/hero.webp')",
        minHeight: "500px",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      <div className="relative z-10 max-w-[960px] mx-auto px-4">
        <div className="bg-white bg-opacity-95 p-8 rounded-lg max-w-2xl">
          <h1 className="text-black text-3xl md:text-4xl font-bold mb-6">
            Master the Canadian Citizenship Test
          </h1>
          <div className="text-black text-lg md:text-xl leading-relaxed mb-6">
            <p className="mb-4">
              Prepare with confidence using our comprehensive study guides and
              practice tests. Our platform covers all 11 categories from the
              official &ldquo;Discover Canada&ldquo; guide.
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-base mb-6">
              <div>
                <h3 className="font-semibold mb-2">
                  ✓ Complete Study Materials
                </h3>
                <p className="text-sm">
                  In-depth guides for each test category
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">✓ Practice Tests</h3>
                <p className="text-sm">Over 500+ questions with explanations</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">✓ Progress Tracking</h3>
                <p className="text-sm">Monitor your improvement over time</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">✓ Mobile Friendly</h3>
                <p className="text-sm">Study anywhere, anytime on any device</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              className="px-6 py-3 bg-blue-950 hover:bg-blue-800 text-white rounded-md text-lg font-medium transition text-center"
              href={"/categories/mock-test"}
            >
              Start Mock Test
            </Link>
            <Link
              className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-black rounded-md text-lg font-medium transition text-center"
              href={"#categories"}
            >
              Browse Study Categories
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
