import React, { useState } from 'react'
import FormInputs from './forminputs'
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CloseIcon from '@mui/icons-material/Close';

const registerSchema = yup.object().shape({
  username: yup.string().required("Required"),
  password: yup.string().required("Required"),
})

interface formVals {
  firstname: string,
  username: string,
  password: string,
}

const LoginForm = () => {

  const navigate = useNavigate();

  const [values, setValues] = useState({
    firstname: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  
  const inputs = [
    {
      id: 1,
      name: "firstname",
      type: "text",
      placeholder: "Enter your First Name",
      errormessage: "*Enter in the Name we should call you by.",
      label: "First Name",
      required: true,
    },
    {
      id: 2,
      name: "username",
      type: "text",
      placeholder: "Enter a Username",
      errormessage: "*Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Enter a Password",
      errormessage: "*Password should be 5-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      //pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,20}$`,
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errormessage: "*Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const register = async () => {
    const formData = new FormData();
    for (let value in values) {
      formData.append(value, values[value as keyof formVals])
    }
    console.log(values);

    const savedUserResponse = axios.post("http://localhost:3001/auth/register", values).then(res => {
      console.log(res.data)  
    });
  }



  // Event Handling
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await register();
    

  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value})
    
  }
  


  return (
    <div>
      <button className='absolute p-7' onClick={() => navigate("/") }><CloseIcon sx={{fontSize: 50}}/></button>
      <div className='flex align-middle justify-center text-[30px] pt-[50px] pb-9'>Register Now</div>
      <div className='flex align-middle w-[100%] h-[100%] justify-center'>
        
        <form id="signup-form" onSubmit={handleSubmit} noValidate>

          {inputs.map((inputs) => (
            <FormInputs key={inputs.id} {...inputs} onChange={onChange}
            />
          ))}
          <button className='  p-3 text-blue-800 underline end-full' onClick={() => navigate("/SignIn")}>Already have an Account?</button>
          <button className='w-[100%] h-[50px] p-[9px] border font-bold text-xl rounded-md bg-gray-200 group-invalid:pointer-events-none group-invalid:opacity-30' type="submit" >Submit</button>
        </form>
      </div>
    </div>
  )
}

export default LoginForm