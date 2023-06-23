import path from 'path'
import React from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {
  // image: string,
  // gameDescription: string,
  // title: string,

}

const Gamesbox = (props: Props) => {
  const navigate = useNavigate();
  return (
    <button className={ ` border-4  text-zinc-950 hover:text-slate-200 hover:bg-slate-900 `} onClick={() => navigate("/Games/Quiz") }>
        <div className='w-[350px] h-[300px]'>
            IMAGE
        </div>
        <div className='w-[350px] h-[60px] flex justify-center p-4'>
            Game Description and Title
        </div>
    </button>
  )
}

export default Gamesbox