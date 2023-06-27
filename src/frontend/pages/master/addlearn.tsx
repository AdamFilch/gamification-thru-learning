import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close';
import { string } from 'yup';
import axios from 'axios';

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

type vidKeyUpl = {
  num: string,
  title: string,
  author: string,
  channel: string,
  videolink: string,
  description: string,
}

export const Addlearn = (props: Props) => {
  const navigate = useNavigate();

  const [videoLink, setVideoLink] = useState("")
  const [isValidVideo, setIsValidVideo] = useState(false);
  const [authorChannel, setAuthorChannel] = useState("")
  const [isValidAC, setIsvalidAC] = useState(false);

  const [highNum, setHighNum] = useState("");




  const [values, setValues] = useState({
    num: "",
    title: "",
    author: "",
    channel: "",
    videolink: "",
    description: "",
  });

  useEffect(() => {
    getNum();
  }, [])

  const getNum = () => {
    axios.get("http://localhost:3001/getVideos").then((res) => {
      const data = res.data.data;
      const newNum = data.length+1
      setValues({...values, ["num"]: newNum})
      // console.log("Data Received");
      console.log(values)
    }).catch(() => {
      alert('Error Received')
    })
    return null;
  }



  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value})
  }

  const addNewLearn = () => {
    // const formData = new FormData();
    // for (let value in values) {
    //   formData.append(value, values[value as keyof vidKeyUpl])
    // }
    // console.log(values[value as keyof vidKeyUpl]);

    const savedVideoResponse = axios.post("http://localhost:3001/video/post", values as unknown as keyof vidKeyUpl).then(res => {
      console.log(res.data);
    })



  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // console.log(values)

    if(isValidVideo) {
      addNewLearn();
      
    } else {
      console.log("false")
    }

    


  }



  const remakeVideo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({...values, [event.target.name]: event.target.value});
    var urlToParse = event.target.value;
    
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = urlToParse.match(regExp);

    if (match && match[2].length === 11) {
    
      setIsValidVideo(true);
      var videoUrl = 'https://www.youtube.com/embed/' + match[2];
      setVideoLink(videoUrl);
      setValues({...values, [event.target.name]: videoUrl});
    } else {
      setIsValidVideo(false);

    }
    
}

  return (
    <div className='h-screen w-screen'>
      <button className='absolute p-7' onClick={() => navigate("/Home") }><CloseIcon sx={{fontSize: 50}}/></button>
      <div className='text-[25px] font-bold p-9 text-center'>Add a Video</div>
      <div className='flex flex-row space-x-10 justify-center'>
        <div>
      { isValidVideo ? (
        <div className='space-y-10 flex flex-col '>
          <iframe width="560" height="315" src={videoLink} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          <iframe className=' m-auto' width="280" height="158" src={videoLink} title="YouTube video player" ></iframe>

        </div>
      ) :
      ( <div className='space-y-10'> 
          <div className=' border border-gray-950 w-[560px] h-[315px] text-[40px] align-middle text-center'>Your valid youtube video will appear here</div>
          <div className=' m-auto h-[159px] w-[280px] border border-gray-950 text-[20px] align-middle text-center'>Thumbnail</div>
        </div>
      )}
      </div>
      
        <div className=' flex h-[500px] w-[600px]'>
           
          <div className='flex flex-col '>
            <form onSubmit={handleSubmit} noValidate>
              <div className='flex flex-col space-y-7'>
                <input className='bg-zinc-100 border rounded-md h-[50px] peer w-[500px] invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500' name='videolink' type='text' value={values.videolink} onInput={remakeVideo} placeholder='Enter a valid Video Link Here'/>
                <input className='bg-zinc-100 border rounded-md h-[50px] peer w-[500px] invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500'  name='channel' type='text' value={values.channel} onInput={onChange} placeholder="Enter the video author's channel/website"/>
              </div>
              <div className='flex flex-col space-y-7 pt-7'>
                <input  className='bg-zinc-100 border rounded-md h-[50px] peer w-[500px] invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500' name='title' type='text' value={values.title} onInput={onChange} placeholder='Enter Video title'/>
                <input className='bg-zinc-100 border rounded-md h-[50px] peer w-[500px] invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500'  name='author' type='text' value={values.author} onInput={onChange} placeholder="Enter Author's Name" />
                <input className='bg-zinc-100 border rounded-md h-[200px] peer w-[500px] invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500'  name='description' type='text' value={values.description} onInput={onChange} placeholder='Enter a Description' />
              </div>
              <div className='pt-8'>

              </div>
              <button className='w-[100%] h-[50px] p-[10px] border font-bold text-xl rounded-md bg-gray-200 group-invalid:pointer-events-none group-invalid:opacity-30' type="submit" >Submit</button>
            </form>
          </div>
          
        </div>
        </div>
        
    </div>
  )
}


