import React, { useEffect, useState } from 'react'
import Comment from './comment'
import { useSelector } from 'react-redux';
import { useAppSelector } from '../../../hooks/useDispatch';
import { RootState } from '../../../../main';
import axios from 'axios';
import { object } from 'webidl-conversions';

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

interface comments {
  author: string,
  comment: string,
  date: string,
  replies: [],
}


interface videoKey {
  _id: string,
  num: string,
  title: string,
  author: string,
  channel: string,
  videolink: string,
  description: string;
  comments: []
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
  const vid = video as videoKey

  useEffect(() => {

  },[])

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
    setValues({
      author: "",
      comment: "",
      date: "",
      replies: [],
    });
    

  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
     createReply();

    // const v_id = vid._id as string;


    setVideoVal({
      _id: vid._id,
      num: vid.num,
      title: vid.title,
      author: vid.author,
      channel: vid.channel,
      videolink: vid.videolink,
      description: vid.description,
      comments: values as any
      })

    if(values.comment.length > 0) {
      console.log(videoVal)

      



      // addNewComment();

      
      // console.log(videoVal)
      
    } else {
      // return false;/
    }

  };

  const onChangeT = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value})
  }

  const createReply = () => {

    const ator = user.username || user.firstname;
    const now = new Date();
    setValues({...values,
      author: ator, 
      date: now.toLocaleDateString()});
    
    
    
  }

  


    
  return (
    <div>
      <div className='flex justify-center flex-col'>
        <span className='flex justify-center text-[30px]'>Comments Section</span>
        <div className='border-2 w-[1000px] h-full'>
          <div className=' w-full h-auto min-h-[200px]'> {/* BOX OF COMMENTS */}
            <Comment />
            <div></div>

          </div>
          <div className=' w-full h-[200px] '> {/* WHERE PEOPLE COMMENT */}
          <form className='flex flex-col p-[20px] space-y-4' onSubmit={handleSubmit}>
            <textarea className='border-2 text-[25px] w-[100%] h-[100px] max-h-[100px] min-h-[100px]' value={values.comment} name="comment" onChange={onChangeT} placeholder='Enter your comment here' />
            <button className=' w-[200px] h-[50px] border font-bold text-[25px] rounded-md bg-gray-200 group-invalid:pointer-events-none group-invalid:opacity-30' type="submit" >Submit</button>
          </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommentSection