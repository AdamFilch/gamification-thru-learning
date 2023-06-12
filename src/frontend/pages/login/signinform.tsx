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

    const inputs = [
        {
          id: 1,
          name: "username",
          type: "text",
          placeholder: "Username",
          errormessage: "Username should be 3-16 characters and shouldn't include any special character!",
          label: "Username",
          pattern: "^[A-Za-z0-9]{3,16}$",
          required: true,
        },      
            {
            id: 2,
            name: "password",
            type: "password",
            placeholder: "Password",
            errormessage: "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
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

          
        console.log("adhfkahfk; Logged In");
        navigate("/home");
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
    <div>
      <div>
        <form onSubmit={handleSubmit}>

          {inputs.map((inputs) => (
            <FormInputs key={inputs.id} {...inputs} onChange={onChange}
            />
          ))}
          <button type="submit" >Submit</button>
        </form>
      </div>
    </div>
  )
}

export default SignInForm