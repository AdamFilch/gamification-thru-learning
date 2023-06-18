import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import Learnbox from '../homepage/learnbox';

type Props = {
  // videoDetails: object,

}

const LearnVidPage = (props: Props) => {
  const navigate = useNavigate();
  return (
    <div>
    <button className='absolute p-7' onClick={() => navigate("/Home") }><CloseIcon sx={{fontSize: 50}}/></button>
    <div className='flex flex-col items-center p-4 '>
        <h1 className=' text-[25px] font-bold p-9 text-center'>
        What is AI? | Artificial Intelligence | What is Artificial Intelligence? 
        </h1>
        <div>
          <iframe width="1120" height="630" src="https://www.youtube.com/embed/c_-b_isI4vg" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        
        <h3 className='pt-4'>
            Author of the Video: <button className=' text-blue-800 underline'>ADAM FILCHOIR</button>
        </h3>

        <h2 className='p-8 text-[18px]'>
          DESCRIPTIONS
        </h2>

        <div className='flex flex-col items-center pb-10'>
            <Learnbox />
            <Learnbox />
            <Learnbox />
            <Learnbox />
            <Learnbox />
            <Learnbox />
        </div>
        
    </div>
    
    </div>
    
  )
}

export default LearnVidPage