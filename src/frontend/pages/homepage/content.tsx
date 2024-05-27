import React, { useState } from 'react';
import Learn from '../learn/learn';
import Master from '../master';
import Chatbot from './games';
import Contact from './about';
import { userInt } from '../../shared/types';
import { useSelector } from 'react-redux';
import { RootState } from '../../../main';

export default function CurrentContent() {
  const [activeTab, setActiveTab] = useState(2);
  const data = useSelector<RootState>((state) => state.user);
  const user = data as userInt;

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
  return (
    <div>
      <div className=" pt-6">
        <div className=" flex justify-center space-x-10 text-base">
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
          <div className=" pt-6">{/* <h2>{Content(activeTab)}</h2> */}</div>
        </div>
      </div>
    </div>
  );
}
