import React from "react";
import Image from 'next/image';

export default function Login_Header({children}: {children:any}) {
  return (
    <div className="relative flex gap-5 justify-between w-full md:w-auto z-20 bg-transparent">
      <div className="flex shrink-0">
        <Image src={"/./assets/logo-polinema.png"} alt={"Logo Polinema"} 
          loading="lazy"
          width={89}
          height={89}
        />
      </div>
      <div className="flex shrink-0">
        <Image src={"/./assets/logo-jti.png"} alt={"Logo JTI"}
          loading="lazy"
          width={85}
          height={85}
        /> 
      </div>
      <div className="flex-grow"></div>
      {children}
    </div>
  );
}