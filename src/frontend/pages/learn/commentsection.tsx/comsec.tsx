import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux';
import { useAppSelector } from '../../../hooks/useDispatch';
import { RootState } from '../../../../main';
import axios from 'axios';
import { object } from 'webidl-conversions';
import Commentbox from './comment';

type Props = {
  _id?: string,
  num?: string,
  title?: string,
  author?: string,
  channel?: string,
  videolink?: string,
  description?: string;
  idv: string,
}

type commentsKey = {
  author: string,
  comment: string,
  date: string,
}


type videoKey = {
  _id: string,
  num: string,
  title: string,
  author: string,
  channel: string,
  videolink: string,
  description: string;
  comments: Array<Object>[]
}

type userKey = {
  username: string,
  password: string,
  firstname: string,
  gameProgress: Array<String>[],
  ongoingCourse: Array<String>[],
  role: string,
  _id: string,
 
 }

function CommentSection({idv, ...video}: Props) {

  const data = useSelector<RootState>((state => state.user))
  const user = data as userKey;
  const vid = video as videoKey;
  

  useEffect(() => {
    getComments();
    const ator = user.username || user.firstname;
    const now = new Date();
    setValues({...values,
      author: ator, 
      date: now.toLocaleDateString()});
      
    // setVideoVal({
    //   _id: vid._id,
    //   num: vid.num,
    //   title: vid.title,
    //   author: vid.author,
    //   channel: vid.channel,
    //   videolink: vid.videolink,
    //   description: vid.description,
    //   comments: vid.comments
    //   })
    
    // createArray();
  },[])

  function timeout(delay: number) {
    return new Promise( res => setTimeout(res, delay) );
  }

  const [toggle, setToggle] = useState(false);
  const [values, setValues] = useState({
    author: "",
    comment: "",
    date: "",
    replies: [],
  });

  const [videoVal, setVideoVal] = useState<videoKey>({
    _id: vid._id,
      num: vid.num,
      title: vid.title,
      author: vid.author,
      channel: vid.channel,
      videolink: vid.videolink,
      description: vid.description,
    comments: [],
  });

  const addNewComment = () => {
    
    const savedVideoResponse = axios.post(`http://localhost:3001/video/comment/post` , videoVal).then(res => {
      console.log(res.data);
    })
    const ator = user.username || user.firstname;
    const now = new Date();
    setValues({...values,
      comment: "",
      author: ator, 
      date: now.toLocaleDateString()});
    

  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
     createReply();

    // const v_id = vid._id as string;

    if(values.comment.length > 0) {
      
      console.log(videoVal)

      



      addNewComment();

      
      // console.log(videoVal)
      
    } else {
      // return false;/
    }

  };

  const onChangeT = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value})
  }

  const createReply = async() => {

    
    
        

    vid.comments.push(values as any);
    await setVideoVal({
      _id: vid._id,
      num: vid.num,
      title: vid.title,
      author: vid.author,
      channel: vid.channel,
      videolink: vid.videolink,
      description: vid.description,
      comments: vid.comments
      })
  }

  const getComments = () => {
    // console.log(videoId.videoId);
    axios.get(`http://localhost:3001/getVideos/comments/${vid._id}`).then((res) => {
      let data:videoKey = res.data.data;
      setVideoVal(data);
      
      
    }).catch(() => {
      alert("Error Received")
    })
    return null;
  }

  const createArray = () => {
    
    
  }

  const handleToggle = () => {
    getComments();
    setToggle(true);
  }

  


    
  return (
    <div>
      <div className='flex justify-center flex-col'>
        <span className='flex justify-center text-[30px]'>Comments Section</span>
        {toggle ? (
          <div className='border-2 w-[1000px] h-full'>
          <div className=' w-[85%] h-auto min-h-[200px] m-auto'> {/* BOX OF COMMENTS */}
            <div>
              {...videoVal.comments.map((comm) => (
                <Commentbox comment={comm as unknown as commentsKey} />
              ))}
            </div>
          </div>
          <div className=' w-full h-[200px] '> {/* WHERE PEOPLE COMMENT */}
          <form className='flex flex-col p-[20px] space-y-4' onSubmit={handleSubmit}>
            <textarea className='border-2 text-[25px] w-[100%] h-[100px] max-h-[100px] min-h-[100px]' value={values.comment} name="comment" onChange={onChangeT} placeholder='Enter your comment here' />
            <button className=' w-[200px] h-[50px] border font-bold text-[25px] rounded-md bg-gray-200 group-invalid:pointer-events-none group-invalid:opacity-30' type="submit" >Submit</button>
          </form>
          </div>
        </div>
        ) : (
          <div className='border-2 w-[1000px] h-[400px]'>
            <div className=' w-full h-full'>
              <button className='m-auto flex w-[200px] h-[80px] border font-bold text-[20px] rounded-md bg-gray-200 group-invalid:pointer-events-none group-invalid:opacity-30' onClick={handleToggle}>Refresh Comment Section</button>
            </div>
          </div>
        )}

        
      </div>
    </div>
  )
}

export default CommentSection