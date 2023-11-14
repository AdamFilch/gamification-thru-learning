import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


type wordKey = {
    word: string,
    hint: string,
    shuffle: string,
}

const WordScramble = () => {
    const navigate = useNavigate();


    const [seconds, setSeconds] = useState<number>(60);
  const [toggle, setToggle] = useState<boolean>(true);
  const [word, setWord] = useState<wordKey>();
  const [shuffled, setShuffled] = useState({
    word: []
  });
    const ref =React.useRef<NodeJS.Timeout | null>(null);
    const [answer, setAnswer] = useState("");
    const [endGame, setEndGame] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

    useEffect(() => {
        initGame();
        if(seconds > 0) {
            ref.current = setInterval(() => {
                if (toggle) setSeconds((state) => state - 1);
            }, 1000);

            return () => {
                if (ref.current) clearInterval(ref.current);
            };

        }
        
      }, [toggle]);

      useEffect(() => {
        // getWords()
        if(seconds == 0) {
            setToggle(false)
        }
      })

      const getWords = () => {
        axios.get("http://localhost:3001/getWSW").then((res) => {
          let data = res.data.data;
          data = data[Math.floor(Math.random()*data.length)]
          data = data as wordKey;
          const wordArray = data.word.split("")
          for (let i = wordArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
        }
        //   console.log(shed)
          setWord(data);
          setShuffled({word: wordArray});

          // console.log("Data Received");
        }).catch(() => {
          alert('Error Received')
        })
        return null;
      }

      

    const initGame = () => {
        setEndGame(false);
        setAnswer("");
        setToggle(true);
        setSeconds(60);
        getWords();
        console.log(shuffled.word)

        // let wordArray = word?.word.split("");
        // console.log(wordArray)

    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAnswer(event.target.value)
    } 

    const checkWord = () => {
        
        const userWord = answer?.toString().toLowerCase().replace(/\s/g, "");
        if(!userWord) return alert("Please enter the word to check!");
        if(userWord !== word?.word) {
          setIsCorrect(false);
        } else {
          setIsCorrect(true);
        }
        setEndGame(true)
        // alert(`Congrats! ${word.word.toUpperCase()} is the correct word`);
        
    }



  return (
    <div className='flex h-screen'>
        <button className='absolute p-7' onClick={() => navigate("/Home") }><CloseIcon sx={{fontSize: 50}}/></button>
        <div className='flex m-auto w-[550px] h-[500px] border'>
        <div className='flex flex-col w-full'>
            <h2 className=' text-[28px] font-bold p-[20px] pb-[10px] border-b'>Word Scramble</h2>
            { endGame ? (
              <div className=' w-[550px] h-[300px] flex flex-col justify-center m-auto'>
                {isCorrect ? ( 
                  
                  <div className='flex flex-col '>
                  <div className='m-auto text-[40px] font-bold'>CORRECT!</div>
                  <div className='flex flex-row m-auto'>
                  <span className=' text-[30px] font-bold pr-4'>{word?.word.toUpperCase()}</span><span className='text-[30px] font-bold'> IS THE WORD!</span>
                  </div>
                </div>

                ) : (
                  <div className='flex flex-col m-auto'>
                    <div className=' flex m-auto text-[40px] font-bold'>Incorrect</div>
                    <div className='flex flex-row m-auto'>
                    <span className=' text-[30px] font-bold pr-4'>The Word is </span><span className=' text-[30px] font-bold'> {word?.word.toUpperCase()}</span>
                    </div>
                  </div>
                )}
                <button className=' flex p-[15px]  w-[300px] h-[100px] text-[30px] justify-center border m-auto' onClick={() => initGame()}>Play Again</button>
              </div>
            ) : (
            <div className=''>
            <p className=' align-middle text-center p-9 tracking-[16px] text-[33px] font-semibold uppercase'>{shuffled?.word}</p>
            <div className='pb-4'>
                <p className=' text-[20px] pl-7'>Hint: <span>{word?.hint}</span></p>
                <p className='text-[20px] pl-7 pt-2'>Time left: <span><b>{seconds}</b>s</span></p>
            </div>
                <input className='flex m-auto w-[90%] border p-5 center' value={answer} type='text' onInput={handleChange} spellCheck='false' placeholder='Enter a Valid word' />
            <div className='flex flex-row justify-center align-middle p-6 space-x-[80px]'>
                <button className='p-[15px] border' onClick={() => initGame()}>Refresh Word</button>
                <button className='p-[17px] border' onClick={() => checkWord()}>Check Word</button>
            </div>
        </div>) }

            
        </div>
        </div>

    </div>
  )
}

export default WordScramble