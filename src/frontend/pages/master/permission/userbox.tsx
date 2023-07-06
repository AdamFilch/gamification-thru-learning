import { AcademicCapIcon, PuzzlePieceIcon, UserIcon } from '@heroicons/react/24/outline'
import React, { ButtonHTMLAttributes, HtmlHTMLAttributes, useEffect, useState } from 'react'

type Props = {

    onToggle: (event: any) => void;
   
}

type UserKey = {
    _id: String;
    firstname: String;
    username: String;
    password: String;
    role: String;
    teamsaccount: String;
    whatsappaccount: String;
  
  }

const Userbox = ({onToggle, ...users}: Props) => {
    const user = users as unknown as UserKey;

    const [player, setPlayer] = useState(false);
    const [lecturer, setLecturer] = useState(false);
    const [gm, setGM] = useState(false);

    useEffect(() => {
        decider();
    },[])

    const decider = () => {
        switch(user.role) {
            case "Player":
                setPlayer(true);
                setLecturer(false);
                setGM(false);
                break;
            case "Lecturer":
                setPlayer(false);
                setLecturer(true);
                setGM(false);
                break;
            case "Game Master":
                setPlayer(false);
                setLecturer(false);
                setGM(true);
                break;
        }

    }

    const togglePlayer = (event: React.MouseEvent<HTMLElement>) => {
        setPlayer(true);
        setLecturer(false);
        setGM(false);



    }

    const toggleLecturer = (event: React.MouseEvent<HTMLElement>) => {
        setPlayer(false);
        setLecturer(true);
        setGM(false);
    }

    const toggleGM = (event: React.MouseEvent<HTMLElement>) => {
        setPlayer(false);
        setLecturer(false);
        setGM(true);
    }




  return (
    <div>
        <div className=' border-2 w-[400px] h-[250px]'>
            <div className=' flex flex-col text-center'>
                <span className=' text-[30px] font-bold'>{user.firstname}</span>
                <span className=' text-[28px]'>({user.username})</span> 
            </div>
            <div className=' pt-5 space-x-[60px] justify-center flex'>
                <button type='button' className={` w-[60px] h-[60px]` + (player ? ` border-black border-4` : ` border-neutral-800`)} name='Player' onClick={togglePlayer}><UserIcon /><span>Player</span></button>
                <button type='button' className={` w-[60px] h-[60px]` + (lecturer ? ` border-black border-4` : ` border-neutral-800`)} name='Lecturer' onClick={toggleLecturer}><AcademicCapIcon /><span>Lecturer</span></button>
                <button type='button' className={` w-[60px] h-[60px]` + (gm ? ` border-black border-4` : ` border-neutral-800`)} name='Game Master' onClick={toggleGM}><PuzzlePieceIcon /><span>Game Master </span></button>
                
            </div>
        </div>
    </div>
  )
}

export default Userbox