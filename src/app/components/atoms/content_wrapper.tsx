import React from "react";

export default function ContentWrapper({ children }: {children:any}) {
  return (
    <div className="relative flex flex-col gap-5 justify-between self-stretch px-5 md:px-20 py-8 w-full bg-slate-900 md:flex-row md:flex-wrap">
      {children}
    </div>
    
  );
}

// <div className="flex relative gap-5 justify-between self-stretch px-5 md:px-20 py-8 w-full bg-slate-900 flex-wrap">
// add z-20 if want navbar blue bar
// add relative to had the navbar again(optional)