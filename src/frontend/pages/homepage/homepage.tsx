import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../main';
import CloseIcon from '@mui/icons-material/Close';
import Learn from '../learn/learn';
import Master from '../master';
import Chatbot from './games';
import { useAppSelector } from '../../hooks/useDispatch';
import { useNavigate } from 'react-router-dom';
import Contact from './about';

type userInt = {
  username: string;
  password: string;
  firstname: string;
  gameProgress: Array<string>[];
  ongoingCourse: Array<string>[];
  role: string;
  _id: string;
};

const Content = (activeTab: number) => {
  switch (activeTab) {
    case 1:
      return <Chatbot />;
    case 2:
      return <Learn />;
    case 3:
      return <Master />;
    case 4:
      return <Contact />;
    default:
      return <Learn />;
  }
};

const HomePage = () => {
  const [activeTab, setActiveTab] = useState(2);
  const data = useSelector<RootState>((state) => state.user);
  const user = data as userInt;
  const navigate = useNavigate();

  return (
    <div>
      <button className="absolute p-8" onClick={() => navigate('/')}>
        <CloseIcon sx={{ fontSize: 50 }} />
      </button>
      <div id="header" className="">
        <div className="col-auto flex justify-center">
          <h1 className="p-10 text-[37px] font-bold">
            Welcome to the Classroom, {user.firstname}
          </h1>
        </div>
        <div>
          <blockquote>
            <span>
              <h2 className="m-auto flex w-[700px] justify-center text-center text-[30px]">
                An Educational Entertainment platform for learning with
                minigames
              </h2>
            </span>
          </blockquote>
        </div>
      </div>

      <div className=" pt-6">
        <div className="flex justify-center space-x-10 text-base">
          <button
            key="1"
            className={`rounded-t-lg border-b-2 p-4 text-center text-[20px] transition-colors duration-300 ${
              1 == activeTab
                ? 'border-yellow-700'
                : 'border-transparent hover:border-yellow-700'
            }`}
            onClick={() => setActiveTab(1)}
          >
            Games
          </button>
          <button
            key="2"
            className={`rounded-t-lg border-b-2 p-4 text-center text-[20px] transition-colors duration-300 ${
              2 == activeTab
                ? 'border-yellow-700'
                : 'border-transparent hover:border-gray-200'
            }`}
            onClick={() => setActiveTab(2)}
          >
            Learn
          </button>
          {user.role == 'Game Master' || user.role == 'Lecturer' ? (
            <button
              key="3"
              className={`rounded-t-lg border-b-2 p-4 text-center text-[20px] transition-colors duration-300 ${
                3 == activeTab
                  ? 'border-yellow-700'
                  : 'border-transparent hover:border-gray-200'
              }`}
              onClick={() => setActiveTab(3)}
            >
              Game Master
            </button>
          ) : (
            <></>
          )}
        </div>
        <div>
          <div className=" pt-6">
            <h2>{Content(activeTab)}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
