import path from 'path'
import React from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {
  // image: string,
  gameDescription: string,
  title: string,
  nav: string,

}

const Gamesbox = ({gameDescription, title, nav}: Props) => {
  const navigate = useNavigate();
  return (
    <button className={ ` border-4  text-zinc-950 hover:text-slate-200 hover:bg-slate-900 `} onClick={() => navigate(nav) }>
        <div className='w-[350px] h-[250px]'>
            IMAGE
        </div>
        <div className='flex flex-col w-[350px] h-[150px] justify-center'>
          <span className=' text-[23px] font-bold'>{title}</span>
          <span className=' text-[20px]'>{gameDescription}</span>
        </div>

    </button>
  )
}

export default Gamesbox