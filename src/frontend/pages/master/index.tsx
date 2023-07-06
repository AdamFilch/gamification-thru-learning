import React from 'react'
import AddDel from './buttons'

type Props = {}

const Master = (props: Props) => {
  return (
    <div className=' h-auto flex flex-col'>
        <div className=' m-auto flex flex-col pt-3'>
            <span className=' text-center text-[24px] pb-4'>Add a learn Video/Document</span>
            <div className=' flex flex-row m-auto space-x-16'>
                <AddDel content={1} label='Add a Learn post' nav='/AddALearn'/>
                <AddDel content={2} label='Delete a Learn post' nav='/DeleteALearn'/>
                
            </div>
        </div>
        <div className=' m-auto flex flex-col pt-10'>
            <span className=' text-center text-[24px]  pb-4'>Add a word to Word Scramble</span>
            <div className=' flex flex-row m-auto space-x-16'>
                <AddDel content={1} label='Add a Word' nav='/WS/AddAWord'/>
                <AddDel content={2} label='Delete a Word' nav='/WS/DeleteAWord'/>
                {/* <AddDel content={3} label='Add a Learn post' nav='/AddALearn'/> */}
            </div>
        </div>
        <div className=' m-auto flex flex-col pt-10'>
            <span className=' text-center text-[24px]  pb-4'>Add another card to the Quiz</span>
            <div className=' flex flex-row m-auto space-x-16'>
                <AddDel content={1} label='Add a Quiz Card' nav='/Q/AddACard'/>
                <AddDel content={2} label='Delete a Quiz Card' nav='/Q/DeleteACard'/>
                {/* <AddDel content={3} label='Add a Learn post' nav='/AddALearn'/> */}
            </div>
        </div>
        <div className=' m-auto flex flex-col pt-10'>
            <span className=' text-center text-[24px]  pb-4'>Edit User Permissions</span>
            <div className=' flex flex-row m-auto space-x-16'>
                <AddDel content={4} label='Change Permissions' nav='/User/Permissions'/>
            </div>
        </div>
    </div>
  )
}

export default Master