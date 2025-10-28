import React from "react";

const Footer = () => {
  return (
    <div className="bg-black/50 text-gray-300 text-center text-sm py-6 px-2 md:px-0">
      <p>
        Copyright © {new Date().getFullYear()} - All right reserved by{" "}
        <span className="font-bold">Md. Atikur Rahman</span>
      </p>
    </div>
  );
};

export default Footer;
