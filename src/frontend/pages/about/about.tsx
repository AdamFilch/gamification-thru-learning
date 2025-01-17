import React, { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ContactBox from '../contacts/contactsbox';
import { useSelector } from 'react-redux';
import { RootState } from '../../../main';

type UserKey = {
  _id: string;
  firstname: string;
  username: string;
  password: string;
  role: string;
  teamsaccount: string;
  whatsappaccount: string;
  title: string;
};

const Contact = () => {
  const navigate = useNavigate();
  const data = useSelector<RootState>((state) => state.user);
  const s = data as UserKey;
  const [current, setCurrent] = useState<UserKey>(s);
  const [values, setValues] = useState<UserKey[]>([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    axios
      .get('http://localhost:3001/getUsers')
      .then((res) => {
        const data = res.data.data;
        const array: UserKey[] = data;

        setValues(
          array.filter((el) => {
            return el.role === 'Lecturer';
          }),
        );
        // console.log(values.filter((el) => {
        //   return el.role === "Lecturer";
        // }))
        // console.log(values);
      })
      .catch(() => {
        alert('Error Received');
      });
    return null;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className=" h-auto">
      <div className=" m-auto pt-3">
        <div>
          <div className=" pb-4 text-center text-[24px]">
            Edit your Contact Details
          </div>
          <div className="m-auto h-[250px] w-[800px] border-2 border-neutral-800 p-4">
            <div className=" flex flex-col">
              <span className=" text-[30px] font-bold">
                {current.firstname}
              </span>
            </div>
            <div>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-row">
                  <div className="flex flex-col space-y-4">
                    <div className=" text-[20px]">Title: </div>
                    <div className=" text-[20px]">Teams Account: </div>
                    <div className=" text-[20px]">Whatsapp Number: </div>
                  </div>
                  <div className="flex flex-col space-y-5 pl-4">
                    <input className="w-[550px] rounded-md border bg-zinc-100  " />
                    <input className="w-[550px] rounded-md border bg-zinc-100  " />
                    <input className="w-[550px] rounded-md border bg-zinc-100  " />
                  </div>
                </div>
                <div className="right flex justify-end object-right p-3">
                  <button
                    className=" rounded-md border text-[20px] font-bold"
                    type="submit"
                  >
                    Confirm Edit
                  </button>
                </div>
                {/* <a href="https://api.whatsapp.com/send?phone=60168117523" target='_blank'>Contact Us on WhatsApp</a> */}
              </form>
            </div>
          </div>
          <div className="h-[40px]"></div>
        </div>

        <div>
          <div className=" pb-4 text-center text-[24px]">
            Contact a Lecturer
          </div>
          <div className=" flex flex-col items-center space-y-10">
            {values.map((user) => (
              <ContactBox key={user._id} {...user} />
            ))}
          </div>
        </div>
      </div>
      <div className="h-[300px] w-screen">
        <div></div>
      </div>
    </div>
  );
};

export default Contact;
