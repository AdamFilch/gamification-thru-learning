import React from 'react'
import teams from '../../../assets/teams.png'
import whatsapp from '../../../assets/whatsapp.png'

type Props = {}

type UserKey = {
    _id: String;
    firstname: String;
    username: String;
    password: String;
    role: String;
    teamsaccount: String;
    whatsappaccount: String;
    title: String;
  
  }


const ContactBox = ({ ...users}: Props) => {
    const user = users as unknown as UserKey;

  return (
    <div className='border-2 w-[400px] h-[180px] border-neutral-800'>
        <div className='flex flex-col p-4'>
            <span className=' text-[30px] font-bold'>{user.firstname}</span>
            {user.title == "" ? (<span className=' text-[25px] font-semibold'>Lecturer</span>) : (<span className=' text-[25px] font-semibold'>{user.title == "" ? (<div>{user.title}</div>) : (<div>Lecturer</div>)}</span>)}
        </div>
        <div className=' flex flex-row space-x-8 left justify-end pr-8'>
            {user.teamsaccount == "" ? (<button className=' grayscale' disabled ><img className='w-[50px] h-[50px]' src={teams} /></button>) : (<button><img className='w-[50px] h-[50px]' src={teams} /></button>)}
            {user.whatsappaccount == "" ? (<button className=' grayscale' disabled ><img className='w-[50px] h-50px]' src={whatsapp} /></button>) : (<a href={`https://api.whatsapp.com/send?phone=${user.whatsappaccount}`} target='_blank'><button><img className='w-[50px] h-[50px]' src={whatsapp} /></button></a>)}
            
            {/* <button>{user.whatsappaccount}</button> */}
        </div>
    </div>
  )
}

export default ContactBox