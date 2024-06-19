import Link from "next/link";
import React from "react";

export default function Navbar_Home() {
  return (
    <div className="flex justify-center items-center gap-10 py-4 px-8 text-xl text-yellow-400 bg-transparent">
      <div className="mx-96"></div>
      <div className="flex shrink-0"></div>
      <div className="font-bold"><Link href="./">HOME</Link></div>
      <div className="flex-auto"><Link href="./login/room_layout">ROOM LAYOUT</Link></div>
      <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <button type="button" className="text-white bg-yellow-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><Link href="./login">LOGIN</Link></button>|

      </div>
    </div>
  );
}
