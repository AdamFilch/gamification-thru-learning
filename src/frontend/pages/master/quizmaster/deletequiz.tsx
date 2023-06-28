import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import Deletecardbox from './deletecardbox';

type Props = {}


type questionKey = {
    _id: string,
    question: string,
    options: [{
        option: string,
        answer: boolean,
}],

}
;
const QDeletecard = (props: Props) => {
    const navigate = useNavigate();

    const [values, setValues] = useState<questionKey[]>([]);
    const [toDelete, setToDelete] = useState<questionKey[]>([]);

    useEffect(() => {
        getQuestions();

    }, [])

    const getQuestions = () => {
        axios.get("http://localhost:3001/getQuestions").then((res) => {
          const data = res.data.data;
          setValues(data);
          console.log(data)

        }).catch(() => {
          alert('Error Received')
        })
        return null;
      }

    const deleteSelectedCard = async (question: questionKey) => {
        
        // console.log(video);
        await axios.post("http://localhost:3001/Q/question/delete", question).then(res => {
            console.log(res);
        }).then((data) => {
            setToDelete([]);
            getQuestions();
        })
    }


    const handleConfirm = () => {
        
        toDelete.forEach(deleteSelectedCard);
        console.log(toDelete);
    }

    const handleToggle = (data: questionKey) => {


        if (toDelete.some(element => {
            if(element._id === data._id) {

                return true;
            } else {
                return false;
            }
        })) {
            var arr = toDelete.filter(el => el._id !== data._id);
            // console.log(arr);
            
            // console.log("true")
            setToDelete(arr);
            // console.log(toDelete);
        } else {
            setToDelete(toDelete => [...toDelete, data]);
            // console.log("false");
        }
        console.log(toDelete);

        
    }

  return (
    <div className='h-screen'>
            <button className='absolute p-7' onClick={() => navigate("/Home") }><CloseIcon sx={{fontSize: 50}}/></button>
            <div className='text-[25px] font-bold p-9 text-center'>Delete a Question Card</div>
                <div className=' flex-col space-y-10 flex items-center'>
                {values.map((questions) => (
                    <Deletecardbox key={questions._id} {...questions} onToggle={handleToggle}/>
                ))}

            <button className='w-[200px] h-[50px] border font-bold text-xl rounded-md bg-gray-200 group-invalid:pointer-events-none group-invalid:opacity-30' onClick={handleConfirm} type="submit" >Confirm Delete<span> {`(`}{toDelete.length}{`)`}</span></button>
            </div>
        <div className='pt-10'></div>
    </div>
  )
}

export default QDeletecard