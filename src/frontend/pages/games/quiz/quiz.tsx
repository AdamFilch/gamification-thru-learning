import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close';

type Props = {}

type questionKey = {
    question: string,
    options: [{
        option: string,
        answer: boolean,
}],

}

const Quiz = (props: Props) => {
    const navigate = useNavigate();
    const[questionOrder, setQuestionOrder] = useState<questionKey[]>([])

    useEffect(() => {
        getQuestions();

    }, [])


    const getQuestions = () => {
        axios.get("http://localhost:3001/getQuestions").then((res) => {
          const data = res.data.data;
          let dataArray = data;
          for (let i = dataArray.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [dataArray[i], dataArray[j]] = [dataArray[j], dataArray[i]];
        }
          setQuestionOrder(dataArray);
          setTotalQuestions(dataArray.length)
          setCurrentQuestion(dataArray[0])
          console.log()

        }).catch(() => {
          alert('Error Received')
        })
        return null;
      }

    const [totalQuestions, setTotalQuestions] = useState(0)
    const [currentQuestionNo, setCurrentQuestionNo] = useState(1);
    const [currentQuestion, setCurrentQuestion] = useState<questionKey>();
    // const [nextQuestion, setNextQuestion] = useState()
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const answer = false;

    const AnswerOptionsClick = (answer: boolean) => {
        if(answer) {
            setScore(score + 1);
        }
        setCurrentQuestionNo(currentQuestionNo + 1)
        
        if(currentQuestionNo < totalQuestions) {
            setCurrentQuestion(questionOrder[currentQuestionNo])
        } else {
            setShowScore(true);
        }
    }

  return (
    <div className=' flex h-screen'>
        <button className='absolute p-7' onClick={() => navigate("/Home") }><CloseIcon sx={{fontSize: 50}}/></button>
        <div className=' m-auto flex w-[700px] h-[400px] border'>
            {showScore ? (
                <div className='m-auto text-[40px] font-bold'>You scored {score} out of {totalQuestions} </div>
            ) : (
                <div className='flex m-auto w-[700px] h-[400px] border'>
                    <div className='flex flex-col w-[300px] border '>
                        <div className='flex pt-[40px] pl-[37px] '>
                            <span className=' font-bold text-[33px]'>Question {currentQuestionNo}</span><span className='text-[22px]'>/{totalQuestions}</span>
                        </div>
                        <div className='p-4 pt-[20px] text-[22px]'>{currentQuestion?.question}</div>
                    </div>
                    <div className='flex m-auto'>
                        <div className='inline-flex flex-col space-y-5'>
                            {currentQuestion?.options.map((option) => (
                                <button className='border text-lg h-[70px] w-[300px]' onClick={() => AnswerOptionsClick(option.answer)}>{option.option}</button>

                            ))}
                        </div>
                    </div>
                </div>

            )}
            
        </div>
    </div>
  )
}

export default Quiz