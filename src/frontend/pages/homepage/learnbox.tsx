import React from 'react'
import { useNavigate } from 'react-router-dom'


type Props = {
  // videoDetails: object,

  
}

function Learnbox({}: Props) {

  const navigate = useNavigate();
  
  return (
    <button>
      <div className={` group inline-flex border-4 box-border h-[80px] w-[1000px] text-zinc-950 hover:text-slate-200 hover:bg-slate-900`} onClick={() => navigate("/Video") } >
        <div className='flex items-center align-middle p-8'>
          ICON
        </div>
        <div dir='ltr' className='flex items-center align-middle w-[800px]'>
          Lesson Name
        </div>
        <div dir='ltr' className='flex items-center align-middle p-7'>
          DDB
        </div>
      </div>
    </button>
  )
}

export default Learnbox



