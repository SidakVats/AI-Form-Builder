import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-center sm:justify-start">
            <Image src={"/logo2.png"} width={180} height={50} alt="logo" />
          </div>

          <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
            Copyright &copy; {new Date().getFullYear()}. All rights reserved @ <span className="text-primary"><Link href={"https://www.sidakvats.in/"} target="_blank">www.sidakvats.in</Link></span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
