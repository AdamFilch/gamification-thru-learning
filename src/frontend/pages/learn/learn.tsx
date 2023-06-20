import React, { useEffect, useState } from 'react'
import Learnbox from './learnbox'
import axios, { Axios } from 'axios'

type Props = {}



const Learn = (props: Props) => {

  type videosType = {
    videos: Object,
  }


  const [values, setValues] = useState({
    videos: [],
  });

  useEffect(() => {
    getVideos();
  }, [])


  const getVideos = () => {
    axios.get("http://localhost:3001/getVideos").then((res) => {
      const data = res.data.data;
      setValues({videos: data});
      // console.log(values.videos);
      // console.log("Data Received");
    }).catch(() => {
      alert('Error Received')
    })
    return null;
  }



  return (
    <div className='pb-6'>
        <div className='flex flex-col items-center gap-4'>
          
          {...values.videos.map((videos) => (
            <Learnbox {...videos as videosType}/>

          ))}

        </div>
    </div>
  )
}

export default Learn