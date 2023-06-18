import React from 'react'

type Props = {}

const Gamesbox = (props: Props) => {
  return (
    <button className={ ` border-4  text-zinc-950 hover:text-slate-200 hover:bg-slate-900 `} onClick={() => null }>
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