import React from 'react';

export function GMNavMENU() {
  return (
    <ul className=" left-2 grid w-max grid-flow-row gap-2 rounded-2xl border-2 border-black bg-white p-4 pl-6 font-mono max-md:absolute max-md:bottom-[120%] md:sticky ">
      <li className=" font-bold">Learn</li>
      <li className="font-bold">
        Games
        <ul className="grid grid-flow-row gap-2 pl-4 pt-2 font-light">
          <li>Word Scramble</li>
          <li>Quiz</li>
          <li>Wordle</li>
          <li>Drag-N-Drop</li>
        </ul>
      </li>

      <li className="font-bold">Users</li>
    </ul>
  );
}
