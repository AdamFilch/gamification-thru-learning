import React, { useState } from 'react'
import { boardDefault } from '../words';
import Letter from './letter';

type Props = {}

const Board = (props: Props) => {
    const [board, setBoard] = useState(boardDefault);



  return (
    <div>
        <div>
            <div>

                <Letter LetterPosition={0} AttemptVal={0} />
                <Letter LetterPosition={1} AttemptVal={0} />
                <Letter LetterPosition={2} AttemptVal={0} />
                <Letter LetterPosition={3} AttemptVal={0} />
                <Letter LetterPosition={4} AttemptVal={0} />
            </div>
            <div>

                <Letter LetterPosition={0} AttemptVal={0} />
                <Letter LetterPosition={1} AttemptVal={0} />
                <Letter LetterPosition={2} AttemptVal={0} />
                <Letter LetterPosition={3} AttemptVal={0} />
                <Letter LetterPosition={4} AttemptVal={0} />
            </div>
        </div>
    </div>
  )
}

export default Board