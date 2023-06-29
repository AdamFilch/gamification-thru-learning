import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';

type Props = {}

type WordScrambleKey = {
    word: string,
    hint: string,
  }

const WSAddWord = (props: Props) => {
    const navigate = useNavigate();

    const [isValidWord, setIsvalidWord] = useState(false);

    const [values, setValues] = useState({
        word: "",
        hint: "",
    });

    const addNewWord = () => {
        const savedWordResponse = axios.post("http://localhost:3001/WS/word/post", values as unknown as keyof WordScrambleKey).then(res => {
      console.log(res.data);
    })
    setValues({
        word: "",
        hint: "",})
    }

    const wordValidator = () => {
        if(values.word.length == 0) {
            
            return false
        } else {
            
            return true
        }
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // console.log(values)
    
        // wordValidator();
        if(wordValidator()) {
          console.log(true);
          addNewWord()  
        } else {
          console.log("false")
        }
      }


    const onChangeI = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [event.target.name]: event.target.value})
    }

    const onChangeT = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValues({ ...values, [event.target.name]: event.target.value})
    }


  return (
    <div className='flex h-screen'>
        <button className='absolute p-7' onClick={() => navigate("/Home") }><CloseIcon sx={{fontSize: 50}}/></button>
        <div className='flex m-auto'> 
            <div className='flex flex-col border-2 p-9 w-[550px] h-[530px] m-auto'>
            <div className='text-[40px] p-5 font-bold text-center'>Add a Word to Word Scramble</div>
                <form className='flex flex-col p-4 space-y-7 items-center'  onSubmit={handleSubmit} noValidate>
                    <input  className='peer text-center border-2 text-[40px] w-[500px] p-5 center' data-te-input-showcounter="true" maxLength={15} name='word' onChange={onChangeI} value={values.word} placeholder='Enter your WORD here'/>
                    <textarea className=' text-center border-2 center text-[20px] w-[500px] h-[80px] max-h-[80px] ' maxLength={100} onChange={onChangeT} name='hint' value={values.hint} placeholder='Enter a hint for your word here'/>
                    <button className='w-[100px] h-[50px] p-[10px] border font-bold text-xl rounded-md bg-gray-200 group-invalid:pointer-events-none group-invalid:opacity-30' type="submit" >Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default WSAddWord