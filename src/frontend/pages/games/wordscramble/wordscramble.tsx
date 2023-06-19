import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';


type Props = {}

const WordScramble = (props: Props) => {
    const navigate = useNavigate();

  return (
    <div>
        <button className='absolute p-7' onClick={() => navigate("/Home") }><CloseIcon sx={{fontSize: 50}}/></button>

    </div>
  )
}

export default WordScramble