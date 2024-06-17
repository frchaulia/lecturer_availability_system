import React from "react";
import Image from 'next/image';

export default function Background({ children }: {children:any}) {
  return (
    <div className="relative flex flex-col overflow-hidden items-start w-full mix-blend min-h-screen">
      <Image src={"/./assets/background.png"} alt={"Background"} 
        loading="lazy"
        className="object-cover absolute inset-0 w-full h-full"
        layout="fill"
        objectFit="cover"
        quality={100}
        />
      {children}
    </div>
  );
}

// -color-dodge after mix-blend in div
// size-full after inset-0 subsituting with now
// <div className="relative w-full h-full">