import axios from 'axios'
import React, { useEffect, useState } from 'react'

type Props = {}

type questionKey = {
    
}

const Quiz = (props: Props) => {
    
    let questionOrder: object[] = []

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
          questionOrder = dataArray;

        }).catch(() => {
          alert('Error Received')
        })
        return null;
      }


    
    const [currentQuestion, setCurrentQuestion] = useState(0);
    // const [nextQuestion, setNextQuestion] = useState()
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    let i = 0;
    const answer = false;
    const AnswerOptionsClick = (answer: boolean) => {
        if(answer) {
            setScore(score + 1);
        }
        const nextQuestion = questionOrder[currentQuestion + 1];
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
                            <span>Question 3/</span>10
                        </div>
                        <p>{}</p>
                    </div>
                    <div>
                        <div>
                            <button>Me</button>
                            <button>Elon Musk</button>
                            <button>Ryan Renolds</button>
                            <button>yo act dad</button>
                        </div>
                    </div>
                </div>

            )}
            
        </div>
    </div>
  )
}

export default Quiz