import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="h-32 bg-gradient-to-r from-red-950 to-red-900 flex items-center justify-center shadow-md">
      <div className="flex items-center justify-between w-full max-w-[960px] px-4">
        {/* Logo Section (Optional) */}
        <div className="flex items-center space-x-4">
          <Image
            src="/images/logo.webp"
            alt="Canadian Citizenship Test Preparation Logo"
            className="w-16 h-16 md:w-24 md:h-24 rounded-sm"
            width={96}
            height={96}
            priority
          />
          <Link href="/">
            <h1 className="text-xl md:text-3xl font-bold text-white">
              Canadian Citizenship Test Preparation
            </h1>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
