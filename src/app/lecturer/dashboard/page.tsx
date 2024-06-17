import * as React from "react";

export default function Home() {
  return (
    <div className="flex flex-col justify-center bg-slate-900">
      <div className="flex overflow-hidden relative flex-col items-center pb-11 w-full mix-blend-color-dodge min-h-[1117px] max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="..."
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative gap-5 self-stretch px-20 py-20 w-full bg-slate-900 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
          <div className="flex-auto text-4xl font-extrabold text-white leading-[74.88px] max-md:max-w-full">
            LECTURER AVAILABILITY SYSTEM
          </div>
          <div className="flex gap-5 my-auto text-xl text-yellow-400 max-md:flex-wrap max-md:max-w-full">
            <div>HOME</div>
            <div className="flex-auto font-bold">DASHBOARD</div>
            <div className="flex-auto"> MY PROFILE</div>
            <div className="flex-auto">MY STATISTIC</div>
          </div>
        </div>
        <div className="flex relative gap-0 mt-4 max-w-full w-[561px] max-md:flex-wrap">
          <div className="grow justify-center items-start px-3.5 py-3 text-base bg-white text-neutral-400 w-fit max-md:pr-5 max-md:max-w-full">
            Type the lecturer's name here
          </div>
          <div className="justify-center px-6 py-3 text-xl font-bold text-white whitespace-nowrap bg-yellow-400 max-md:px-5">
            SEARCH
          </div>
        </div>
        <div className="flex relative gap-5 px-5 mt-16 w-full text-xs font-semibold text-black max-w-[1569px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col flex-1 py-4 rounded-md shadow-lg">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e8e9e770277d00dfbb685a4cd709266dbe618209e7a611f6fbf8b134afe28ad?"
              className="self-end aspect-[0.85] w-[30px] max-md:mr-2.5"
            />
            <img
              loading="lazy"
              srcSet="..."
              className="self-center mt-1 max-w-full aspect-[0.96] w-[180px]"
            />
            <div className="justify-center items-start px-5 py-4 mt-7 bg-white max-md:pr-5">
              Name : Budianto Wijaya
              <br />
              Lecturer Room : 2 <br />
              Availability Status : Teaching{" "}
            </div>
          </div>
          <div className="flex flex-col flex-1 pt-14 pb-4 rounded-md shadow-lg">
            <img
              loading="lazy"
              srcSet="..."
              className="self-center max-w-full aspect-[0.96] w-[180px]"
            />
            <div className="justify-center items-start px-5 py-4 mt-7 bg-white max-md:pr-5">
              Name : Anindya Reizana <br />
              Lecturer Room : 4<br />
              Availability Status : Available
            </div>
          </div>
          <div className="flex flex-col flex-1 pt-14 pb-4 rounded-md shadow-lg">
            <img
              loading="lazy"
              srcSet="..."
              className="self-center max-w-full aspect-[0.96] w-[180px]"
            />
            <div className="justify-center px-3.5 py-4 mt-7 bg-white">
              Name : Ahmad Rivaldi
              <br />
              Lecturer Room : 1<br />
              Availability Status : Thesis guidance
            </div>
          </div>
          <div className="flex flex-col flex-1 pt-14 pb-4 rounded-md shadow-lg">
            <img
              loading="lazy"
              srcSet="..."
              className="self-center max-w-full aspect-[0.96] w-[180px]"
            />
            <div className="justify-center items-start px-5 py-4 mt-7 bg-white max-md:pr-5">
              Name : Anindya Reizana <br />
              Lecturer Room : 4<br />
              Availability Status : Available
            </div>
          </div>
          <div className="flex flex-col flex-1 pt-14 pb-4 rounded-md shadow-lg">
            <img
              loading="lazy"
              srcSet="..."
              className="self-center max-w-full aspect-[0.96] w-[180px]"
            />
            <div className="justify-center px-5 py-4 mt-7 bg-white max-md:pr-5">
              Name : Soeswahyuni
              <br />
              Lecturer Room : 6<br />
              Availability Status : Not Available
            </div>
          </div>
        </div>
        <div className="flex relative gap-5 px-5 mt-12 w-full text-xs font-semibold text-black max-w-[1568px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col flex-1 pt-14 pb-4 rounded-md shadow-lg">
            <img
              loading="lazy"
              srcSet="..."
              className="self-center max-w-full aspect-[0.96] w-[180px]"
            />
            <div className="justify-center items-start px-5 py-4 mt-7 bg-white max-md:pr-5">
              Name : Anindya Reizana <br />
              Lecturer Room : 4<br />
              Availability Status : Available
            </div>
          </div>
          <div className="flex flex-col flex-1 pt-14 pb-4 rounded-md shadow-lg">
            <img
              loading="lazy"
              srcSet="..."
              className="self-center max-w-full aspect-[0.96] w-[180px]"
            />
            <div className="justify-center px-5 py-4 mt-7 bg-white max-md:pr-5">
              Name : Soeswahyuni
              <br />
              Lecturer Room : 6<br />
              Availability Status : Not Available
            </div>
          </div>
          <div className="flex flex-col flex-1 pt-14 pb-4 rounded-md shadow-lg">
            <img
              loading="lazy"
              srcSet="..."
              className="self-center max-w-full aspect-[0.96] w-[180px]"
            />
            <div className="justify-center items-start px-5 py-4 mt-7 bg-white max-md:pr-5">
              Name : Anindya Reizana <br />
              Lecturer Room : 4<br />
              Availability Status : Available
            </div>
          </div>
          <div className="flex flex-col flex-1 pt-14 pb-4 rounded-md shadow-lg">
            <img
              loading="lazy"
              srcSet="..."
              className="self-center max-w-full aspect-[0.96] w-[180px]"
            />
            <div className="justify-center px-3.5 py-4 mt-7 bg-white">
              Name : Ahmad Rivaldi
              <br />
              Lecturer Room : 1<br />
              Availability Status : Thesis guidance
            </div>
          </div>
          <div className="flex flex-col flex-1 pt-14 pb-4 rounded-md shadow-lg">
            <img
              loading="lazy"
              srcSet="..."
              className="self-center max-w-full aspect-[0.96] w-[180px]"
            />
            <div className="justify-center items-start px-5 py-4 mt-7 bg-white max-md:pr-5">
              Name : Anindya Reizana <br />
              Lecturer Room : 4<br />
              Availability Status : Available
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
