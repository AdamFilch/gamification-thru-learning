import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close';

type Props = {}



export const Addlearn = (props: Props) => {
  const navigate = useNavigate();

  const [videoLink, setVideoLink] = useState("")
  const [isValidVideo, setIsValidVideo] = useState(false);


  const remakeVideo = (event: React.ChangeEvent<HTMLInputElement>) => {


  }

  return (
    <div className='h-screen w-screen'>
      <button className='absolute p-7' onClick={() => navigate("/Home") }><CloseIcon sx={{fontSize: 50}}/></button>
      <div className='text-[25px] font-bold p-9 text-center'>Add a Video</div>
      <div className='flex flex-row space-x-10 justify-center'>
        <div>
      { isValidVideo ? (
        <iframe width="560" height="315" src={videoLink} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      ) :
      ( <div className=' border border-gray-950 w-[560px] h-[315px] text-[40px] align-middle text-center'>Your valid youtube video will appear here</div>)

      }
      </div>
      
        <div className=' flex h-[500px] w-[600px]'>
           
          <div className='flex flex-col '>
            <form>
              <div className='flex flex-col space-y-7'>
                <input className='bg-zinc-100 border rounded-md h-[50px] peer w-[500px] invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500'  onInput={remakeVideo} placeholder='Enter a valid Video Link Here'/>
                <input className='bg-zinc-100 border rounded-md h-[50px] peer w-[500px] invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500'  placeholder="Enter the video author's channel"/>
              </div>
              <div className='flex flex-col space-y-7 pt-7'>
                <input  className='bg-zinc-100 border rounded-md h-[50px] peer w-[500px] invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500' placeholder='Enter Video title'/>
                <input className='bg-zinc-100 border rounded-md h-[50px] peer w-[500px] invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500'  placeholder="Enter Author's Name" />
                <input className='bg-zinc-100 border rounded-md h-[200px] peer w-[500px] invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500'  placeholder='Enter a Description' />
              </div>
            </form>
          </div>
          
        </div>
        </div>
        
    </div>
  )
}


export const Dellearn = (props: Props) => {
    return (
        <div>
            <div>
                
            </div>
        </div>
    )
}

