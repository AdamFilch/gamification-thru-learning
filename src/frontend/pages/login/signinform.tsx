import React from 'react'
import { useState } from 'react'
import FormInputs from './forminputs'
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setLogin } from "../../shared/index.ts";
import Dropzone from "react-dropzone";
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';
 
const loginSchema = yup.object().shape({
  username: yup.string().required("Required"),
  password: yup.string().required("Required"),
})

interface formVals {
  username: string,
  password: string,
}





const SignInForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

    const [values, setValues] = useState({
        username: "",
        password: ""
      });
    const [errorFound, setErrorFound] = useState(false)

    const inputs = [
        {
          id: 1,
          name: "username",
          type: "text",
          placeholder: "Enter your Username",
          errormessage: "Username should be 3-16 characters and shouldn't include any special character!",
          label: "Username",
          pattern: "^[A-Za-z0-9]{3,16}$",
          required: true,
        },      
            {
            id: 2,
            name: "password",
            type: "password",
            placeholder: "Enter your Password",
            errormessage: "Enter the password to the account",
            label: "Password",
            //pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true,
        },  

    ]


    const login = async () => {
      
  
      const loggedInResponse = axios.post("http://localhost:3001/auth/login", values).then(res => {
        console.log(res.data);

          dispatch(
            setLogin({
              user: res.data.user,
              token: res.data.token,
          })
          );

        setErrorFound(false);
        console.log();
        navigate("/Home");
      }).catch(function (error) {
        setErrorFound(true);
      })

      // const loggedInResponse = await fetch(
      //   "http://localhost:3001/auth/login",
      //   {
      //     method: "POST",
      //     headers: {"Content-Type": "application/json"},
      //     body: JSON.stringify(values),
      //   }
      // );
  
      // const loggedIn = await loggedInResponse.json();
      // if (loggedIn) {
      //   console.log("Successfully added")
      //   dispatch(
      //     setLogin({
      //       user: loggedIn.user,
      //       token: loggedIn.token,
      //     })
      //   );
      //   
      // }
    } 


  // Event Handling
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(values)

    await login();



  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value})
    
  }
  
  

  return (
    <div className=''>
      <button className='absolute p-7' onClick={() => navigate("/") }><CloseIcon sx={{fontSize: 50}}/></button>
      <div className='flex align-middle justify-center text-[30px] pt-[50px] pb-9'>Log Into your Account</div>
      {errorFound ? (
        <div className=' w-[300px] h-[70px] border-2 border-black bg-red-500 m-auto text-center p-2'>
        <span className=' text-[18px] font-bold'>An error has been found, Invalid Username and Password</span>
      </div>
      ) : (<div></div>)}
      <div className='flex align-middle w-[100%] h-[100%]  justify-center'>
        <form className=' ' onSubmit={handleSubmit} noValidate>

          {inputs.map((inputs) => (
            <FormInputs key={inputs.id} {...inputs} onChange={onChange}
            />
          ))}
          <button className='  p-3 text-blue-800 underline end-full' onClick={() => navigate("/SignUp")}>Register for an Account</button>
          <button className=' w-[100%] h-[50px] p-[9px] border font-bold text-xl rounded-md bg-gray-200 group-invalid:pointer-events-none group-invalid:opacity-30' type="submit" >Submit</button>
        </form>
      </div>
    </div>
  )
}

export default SignInForm