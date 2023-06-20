import React, { useEffect } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';


type Props = {}

const WordScramble = (props: Props) => {
    const navigate = useNavigate();

    // const [counter, setCounter] = React.useState(60);

    // React.useEffect(() => { counter > 0 && setInterval(() => setCounter((time) => time - 1), 1000);
    //   }, []);

    const [seconds, setSeconds] = React.useState<number>(60);
  const [toggle, setToggle] = React.useState<boolean>(true);

    const ref =React.useRef<NodeJS.Timeout | null>(null);
    // const clear=()=>{
    //     window.clearInterval(id.current)
    // }
    useEffect(() => {
        if(seconds > 0) {
            ref.current = setInterval(() => {
                if (toggle) setSeconds((state) => state - 1);
            }, 1000);

            return () => {
                if (ref.current) clearInterval(ref.current);
            };

        }
        
      }, [toggle]);

      useEffect(() => {
        if(seconds == 0) {
            setToggle(false)
        }
      })

  return (
    <div className='flex h-screen'>
        <button className='absolute p-7' onClick={() => navigate("/Home") }><CloseIcon sx={{fontSize: 50}}/></button>
        <div className='flex m-auto w-[550px] h-[500px] border'>
        <div className='flex flex-col w-full'>
            <h2 className=' text-[28px] font-bold p-[20px] pb-[10px] border-b'>Word Scramble</h2>
            <div className=''>
                <p className=' align-middle text-center p-9 tracking-[16px] text-[33px] font-semibold uppercase'>classification</p>
                <div className='pb-4'>
                    <p className=' text-[20px] pl-7'>Hint: <span>algorithm that has processed data to be able to use in production</span></p>
                    <p className='text-[20px] pl-7 pt-2'>Time left: <span><b>{seconds}</b>s</span></p>
                </div>
                    <input className='flex m-auto w-[90%] border p-5 center' placeholder='Enter a Valid word' />
                <div className='flex flex-row justify-center align-middle p-6 space-x-[80px]'>
                    <button className='p-[15px] border'>Refresh Word</button>
                    <button className='p-[17px] border' onClick={() => setToggle(false)}>Check Word</button>
                </div>
            </div>
        </div>
        </div>

    </div>
  )
}

export default WordScramble