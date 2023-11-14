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
  const [toDelete, setToDelete] = useState<UserKey[]>([]);

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

  const editPermissions = (user: UserKey) => {
    console.log(user);
    
    const savedPermissions = axios.post(`http://localhost:3001/User/Edit/permission` , user).then(res => {
      console.log(res.data);
    }).then(() => {
      setValues([]);
      getUsers();
    })

  }


const deleteSelectedCard = async (user: UserKey) => {
        
    // console.log(video);
    await axios.post("http://localhost:3001/User/Delete", user).then(res => {
        console.log(res);
    }).then((data) => {
        setToDelete([]);
        getUsers();
    })
}




const handleConfirm = () => {
        
  toDelete.forEach(deleteSelectedCard);
  // console.log(toDelete)
}

const handleDelte = (data: UserKey) => {
  if (toDelete.some(element => {
      if(element._id === data._id) {

          return true;
      } else {
          return false;
      }
  })) {
      var arr = toDelete.filter(el => el._id !== data._id);
      // console.log(arr);
      
      // console.log("true")
      setToDelete(arr);
      // console.log(toDelete);
  } else {
      setToDelete(toDelete => [...toDelete, data]);
      // console.log("false");
  }
  // console.log(toDelete);
}


const handleToggle = (data: UserKey) => {

  
  // console.log(data);
  
  // console.log(toUpdate);



  editPermissions(data);



  // if (toUpdate.some(element => {
  //     if(element._id === data._id) {

  //         return true; // Exist
  //     } else {
  //         return false; // Does not Exist
  //     }
  // })) {
  //   if(toUpdate.some(element => {
  //         if(element.role === data.role) {

  //           return true; // If the role is the same
  //       } else {
  //           return false; // If the role is different
  //       }
  //   })) { // If exists delete?
  //     var arr = toUpdate.filter(el => el._id !== data._id);
  //     setToUpdate(arr);


  //    } else { // If a different role delete the old and add the new
  //     var arr = toUpdate.filter(el => el._id !== data._id);
  //     // console.log(arr);

  //     setToUpdate(arr);
  //     setToUpdate(toUpdate => [...toUpdate, data]);
  //     console.log(toUpdate); 
  //   }
  // } else { // if non existing, add the new
  //     setToUpdate(toUpdate => [...toUpdate, data]);
  //     // console.log("false");
  // }
  
  


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
                    <Userbox key={user._id} {...user} onToggle={handleToggle} onDel={handleDelte} />
                ))}

            <button className='w-[200px] h-[50px] border font-bold text-xl rounded-md bg-gray-200 group-invalid:pointer-events-none group-invalid:opacity-30' onClick={handleConfirm} type="submit" >Confirm Delete<span> {`(`}{toDelete.length}{`)`}</span></button>
            
        </div>


      </div>
    </div>
  )
}

export default Permission