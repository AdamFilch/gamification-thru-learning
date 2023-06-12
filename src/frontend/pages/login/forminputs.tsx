import React from 'react'


type Props = {

  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;

}

interface inputsKey {
  id: number;
  name: string;
  type: string;
  placeholder: string;
  errorMessage: string;
  label: string;
  pattern: string;
  required: boolean;
}

const FormInputs = ({ onChange, ...inputs }: Props) => {



  var input = inputs as inputsKey

  return (
    <div>
      <label>{input.label}</label>
      <input 
      //placeholder={}
      {...inputs} 
      onChange={onChange}
      //onFocus={() => inputs.name ===}
      />

    </div>
  )
}

export default FormInputs