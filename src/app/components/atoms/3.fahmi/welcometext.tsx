import React from "react";

export default function WelcomeText(){
  return(<div className="flex flex-col px-5 text-5xl text-white leading-[74.88px] max-w-[776px] max-md:text-4xl">
  <div className="w-full max-md:max-w-full max-md:text-4xl">Welcome to</div>
  <div className="mt-7 w-full font-extrabold text-yellow-400 max-md:max-w-full max-md:text-4xl">
    LECTURER AVAILABILITY SYSTEM
  </div>
  <div className="mt-5 w-full text-2xl leading-10 max-md:max-w-full">
    Department of Information Technology
    <br />
    State Polytechnic of Malang
  </div>
</div>);
}