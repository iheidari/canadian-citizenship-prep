import Link from "next/link";

const Header = () => {
  return (
    <header className="h-24 bg-gray-900 text-white flex items-center justify-center px-6 shadow-md">
      <div className="max-w-[960px] flex justify-between w-full">
        <Link href="/">
          <h1 className="text-3x md:text-4xl font-bold">
            Canadian Citizenship Test Preparation
          </h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;
