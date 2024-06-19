import Link from "next/link";
import React from "react";

export default function Navbar_Home() {
  return (
    <div className="flex justify-center items-center gap-10 py-4 px-8 text-xl text-yellow-400 bg-transparent">
      <div className="mx-72"></div>
      <div className="flex shrink-0"></div>
      <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse font-extrabold text-4xl">
        <p>LECTURER AVAILABILITY SYSTEM</p>

      </div>
    </div>
  );
}

// className="flex-auto my-auto text-5xl font-extrabold text-center text-yellow-400 leading-[74.88px] max-md:max-w-full max-md:text-4xl"

