import React from 'react'
import Gamesbox from './gamesbox'

type Props = {}

const Games = (props: Props) => {
  return (
    <div className='flex justify-center'>
      <div className=' grid grid-cols-3 gap-6 '>
        <Gamesbox />
        <Gamesbox />
        <Gamesbox />
        <Gamesbox />

      </div>
    </div>
  )
}

export default Games