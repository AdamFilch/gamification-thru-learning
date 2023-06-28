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
            answer: "",}]
    });



  return (
    <div>
        <div>
            <div>
                <form>
                    <div><span>Write your question here</span>
                        <textarea placeholder=''/>
                    </div>
                    <div>
                        <span>Enter the options and select only 1 answer</span>
                        <div><input placeholder='Option 1'/><button>X</button></div>
                        <div><input placeholder='Option 2'/><button>X</button></div>
                        <div><input placeholder='Option 3'/><button>X</button></div>
                        <div><input placeholder='Option 4'/><button>X</button></div>    
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default QAddQuestion