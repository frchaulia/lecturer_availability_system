import Link from "next/link";
import React from "react";

export default function Navbar_Student() {
  return (
    <div className="flex justify-center items-center gap-10 py-4 px-8 text-xl text-yellow-400">
      <div className="flex shrink-0"></div>
      <div className="flex-auto self-start text-3xl font-extrabold text-white leading-[75.02px] max-md:max-w-full">
              LECTURER AVAILABILITY SYSTEM
            </div>
      <div className="font-bold"><Link href="../../student">HOME</Link></div>
      <div className="flex-auto"><Link href="../../student/dashboard">DASHBOARD</Link></div>
      <div className="flex-auto"><Link href="../../student/room_layout">ROOM LAYOUT</Link></div>
    </div>
  );
}
