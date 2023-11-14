import { AcademicCapIcon, CheckIcon, PuzzlePieceIcon, UserIcon } from '@heroicons/react/24/outline'
import React, { ButtonHTMLAttributes, HtmlHTMLAttributes, useEffect, useState } from 'react'
import { TrashIcon } from '@heroicons/react/24/outline';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../main';

type Props = {
    onToggle: (event: any) => void;
    onDel: (event: any) => void;
   
   
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

const Userbox = ({onToggle, onDel, ...users}: Props) => {
    const user = users as unknown as UserKey;


    const [userVal, setUserVal] = useState<UserKey>(user)
    const [player, setPlayer] = useState(false);
    const [lecturer, setLecturer] = useState(false);
    const [gm, setGM] = useState(false);
    const [original, setOriginial] = useState("");
    const forceUpdate = React.useCallback(() => setUserVal({...userVal}), []);
    const [deleteTog, setDeleteTog] = useState(false);
    const data = useSelector<RootState>((state => state.user))

    useEffect(() => {
        decider();
    },[])

    const decider = () => {
        switch(user.role) {
            case "Player":
                setPlayer(true);
                setLecturer(false);
                setGM(false);
                setOriginial("Player")
                
                break;
            case "Lecturer":
                setPlayer(false);
                setLecturer(true);
                setGM(false);
                setOriginial("Lecturer")
                
                break;
            case "Game Master":
                setPlayer(false);
                setLecturer(false);
                setGM(true);
                setOriginial("Game Master")
                break;
        }

    }

    const togglePlayer = (event: React.MouseEvent<HTMLElement>) => {
        setUserVal({...userVal, 
            role: "Player"});
        setPlayer(true);
        setLecturer(false);
        setGM(false);
        




    }

    const toggleLecturer = (event: React.MouseEvent<HTMLElement>) => {
        setUserVal({...userVal, 
            role: "Lecturer"});
        setPlayer(false);
        setLecturer(true);
        setGM(false);
        

    }

    const toggleGM = (event: React.MouseEvent<HTMLElement>) => {
        setUserVal({...userVal, 
            role: "Game Master"});
        setPlayer(false);
        setLecturer(false);
        setGM(true);
        
    }


    const confirm = () => {
        // console.log(userVal);
        onToggle(userVal);
    }

    const handleDelete = () => {
        setDeleteTog(!deleteTog);
        onDel(userVal)

    }




  return (
    <div className=' flex flex-row'>
        <div className={` border-2 w-[400px] h-[250px] ` + (deleteTog ? `border-red-900 bg-red-400 border-4` : `border-neutral-800`)}>
            <div className=' flex flex-col text-center'>
                <span className=' text-[30px] font-bold'>{user.firstname}</span>
                <span className=' text-[28px]'>({user.username})</span> 
            </div>
            <div className=' pt-5 space-x-[60px] justify-center flex'>
                <button type='button' className={` w-[60px] h-[60px] ` + (original == "Player" ? ` bg-green-300 ` : ``) + (player ? ` border-black border-4` : ` border-neutral-800`)} name='Player' onClick={togglePlayer}><UserIcon /><span>Player</span></button>
                <button type='button' className={` w-[60px] h-[60px] ` + (original == "Lecturer" ? ` bg-green-300 ` : ``) + (lecturer ? ` border-black border-4` : ` border-neutral-800`)} name='Lecturer' onClick={toggleLecturer}><AcademicCapIcon /><span>Lecturer</span></button>
                <button type='button' className={` w-[60px] h-[60px] ` + (original == "Game Master" ? ` bg-green-300 ` : ``) + (gm ? ` border-black border-4` : ` border-neutral-800`)} name='Game Master' onClick={toggleGM}><PuzzlePieceIcon /><span>Game Master </span></button>
                
            </div>
            
        </div>
        <div>
            <button className=' w-[50px] h-[50px]' onClick={confirm}><CheckIcon></CheckIcon> </button>     
            <button className=' w-[70px] h-[70px]' onClick={handleDelete} ><TrashIcon className=' m-auto h-10 w-10'/></button>  
        </div>
    </div>
  )
}

export default Userbox