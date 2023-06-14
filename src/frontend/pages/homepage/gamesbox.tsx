import React from 'react'

type Props = {}

const Gamesbox = (props: Props) => {
  return (
    <button className={ ` border-4 w-[250px] h-[250px] text-zinc-950 hover:text-slate-200 hover:bg-slate-900 `} onClick={() => null }>
        <div>
            test
        </div>
        <div>
            games
        </div>
    </button>
  )
}

export default Gamesbox