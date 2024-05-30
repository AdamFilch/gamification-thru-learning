import React from 'react';
import BuildIcon from '@mui/icons-material/Build';

export function GMNav() {
  return (
    <div className="sticky left-4 top-[88%] flex h-11 w-11 ">
      <div className=" flex w-full rounded-2xl border-2 border-black md:hidden">
        <BuildIcon className="m-auto bg-white" fontSize="inherit" />
      </div>
      <div className="absolute bottom-[120%] left-2 grid w-max grid-flow-row gap-2 rounded-2xl border-2 border-black p-3">
        <div>Learn</div>
        <div>
          <div>Games</div>
          <div className="grid grid-flow-row gap-2 pl-3 pt-2">
            <span>Word Scramble</span>
            <span>Quiz</span>
            <span>Wordle</span>
            <span>Drag-N-Drop</span>
          </div>
        </div>

        <div>Users</div>
      </div>
    </div>
  );
}
