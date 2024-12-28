import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div
      className="relative bg-cover bg-center py-12"
      style={{
        backgroundImage: "url('/images/hero.webp')",
        minHeight: "400px",
      }}
    >
      <div className="relative z-10 max-w-[960px]  text-black  mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 p-4 w-1/2">
          Prepare for the Canadian Citizenship Test
        </h1>
        <p className="text-lg md:text-xl leading-relaxed p-4 w-1/2 mb-4">
          Access free practice tests, mock exams, and learning resources to help
          you pass the citizenship test with confidence. Explore our categories
          below and get started today!
        </p>
        <Link
          className="px-6 py-3 bg-blue-950 hover:bg-blue-800 text-white rounded-md text-lg font-medium transition"
          href={"/categories/mock-test"}
        >
          Start Mock Test
        </Link>
      </div>
    </div>
  );
};

export default Hero;
