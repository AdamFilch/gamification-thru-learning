import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../main'

import Learn from './learn'
import About from './about'
import Master from './master'
import Chatbot from './chatbot'



type Props = {}

type userInt = {
 username: string,
 password: string,
 firstname: string,
 gameProgress: Array<String>[],
 ongoingCourse: Array<String>[],
 role: string,
 _id: string,

}

const Content = (activeTab: number) => {
  switch(activeTab) {
    case 1:
      return <Chatbot />
    case 2:
      return <Learn />
    case 3:
      return <Master />
    case 4:
      return <About />
    default: 
      return <Learn />
  }

}


const HomePage = (props: Props) => {
  const [activeTab, setActiveTab] = useState(2);
  const data = useSelector<RootState>((state => state.user))
  const user = data as userInt;
   

  return (
    <div>
      <div className="justify-center col-auto flex">
        <h1 className='font-bold text-lg p-14'>Welcome to APClue,  {user.firstname}</h1>
        
      </div>
      <div>
        <blockquote>
          <span>
            <h2 className='flex justify-center'>Learn some shit from yo lecturers then you hunt sum qrcodes that Pot tells you to find</h2>
          </span>
        </blockquote>
      </div>
      <div>
        <div className='flex justify-center space-x-10 text-base'>
          <button key="1" className={`p-4 rounded-t-lg text-center border-b-2 transition-colors duration-300 ${1 == activeTab ? "border-yellow-700"
                  : "border-transparent hover:border-yellow-700" }`}
                  onClick={() => setActiveTab(1)}>Chatbot</button>
          <button key="2" className={`p-4 rounded-t-lg text-center border-b-2 transition-colors duration-300 ${2 == activeTab ? "border-yellow-700"
                  : "border-transparent hover:border-gray-200" }`}
                  onClick={() => setActiveTab(2)}>Learn</button>
          <button key="3" className={`p-4 rounded-t-lg text-center border-b-2 transition-colors duration-300 ${3 == activeTab ? "border-yellow-700"
                  : "border-transparent hover:border-gray-200" }`}
                  onClick={() => setActiveTab(3)}>Game Master</button>
          {/* <button key="3" className="inline-block p-4 hover:border-gray-300 rounded-t-lg text-center border-transparent border-b-2">Game Master</button> */}
          <button key="4" className={`p-4 rounded-t-lg text-center  border-b-2 transition-colors duration-300 ${4 == activeTab ? "border-yellow-700"
                  : "border-transparent hover:border-gray-200" }`}
                  onClick={() => setActiveTab(4)}>About</button>
          {/* "inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300" */}
          {/* className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" */}
        </div>
        <div>
          <div>
            <h2>{Content(activeTab)}</h2>
          </div>
        </div>
      </div>
      
      
      



    </div>
  )
}

export default HomePage