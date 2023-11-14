import React, { useState } from 'react'


type Props = {

  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  // errorMessage: string;
}

interface inputsKey {
  id: number;
  name: string;
  type: string;
  placeholder: string;
  errormessage: string;
  label: string;
  pattern: string;
  required: boolean;
}



const FormInputs = ({ onChange, ...inputs }: Props) => {

  const [focused, setFocused] = useState(false);
  const input2 = inputs as inputsKey

  const handleFocus = () => {
    setFocused(true);
  }





  var input = inputs as inputsKey

  return (
    <div className='p-4'>
    <div className='flex justify-center flex-col'>
      <div className='flex text-left pr-5 text-l'>{input.label}</div>
      <input className='bg-zinc-100 border rounded-md h-[50px] peer w-[300px] invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500' 

      {...inputs} 
      onChange={onChange}
      onBlur={handleFocus}
      onFocus={() => input2.name === "confirmPassword" && setFocused(true)}
       />
      {focused ?
        (<span className=' text-gray-600 hidden text-sm w-[300px] peer-[:not(:focus):invalid]:flex peer-[&:not(:placeholder-shown):not(:focus):invalid]:text-red-600 '>{input.errormessage}</span>
        )
       : (<span></span>) }

      
  
    </div>
    

    </div>
  )
}

export default FormInputs