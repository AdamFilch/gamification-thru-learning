import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import Userbox from './userbox';

type Props = {}

type UserKey = {
  _id: string;
  firstname: String;
  username: String;
  password: String;
  role: String;
  teamsaccount: String;
  whatsappaccount: String;

}


const Permission = (props: Props) => {
  const [values, setValues] = useState<UserKey[]>([]);
  const [toUpdate, setToUpdate] = useState<UserKey[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    getUsers();

  }, []);

  const getUsers = () => {
    axios.get("http://localhost:3001/getUsers").then((res) => {
      const data = res.data.data;
      setValues(data);
      console.log(data)

    }).catch(() => {
      alert('Error Received')
    })
    return null;
  }

  const handleConfirm = () => {
        
    // toUpdate.forEach(deleteSelectedCard);
    console.log(toUpdate);
}


const handleToggle = (data: UserKey) => {


  // if (toDelete.some(element => {
  //     if(element._id === data._id) {

  //         return true;
  //     } else {
  //         return false;
  //     }
  // })) {
  //     var arr = toDelete.filter(el => el._id !== data._id);
  //     // console.log(arr);
      
  //     // console.log("true")
  //     setToDelete(arr);
  //     // console.log(toDelete);
  // } else {
  //     setToDelete(toDelete => [...toDelete, data]);
  //     // console.log("false");
  // }

  
}




  return (
    <div>
      <button className='absolute p-7' onClick={() => navigate("/Home") }><CloseIcon sx={{fontSize: 50}}/></button>
      <div>
      <div className='text-[25px] font-bold p-9 text-center'>Edit the permissions of Users</div>
      <div className=' flex-col space-y-10 flex items-center'>
                {values.map((user) => (
                    <Userbox key={user._id} {...user} onToggle={handleToggle} />
                ))}

            <button className='w-[200px] h-[50px] border font-bold text-xl rounded-md bg-gray-200 group-invalid:pointer-events-none group-invalid:opacity-30' onClick={handleConfirm} type="submit" >Confirm Edit<span> {`(`}{toUpdate.length}{`)`}</span></button>
        </div>


      </div>
    </div>
  )
}

export default Permission