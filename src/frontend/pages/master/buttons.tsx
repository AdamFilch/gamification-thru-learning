import React from 'react'
import { ChartBarIcon, MinusIcon, PlusIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import { useNavigate } from 'react-router-dom';


type Props = {
    content: number;
    label: string;
    nav: string;

}

const AddDel = ({content, label, nav}: Props) => {
    const contentDecider = (content: number) => {
        switch(content) {
            case 1:
                return <div className=' flex flex-col'>
                            <PlusIcon className='h-[50px] w-[50px] m-auto'/>
                    <span className=' text-[20px]'>{label}</span>    
                </div>
            case 2:
                return <div className=' felx flex-col'>
                    <MinusIcon className='h-[50px] w-[50px] m-auto'/>
                    <span className=' text-[20px] '>{label}</span>
                </div>
            case 3:
                return <div>
                    <ChartBarIcon className='h-[50px] w-[50px] m-auto'/>
                    <span className=' text-[20px] '>View Student Records</span>
                </div>
            case 4:
                return <div>
                    <UserGroupIcon className='h-[50px] w-[50px] m-auto'/>
                    <span className=' text-[20px] '>{label}</span>
                </div>
            default:
                return <div>Add</div>
        }
    }

    const navigate = useNavigate();

  return (
    <button className='w-[150px] h-[150px] text-zinc-950 hover:text-slate-200 hover:bg-slate-900' onClick={() => navigate(nav)}>
        {contentDecider(content)}
    </button>
  )
}

export default AddDel