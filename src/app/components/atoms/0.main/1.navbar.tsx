import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="flex gap-5 items-center my-auto text-xl font-bold text-yellow-400 flex-wrap z-20">
      <div className="mx-96"></div>
      <div className="font-bold my-auto"><Link href="../../lecturer">HOME</Link></div>
      <div className="flex-auto my-auto"><Link href="../../lecturer/dashboard">DASHBOARD</Link></div>
      <div className="flex-auto my-auto"><Link href="../../lecturer/room_layout">ROOM LAYOUT</Link></div>
      <div className="flex-auto my-auto"><Link href="../../lecturer/myprofile">MY PROFILE</Link></div>
      <div className="flex-auto my-auto"><Link href="../../lecturer/mystatistic">MY STATISTIC</Link></div>
    </div>
  );
}

// <div className="flex gap-5 items-center my-auto text-xl font-bold text-yellow-400 flex-wrap">

// <nav className="flex flex-col items-center gap-5 my-auto text-xl font-bold text-yellow-400 absolute top-0 right-0 p-5">

// className="flex gap-5 items-center my-auto text-xl font-bold text-yellow-400 flex-wrap"