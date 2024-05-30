import React from 'react';
import BuildIcon from '@mui/icons-material/Build';

export function GMNav() {
  return (
    <div className="sticky left-4 top-[88%] flex h-11 w-11 ">
      <div className=" flex w-full rounded-2xl border-2 border-black md:hidden">
        <BuildIcon className="m-auto bg-white" fontSize="inherit" />
      </div>
      {/* <div>Nav Bar</div> */}
    </div>
  );
}
