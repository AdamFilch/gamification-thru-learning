import React from 'react'

type Props = {}

function Learnbox({}: Props) {
  return (
    <button>
      <div className={` group inline-flex border-4 box-border h-[80px] w-[800px] text-zinc-950 hover:text-slate-200 hover:bg-slate-900`} onClick={() => null } >
        <div className='flex items-center align-middle p-8'>
          ICON
        </div>
        <div dir='ltr' className='flex items-center align-middle w-[600px]'>
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



