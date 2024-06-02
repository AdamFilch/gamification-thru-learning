import React from 'react';

export function GMNavMD() {
  return (
    <ul className=" left-2 ml-10 grid w-max grid-flow-row gap-2 rounded-2xl border-2 border-black bg-white p-7 px-10 font-mono text-lg">
      <div className="mb-3 text-center font-sans text-[16px] font-semibold">
        NAVIGATION
      </div>
      <li className="text-[19px] font-bold lg:text-[22px]">Learn</li>
      <li className="text-[19px] font-bold lg:text-[22px]">
        Games
        <ul className="grid grid-flow-row gap-2 pt-3 text-[16px] font-light lg:text-[20px]">
          <li className="pl-5">Word Scramble</li>
          <li className="pl-5">Quiz</li>
          <li className="pl-5">Wordle</li>
          <li className="pl-5">Drag-N-Drop</li>
        </ul>
      </li>

      <li className="text-[19px] font-bold lg:text-[22px]">Users</li>
    </ul>
  );
}
