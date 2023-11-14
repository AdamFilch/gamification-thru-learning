import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';

type Props = {}

type questionKey = {
    question: string,
    options: [{
        option: string,
        answer: boolean,
}],

}

const QAddQuestion = (props: Props) => {
    const navigate = useNavigate();

    const [isValidQuestion, setIsvalidQuestion] = useState(false);
    const [values, setValues] = useState({
        question: "",
        options: [{
            option: "",
            answer: false,}]
    });
    const [toggle1, setToggle1] = useState(false);
    const [toggle2, setToggle2] = useState(false);
    const [toggle3, setToggle3] = useState(false);
    const [toggle4, setToggle4] = useState(false);

    const [option1, setOption1] = useState({
        option: "",
        answer: false,
    })
    const [option2, setOption2] = useState({
        option: "",
        answer: false,
    })
    const [option3, setOption3] = useState({
        option: "",
        answer: false,
    })
    const [option4, setOption4] = useState({
        option: "",
        answer: false,
    })


    const addNewCard = () => {
            const savedCardResponse = axios.post("http://localhost:3001/Q/card/post", values as unknown as keyof questionKey).then(res => {
            console.log(res.data);
        })
        setValues({
            question: "",
            options: [{
                option: "",
                answer: false,}]
        })
        setToggle1(false);
        setToggle2(false);
        setToggle3(false);
        setToggle4(false);
        setOption1({
            option: "",
            answer: false,
        })
        setOption2({
            option: "",
            answer: false,
        })
        setOption3({
            option: "",
            answer: false,
        })
        setOption4({
            option: "",
            answer: false,
        })
    }
    const handleToggles = (event: React.ChangeEvent<HTMLInputElement>) => {

        switch(event.target.name) {
            case "1":
                setToggle1(true);
                setToggle2(false);
                setToggle3(false);
                setToggle4(false);

                setOption1({...option1, answer: true });
        setOption2({...option2, answer: false });
        setOption3({...option3, answer: false });
        setOption4({...option4, answer: false });
                
                break;
            case "2":
                setToggle1(false);
                setToggle2(true);
                setToggle3(false);
                setToggle4(false);
                
                setOption2({...option2, answer: true });
                setOption1({...option1, answer: false });
        
        setOption3({...option3, answer: false });
        setOption4({...option4, answer: false });
                break;
            
            case "3":
                setToggle1(false);
                setToggle2(false);
                setToggle3(true);
                setToggle4(false);

                setOption3({...option3, answer: true });
                setOption1({...option1, answer: false });
                setOption2({...option2, answer: false });
                setOption4({...option4, answer: false });
                
                break;
            
            case "4":
                setToggle1(false);
                setToggle2(false);
                setToggle3(false);
                setToggle4(true);


                setOption4({...option4, answer: true });
                setOption1({...option1, answer: false });
                setOption2({...option2, answer: false });
                setOption3({...option3, answer: false });
                
                
                break;
        }

        createOptions();
    }

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        switch(event.target.name) {
            case "1":
                setOption1({...option1, option: event.target.value})

                break;
            case "2":
                setOption2({...option2, option: event.target.value})
                break;
            
            case "3":
                setOption3({...option3, option: event.target.value})
                break;
            
            case "4":
                setOption4({...option4, option: event.target.value})
                break;
        }

    }

    const onChangeT = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValues({ ...values, [event.target.name]: event.target.value})
    }



    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        
        event.preventDefault();
        
        createOptions();
        
        questionValidator();
        
        if(questionValidator()) {
          console.log(values);
          addNewCard();
          
        } else {
          console.log("false")
          
        }
    }

    const createOptions = () => {

        // setOption1({...option1, answer: toggle1 });
        // setOption2({...option2, answer: toggle2 });
        // setOption3({...option3, answer: toggle3 });
        // setOption4({...option4, answer: toggle4 });
        const optionsArr = [option1, option2, option3, option4];
        setValues({...values, options: optionsArr});
        // console.log(values);

    }

    const createValu = () => {
        
    }

    const questionValidator = () => {
        if (toggle1 || toggle2 || toggle3 || toggle4) {
            if(values.question.length > 0) {
                if(option1.option.length > 0 && option2.option.length > 0 && option3.option.length > 0 && option4.option.length > 0) {
                    return true;
                } else {
                    return false
                }
            } else {
                return false
            }
        } else {
            return false
        }
    }


  return (
    <div>
        <div className=''>
        
        <button className='absolute p-7' onClick={() => navigate("/Home") }><CloseIcon sx={{fontSize: 50}}/></button>
        <div className='text-[40px] p-5 font-bold text-center'>Add a Quiz Card</div>
            <div className='flex m-auto flex-col border-2 border-gray-900 p-9 w-[550px] h-[530px]'>
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col'><span className=' text-[23px] pb-3'>Write your question here</span>
                        <textarea className='border-[3px] text-[20px] w-[100%] h-[80px] max-h-[80px] min-h-[80px] p-3' value={values.question} name='question' onChange={onChangeT} placeholder=''/>
                    </div>
                    <div className='pt-4'>
                        <span className='text-[23px] pb-3'>Enter the options and select only 1 answer</span>
                        <div className='space-y-4'>
                        <div className='flex flex-row space-x-4 items-center'><input className='border-[3px] h-[45px] w-[300px] text-[18px]' name='1' onChange={onChange} value={option1.option} placeholder='Option 1'/><input onChange={handleToggles} checked={toggle1} className='w-[30px] h-[30px]' name='1' type='checkbox'/></div>
                        <div className='flex flex-row space-x-4 items-center'><input className='border-[3px] h-[45px] w-[300px] text-[18px]' name='2' onChange={onChange} value={option2.option} placeholder='Option 2'/><input onChange={handleToggles} checked={toggle2} className='w-[30px] h-[30px]' name='2' type='checkbox'/></div>
                        <div className='flex flex-row space-x-4 items-center'><input className='border-[3px] h-[45px] w-[300px] text-[18px]' name='3' onChange={onChange} value={option3.option} placeholder='Option 3'/><input onChange={handleToggles} checked={toggle3} className='w-[30px] h-[30px]' name='3' type='checkbox'/></div>
                        <div className='flex flex-row space-x-4 items-center'><input className='border-[3px] h-[45px] w-[300px] text-[18px]' name='4' onChange={onChange} value={option4.option} placeholder='Option 4'/><input onChange={handleToggles} checked={toggle4} className='w-[30px] h-[30px]' name='4' type='checkbox'/></div>   
                        </div> 
                    </div>
                    <div className='h-[20px]'></div>
                    <button className=' m-auto flex w-[100px] h-[50px] p-[10px] border font-bold text-xl rounded-md bg-gray-200 group-invalid:pointer-events-none group-invalid:opacity-30' type="submit" >Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default QAddQuestion