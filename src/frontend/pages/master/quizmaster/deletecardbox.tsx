import { TrashIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react'

type Props = {
    onToggle: (event: any) => void;
}

type questionKey = {
    _id: string,
    question: string,
    options: [{
        option: string,
        answer: boolean,
}],

}

const Deletecardbox = ({onToggle, ...questions}: Props) => {

    const [toggle, setToggle] = useState(false);
    const question = questions as unknown as questionKey

    const handleToggle = () => {
        setToggle(!toggle);
        onToggle(question);
    }

  return (
    <div>
        <div className='flex flex-row'>
            <div className=''>
            <div className={`border-2 border-slate-900 w-[500px] h-[400px] flex` + (toggle ? `border-red-900 bg-red-400 border-4` : `border-neutral-800`)}>
                <div className=' p-4 w-[80%] h-[200px] m-auto'>
                    <span className=' text-[30px] font-bold text-center flex justify-center p-4'>{question.question}</span>
                </div>
                <div className='flex justify-center'>
                <div className='grid grid-cols-2 gap-3 m-auto'>
                    {question.options.map((option) => (
                        <span className={`border-2 text-center text-[18px] font-semibold w-[200px] h-[80px] border-neutral-800` + (option.answer ? ` bg-green-500 border-green-900 border-[5px] ` : ``)}>{option.option}</span>
                    ))}
                </div>
                </div>
            </div>
            </div>
            <button key={question._id} className=' w-[70px] h-[70px]' onClick={handleToggle} ><TrashIcon className=' m-auto h-10 w-10'/></button>
        </div>
    </div>
  )
}

export default Deletecardbox