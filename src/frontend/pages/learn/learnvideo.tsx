import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Learnbox from './learnbox';


type Props = {
  
}

interface idKey {
  videoId: string,
}


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

const LearnVidPage = ({}: Props) => {
  const navigate = useNavigate();
  const videoId = useParams() as unknown as idKey;

  useEffect(() => {
    getVideo();
  })

  const [video, setVideo] = useState<videoKey>();
  const getVideo = () => {
    // console.log(videoId.videoId);
    axios.get(`http://localhost:3001/getVideos/${videoId.videoId}`).then((res) => {
      let data:videoKey = res.data.data;
      setVideo(data)
      // console.log(data);
      
      
    }).catch(() => {
      alert("Error Received")
    })
    return null;
  }



  return (
    <div>
    <button className='absolute p-7' onClick={() => navigate("/Home") }><CloseIcon sx={{fontSize: 50}}/></button>
    <div className='flex flex-col items-center p-4 '>
        <h1 className=' text-[25px] font-bold p-9 text-center'>
        {video?.title}
        </h1>
        <div>
          <iframe width="1120" height="630" src={video?.videolink} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        
        <h3 className='pt-4'>
            Author of the Video: <button className=' text-lg text-black font-bold' onClick={() => null}>{video?.author}</button>
        </h3>

        <h2 className='p-8 text-[24px]'>
          {video?.description}
        </h2>

        <div className='flex flex-col items-center pb-10'>

        </div>
        
    </div>
    
    </div>
    
  )
}

export default LearnVidPage