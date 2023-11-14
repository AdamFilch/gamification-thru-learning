import React from 'react'
import Gamesbox from './gamesbox'
import quiz from '../../../assets/quizgames.png'
import ws from '../../../assets/wordscramblegames.png'

type Props = {}

const Games = (props: Props) => {
  return (
    <div className='flex justify-center'>
      <div className=' grid grid-cols-3 gap-9 '>
        <Gamesbox gameDescription='Answer the question correctly' title='Quiz' nav='/Games/Quiz' image='quiz'/>
        <Gamesbox gameDescription='Descramble the hidden word' title='Word Scramble' nav='/Games/WordScramble' image='ws'/>
        {/* <Gamesbox gameDescription='Answer the question correctly' title='Wordle' nav='/Games/Wordle' image=''/>
        <Gamesbox gameDescription='Find words from a scramble' title='Word Search' nav='/Games/Quiz' image=''/> */}

      </div>
    </div>
  )
}

export default Games