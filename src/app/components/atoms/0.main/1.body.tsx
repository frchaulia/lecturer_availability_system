import React from "react";
import Image from 'next/image';

export default function Body({children}: {children:any}) {
  return (
    <div className="relative flex gap-5 justify-between w-full md:w-auto z-20">
      {children}
    </div>
  );
}


{/* <img
  loading="lazy"
  src="./assets/logo-polinema.png"
  className="shrink-0 max-w-full aspect-square w-[110px]"
  alt=""
> */}

{/* <img
 loading="lazy"
  src="./assets/logo-jti.png"
  className="shrink-0 max-w-full aspect-square w-[110px]"
  alt="Logo JTI"
/> */}

// { filter: 'brightness(110%) saturate(150%)', backgroundColor: 'transparent' }
// Add relative and z-10