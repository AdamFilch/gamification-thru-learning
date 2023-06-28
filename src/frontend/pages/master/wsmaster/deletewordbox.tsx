import { TrashIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react'

type Props = {
    onToggle: (event: any) => void;

}

type wordKey = {
    _id: string,
    word: String,
    hint: String,
}

const DeleteWSWordBox = ({onToggle, ...words}: Props) => {

    const [toggle, setToggle] = useState(false);
    const word = words as unknown as wordKey;

    const handleToggle = () => {
        setToggle(!toggle);
        onToggle(word);
    
    }



  return (
    <div className='flex flex-row'>
        <div className={`border w-[700px] ` + (toggle ? `border-red-900 bg-red-400 border-4` : `border-neutral-800`)} >
            <div className='flex flex-col text-center p-4'>
                <span className=' text-[25px] font-bold'>{word.word.toUpperCase()}</span>
                <span className='text-[20px]'>{word.hint}</span>
            </div>
        </div>
        <button key={word._id} className=' w-[70px] h-[70px]' onClick={handleToggle} ><TrashIcon className=' m-auto h-10 w-10'/></button>
    </div>
  )
}

export default DeleteWSWordBox