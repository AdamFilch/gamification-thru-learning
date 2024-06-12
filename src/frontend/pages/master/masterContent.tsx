import { useState } from 'react';
import useMediaQuery from '../../shared/useMediaQuery';
import { GMNavMD, GMNavSM } from './masternavi';

export function MasterContent() {
  const [content, setContent] = useState();

  const isMD = useMediaQuery(768);
  return (
    <div className="m-auto grid h-full max-w-[1600px]">
      <div className=" min-h-screen">{isMD ? <GMNavSM /> : <GMNavMD />}</div>
    </div>
  );
}
