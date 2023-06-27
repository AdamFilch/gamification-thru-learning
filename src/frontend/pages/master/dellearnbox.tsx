import { TrashIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react'

type Props = {
    // videos: object,
    onToggle: (event: any) => void;
}

type videoKey = {
    _id: string,
    id: number,
    num: number,
    title: string,
    author: string,
    channel: string,
    videolink: string,
    description: string,
}

const Dellearnbox = ({onToggle, ...videos}: Props) => {


  const [toggle, setToggle] = useState(false);
  const video = videos as unknown as videoKey;

  const handleToggle = () => {
    setToggle(!toggle);
    onToggle(video);

  }

  return (
    <div>
        <div className='flex flex-row'>
                        <div className={`border w-[1000px] ` + (toggle ? `border-red-900 bg-red-400 border-4` : `border-neutral-800`)} >
                            <div className='flex flex-col pb-[10px] p-4'>
                                <span className=' font-bold text-[25px]' >{video.title}</span>
                                <span className='font-semibold text-[15px]'>{video.author}</span>
                            </div>
                            <div className='p-4'>
                                <span className=''>{video.description}</span>
                            </div>
                        </div>
                        <button key={video._id} className=' w-[70px] h-[70px]' onClick={handleToggle} ><TrashIcon className=' m-auto h-10 w-10'/></button>
                        </div>
    </div>
  )
}

export default Dellearnbox