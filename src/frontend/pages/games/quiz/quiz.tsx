import axios from 'axios'
import React, { useEffect, useState } from 'react'

type Props = {}

type questionKey = {
    question: string,
    options: [{
        option: string,
        answer: boolean,
}],

}

const Quiz = (props: Props) => {
    
    let questionOrder: questionKey[] = []

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
          questionOrder = dataArray as questionKey[];
          setCurrentQuestionNo(0);
          setCurrentQuestion(questionOrder[currentQuestionNo])

        }).catch(() => {
          alert('Error Received')
        })
        return null;
      }


    const [currentQuestionNo, setCurrentQuestionNo] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState<questionKey>();
    // const [nextQuestion, setNextQuestion] = useState()
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    let i = 0;
    const answer = false;
    const AnswerOptionsClick = (answer: boolean) => {
        if(answer) {
            setScore(score + 1);
        }
        // const nextQuestion = questionOrder[currentQuestion + 1];
        if(i < questionOrder.length) {
            
        } else {
            setShowScore(true);
        }
    }

  return (
    <div>
        <div>
            {showScore ? (
                <div>You scored {score} out of {questionOrder.length} </div>
            ) : (
                <div>
                    <div>
                        <div>
                            <span>Question {currentQuestionNo + 1}/</span>10
                        </div>
                        <div>{currentQuestion?.question}</div>
                    </div>
                    <div>
                        <div>
                            {currentQuestion?.options.map((option) => (
                                <button>{option.option}</button>

                            ))};
                        </div>
                    </div>
                </div>

            )}
            
        </div>
    </div>
  )
}

export default Quiz