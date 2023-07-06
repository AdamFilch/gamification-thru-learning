import React from 'react'

type Props = {
  comment: commentsKey,
  
}

type commentsKey = {
  author: string,
  comment: string,
  date: string,
}

const Commentbox = ({ comment}: Props) => {

  const dateCal = () => {
    
  }




  return (
    <div className='pt-3'>
        <div className='w-full h-auto min-h-[50px]'>
          <div className=' flex flex-row space-x-4'>
            <span className=' font-bold text-[20px] align-middle'>{comment.author}</span>
            <span></span>
            <span className=' align-middle flex'>{comment.date}</span>
          </div>
          <div>
            <span className=' pl-4 text-[17px]'>{comment.comment}</span>
          </div>
        </div>
    </div>
  )
}

export default Commentbox