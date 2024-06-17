import React from "react";

export default function Container({ children }: {children:any}) {
  return (
    <div className="relative flex flex-col justify-center min-h-screen w-full overflow-x-auto overflow-y-auto">
      {children}
    </div>
  );
}

//  bg-slate-900
//  add relative
//  add w-full overflow-x-auto