import React from "react";
import Image from 'next/image';

export default function Header({children}: {children:any}) {
  return (
    <div className="relative flex gap-5 justify-between w-full md:w-auto z-20">
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