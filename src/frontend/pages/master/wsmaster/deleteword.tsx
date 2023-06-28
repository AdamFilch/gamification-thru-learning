import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import { TrashIcon } from '@heroicons/react/24/outline';
import DeleteWSWordBox from './deletewordbox';

type Props = {}

type wordKey = {
    _id: string,
    word: String,
    hint: String,
}

const WSDeleteWord = (props: Props) => {

    const navigate = useNavigate();

    const [values, setValues] = useState<wordKey[]>([]);
    const [toDelete, setToDelete] = useState<wordKey[]>([]);

    useEffect(() => {
        getWords();
    }, [])

    const getWords = () => {
        axios.get("http://localhost:3001/getWSW").then((res) => {
          let data = res.data.data;
          setValues(data);
          console.log(data);
          // console.log("Data Received");
        }).catch(() => {
          alert('Error Received')
        })
        return null;
    }

    const deleteSelectedWord = async (word: wordKey) => {
        
        // console.log(video);
        await axios.post("http://localhost:3001/WS/word/delete", word).then(res => {
            console.log(res);
        }).then((data) => {
            setToDelete([]);
            getWords();
        })
        
    }

    const handleConfirm = () => {
        
        toDelete.forEach(deleteSelectedWord);
        console.log(toDelete);
    }

    const handleToggle = (data: wordKey) => {


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
        // console.log(toDelete);

        
    }





  return (
    <div className='h-screen'>
            <button className='absolute p-7' onClick={() => navigate("/Home") }><CloseIcon sx={{fontSize: 50}}/></button>
            <div className='text-[25px] font-bold p-9 text-center'>Delete a Word</div>
                <div className=' flex-col space-y-10 flex items-center'>
                {values.map((words) => (
                    <DeleteWSWordBox key={words._id} {...words} onToggle={handleToggle}/>
                ))}
            <button className='w-[200px] h-[50px] border font-bold text-xl rounded-md bg-gray-200 group-invalid:pointer-events-none group-invalid:opacity-30' onClick={handleConfirm} type="submit" >Confirm Delete<span> {`(`}{toDelete.length}{`)`}</span></button>
            </div>
        <div className='pt-10'></div>
    </div>
  )
}

export default WSDeleteWord