import React from 'react'
import Gamesbox from './gamesbox'

type Props = {}

const Games = (props: Props) => {
  return (
    <div className='flex justify-center'>
      <div className=' grid grid-cols-3 gap-9 '>
        <Gamesbox gameDescription='Answer the question correctly' title='Quiz' nav='/Games/Quiz'/>
        <Gamesbox gameDescription='Descramble the hidden word' title='Word Scramble' nav='/Games/WordScramble'/>
        <Gamesbox gameDescription='Answer the question correctly' title='Wordle' nav='/Games/Wordle'/>
        <Gamesbox gameDescription='Find words from a scramble' title='Word Search' nav='/Games/Quiz'/>

      </div>
    </div>
  )
}

export default Games