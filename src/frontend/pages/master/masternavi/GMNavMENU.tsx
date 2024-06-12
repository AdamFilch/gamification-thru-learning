import React from 'react';
import NavBtn from './NavBtn';

export function GMNavMENU() {
  return (
    <ul className="grid w-max grid-flow-row gap-2 rounded-2xl border-2 border-black bg-white p-4 pl-6 font-mono max-md:absolute max-md:bottom-[100%] md:sticky ">
      <div className="mb-3 text-center font-sans text-[16px] font-semibold">
        NAVIGATION
      </div>

      <NavBtn level={1} nav="learn">
        Learn
      </NavBtn>
      <li className="">
        Games
        <ul className="grid grid-flow-row gap-2 pl-4 pt-2 font-light">
          <NavBtn level={2} nav="wordScramble">
            Word Scramble
          </NavBtn>
          <NavBtn level={2} nav="quiz">
            Quiz
          </NavBtn>
          <NavBtn level={2} nav="wordle">
            Wordle
          </NavBtn>
          <NavBtn level={2} nav="dragNDrop">
            Drag-N-Drop
          </NavBtn>
        </ul>
      </li>
      <NavBtn level={1} nav="users">
        Users
      </NavBtn>
    </ul>
  );
}
