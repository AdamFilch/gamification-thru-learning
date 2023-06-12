import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../main'

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

const HomePage = (props: Props) => {
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
      
      
      



    </div>
  )
}

export default HomePage