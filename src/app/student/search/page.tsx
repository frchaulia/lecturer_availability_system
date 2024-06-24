import * as React from "react";
import Image from 'next/image';

function MyComponent() {
  return (
    <div className="flex flex-col justify-center bg-slate-900">
      <div className="flex overflow-hidden relative flex-col pb-20 w-full mix-blend-color-dodge min-h-[1117px] max-md:max-w-full">
        <Image
          loading="lazy"
          src="/path-to-your-image.jpg"  // Update this with the correct image path
          alt="Background"
          layout="fill"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative gap-5 px-20 py-20 w-full bg-slate-900 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
          <div className="flex-auto text-4xl font-extrabold text-white leading-[74.88px] max-md:max-w-full">
            LECTURER AVAILABILITY SYSTEM
          </div>
          <div className="flex gap-5 my-auto text-xl text-yellow-400 max-md:flex-wrap">
            <div>HOME</div>
            <div className="flex-auto font-bold">DASHBOARD</div>
            <div className="flex-auto">ROOM LAYOUT</div>
            <div className="flex-auto">MY PROFILE</div>
            <div className="flex-auto">MY STATISTIC</div>
          </div>
        </div>
        <div className="flex relative gap-0 self-center mt-4 max-w-full w-[561px] max-md:flex-wrap">
          <div className="grow justify-center items-start px-3.5 py-3 text-base bg-white text-neutral-400 w-fit max-md:pr-5 max-md:max-w-full">
            Anindya Reiz
          </div>
          <div className="justify-center px-6 py-3 text-xl font-bold text-white whitespace-nowrap bg-yellow-400 max-md:px-5">
            SEARCH
          </div>
        </div>
        <div className="flex relative flex-col pt-14 pb-4 mt-16 mb-72 ml-20 max-w-full text-xs font-semibold text-black rounded-md shadow-lg w-[267px] max-md:my-10 max-md:ml-2.5">
          <Image
            loading="lazy"
            src="/path-to-your-image.jpg"  // Update this with the correct image path
            alt="Lecturer"
            width={180}
            height={180}
            className="self-center max-w-full aspect-[0.96]"
          />
          <div className="justify-center items-start px-5 py-4 mt-7 bg-white max-md:pr-5">
            Name : Anindya Reizana <br />
            Lecturer Room : 4<br />
            Availability Status : Available
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyComponent;
