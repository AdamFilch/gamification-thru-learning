import React from 'react'
import Board from './components/board'
import Keyboard from './components/keyboard'

type Props = {}

const Index = (props: Props) => {
  return (
    <div>
        <div>
            

            <Board />
            <Keyboard />
        </div>
    </div>
  )
}

export default Index