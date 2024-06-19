import Link from "next/link";
import React from "react";

export default function Header_Dashboard({children}: {children:any}) {
    return (
      <div className="relative flex gap-5 justify-between w-full md:w-2/3 z-15">
      <div className="flex shrink-0">
            <div className="flex-auto self-start text-3xl font-extrabold text-white leading-[50px] max-md:max-w-full">
              LECTURER AVAILABILITY SYSTEM
            </div>
          <div className="flex-grow">
          {children}
        </div>
    </div>
    </div>
    );
}