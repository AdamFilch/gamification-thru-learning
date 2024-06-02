import React from 'react';
import BuildIcon from '@mui/icons-material/Build';
import { GMNavMENU } from './GMNavMENU';

export function GMNavSM() {
  return (
    <div className="sticky left-4 top-[88%] flex h-11 w-11 md:hidden">
      <div className=" flex w-full rounded-2xl border-2 border-black bg-white ">
        <BuildIcon className="m-auto " fontSize="inherit" />
      </div>
      <div>
        <GMNavMENU />
      </div>
    </div>
  );
}
