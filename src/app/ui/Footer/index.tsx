import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-gray-900 text-white py-4 text-center">
        <p className="text-sm">
          &copy; {currentYear} <a href="https://0x.company">0x Code Limited</a>.
          All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
