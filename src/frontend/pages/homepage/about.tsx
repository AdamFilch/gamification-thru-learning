import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ContactBox from './contactsbox';
import { useSelector } from 'react-redux'
import { RootState } from '../../../main'

type Props = {}


type UserKey = {
  _id: string;
  firstname: String;
  username: String;
  password: String;
  role: String;
  teamsaccount: String;
  whatsappaccount: String;
  title: String;

}

const Contact = (props: Props) => {
  const navigate = useNavigate();
  const data = useSelector<RootState>((state => state.user))
  const s = data as UserKey;
  const [current, setCurrent] = useState<UserKey>(s);
  const [values, setValues] = useState<UserKey[]>([]);


  useEffect(() => {
    getUsers();


    

  }, []);

  const getUsers = () => {
    axios.get("http://localhost:3001/getUsers").then((res) => {
      const data = res.data.data;
      let array:UserKey[] = data
      
      setValues(array.filter((el) => {
        return el.role === "Lecturer";
      }));
      // console.log(values.filter((el) => {
      //   return el.role === "Lecturer";
      // }))
      // console.log(values);

    }).catch(() => {
      alert('Error Received')
    })
    return null;
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();



  }


  return (
    <div className=' h-auto'>
      <div className=' m-auto pt-3'>

      <div>
      <div className=' text-[24px] pb-4 text-center'>Edit your Contact Details</div>
        <div className='border-2 w-[800px] h-[250px] border-neutral-800 m-auto p-4'>
        
          <div className=' flex flex-col'>
            <span className=' text-[30px] font-bold'>{current.firstname}</span>
          </div>
          <div >
            <form onSubmit={handleSubmit}>
              <div className='flex flex-row'>
              <div className='flex flex-col space-y-4' >
                <div className=' text-[20px]'>Title: </div>
                <div className=' text-[20px]'>Teams Account: </div>
                <div className=' text-[20px]'>Whatsapp Number: </div>
              </div>
              <div className='flex flex-col space-y-5 pl-4'>
                <input className='w-[550px] bg-zinc-100 border rounded-md  ' />
                <input className='w-[550px] bg-zinc-100 border rounded-md  '/>
                <input className='w-[550px] bg-zinc-100 border rounded-md  '/>
              </div>
              </div>
              <div className='flex justify-end object-right right p-3'><button className=' border font-bold text-[20px] rounded-md' type="submit" >Confirm Edit</button></div>
              {/* <a href="https://api.whatsapp.com/send?phone=60168117523" target='_blank'>Contact Us on WhatsApp</a> */}
            </form>
          </div>
        </div>
        <div className='h-[40px]'></div>
        </div>



        <div>
          <div className=' text-[24px] pb-4 text-center'>Contact a Lecturer</div>
          <div className=' flex-col space-y-10 flex items-center'>
              {values.map((user) => (
                      <ContactBox key={user._id} {...user} />
                  ))}

          </div>
        </div>
      </div>
      <div className='w-screen h-[300px]'>
        <div>

        </div>
      </div>
    </div>
  )
}

export default Contact