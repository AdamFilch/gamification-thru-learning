import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';


type Props = {}

const WordScramble = (props: Props) => {
    const navigate = useNavigate();

  return (
    <div>
        <button className='absolute p-7' onClick={() => navigate("/Home") }><CloseIcon sx={{fontSize: 50}}/></button>
        <div className='flex flex-col items-center'>
            <h2>Word Scramble</h2>
            <div>
                <p>EXNASLKLKLF</p>
                <div>
                    <p>Hint: <span>The Process of Increasing</span></p>
                    <p>Time left: <span><b>30</b>s</span></p>
                </div>
                <input placeholder='Enter a Valid word' />
                <div className='flex flex-row items-center'>
                <button>Refresh Word</button>
                <button>Check Word</button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default WordScramble