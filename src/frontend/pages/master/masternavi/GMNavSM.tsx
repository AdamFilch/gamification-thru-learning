import React, { useEffect, useRef, useState } from 'react';
import BuildIcon from '@mui/icons-material/Build';
import { GMNavMENU } from './GMNavMENU';
import { LandingPage } from '../../sections';

export function GMNavSM() {
  const [showMenu, setShowMenu] = useState(false);
  const [inView, setInView] = useState(false);

  const handleToggle = () => {
    const scrollPosition = window.scrollY;
    const element = document.getElementById('topOfSection');

    if (element) {
      // element.scrollIntoView({ behavior: 'smooth' });
      setShowMenu(!showMenu);
    }
  };

  // useEffect(() => {
  //   if (isListening) {
  //     window.addEventListener('scroll', handleScroll);
  //   }

  //   return () => {
  //     if (isListening) {
  //       window.removeEventListener('scroll', handleScroll);
  //     }
  //   };
  // }, [isListening]);

  return (
    <div className="sticky left-4 top-[88%] flex h-11 w-11 rounded-2xl border-2 md:hidden">
      <button
        onClick={handleToggle}
        className=" flex w-full rounded-2xl border-2 border-black bg-white focus:outline-none"
      >
        <BuildIcon className="m-auto " fontSize="inherit" />
      </button>
      <div
        className={` ${showMenu ? 'absolute' : 'hidden'}  left-3 top-[-10px]`}
      >
        <GMNavMENU />
      </div>
    </div>
  );
}
