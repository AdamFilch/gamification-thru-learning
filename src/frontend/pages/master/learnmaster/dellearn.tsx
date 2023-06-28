import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import { TrashIcon } from '@heroicons/react/24/outline';
import Dellearnbox from './dellearnbox';

type Props = {}

type videoKey = {
    _id: string,
    id: number,
    num: number,
    title: string,
    author: string,
    channel: string,
    videolink: string,
    description: string,
}



const Dellearn = (props: Props) => {
    const navigate = useNavigate();


    const [values, setValues] = useState<videoKey[]>([]);

    const [toDelete, setToDelete] = useState<videoKey[]>([]);


    useEffect(() => {
        getVideos();
    }, [])
    
    
    const getVideos = () => {
        axios.get("http://localhost:3001/getVideos").then((res) => {
          const data = res.data.data;
          setValues(data);
          console.log(data);
          // console.log("Data Received");
        }).catch(() => {
          alert('Error Received')
        })
        return null;
    }

    const deleteSelectedLearn = async (video: videoKey) => {
        
        console.log(video);
        await axios.post("http://localhost:3001/video/delete", video).then(res => {
            console.log(res);
        }).then((data) => {
            setToDelete([]);
            getVideos();
        })
        
    }

    const handleConfirm = () => {
        
        toDelete.forEach(deleteSelectedLearn);
        console.log(toDelete);
    }

    const handleToggle = (data: videoKey) => {


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

        
    }



    return (
        <div className='h-screen'>
            <button className='absolute p-7' onClick={() => navigate("/Home") }><CloseIcon sx={{fontSize: 50}}/></button>
            <div className='text-[25px] font-bold p-9 text-center'>Delete a Video</div>
                <div className=' flex-col space-y-10 flex items-center'>
                
                {values.map((videos) => (
                    <Dellearnbox key={videos._id} {...videos} onToggle={handleToggle} />          
                ))}
            <button className='w-[200px] h-[50px] border font-bold text-xl rounded-md bg-gray-200 group-invalid:pointer-events-none group-invalid:opacity-30' onClick={handleConfirm} type="submit" >Confirm Delete<span> {`(`}{toDelete.length}{`)`}</span></button>
            </div>
            <div className='pt-10'></div>
        </div>
        
    )
}



export default Dellearn