import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import LearnVidPage from './learnvideo';
import axios from 'axios';


type Props = {
  videos: object,

  
}

interface videoKey {
  _id: string,
  id: number,
  num: number,
  title: string,
  author: string,
  channel: string,
  videolink: string,
  description: string;
};

function Learnbox({ ...videos}: Props) {

  const navigate = useNavigate();
  

  const video = videos as unknown as videoKey;

  
  
  return (
    <button>

      <div className={` group inline-flex border-2 box-border border-neutral-800 h-[80px] w-[1000px] text-zinc-950 hover:text-slate-200 hover:bg-slate-900`} onClick={() => navigate(`/Video/${video._id}`) } >
        <div className='flex items-center align-middle p-8'>
          ICON
        </div>
        <div dir='ltr' className='flex items-center text-lg align-middle w-[800px]'>
          {video.title}
        </div>
        <div dir='ltr' className='flex items-center align-middle p-7'>
          DDB
        </div>
      </div>
      
    </button>
  )
}

export default Learnbox



