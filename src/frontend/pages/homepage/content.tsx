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
    <div className="mx-5 mt-6">
      <div className=" sticky top-9 m-auto flex max-w-[550px] flex-auto rounded-xl border-2 border-black bg-white px-2  text-center font-mono text-[14px] leading-none sm:text-[16px]">
        <button
          key="1"
          className={` duration-600 flex-1 border-b-2 px-4 py-3 uppercase  transition-all sm:p-4 ${
            1 == activeTab
              ? 'border-tertiary'
              : 'border-transparent hover:border-gray-200'
          }`}
          onClick={() => setActiveTab(1)}
        >
          Games
        </button>
        <button
          key="2"
          className={` duration-600 flex-1 border-b-2 px-4 uppercase transition-all sm:p-4 ${
            2 == activeTab
              ? 'border-tertiary'
              : 'border-transparent hover:border-gray-200'
          }`}
          onClick={() => setActiveTab(2)}
        >
          Learn
        </button>
        {user.role == 'Game Master' || user.role == 'Lecturer' ? (
          <button
            key="3"
            className={` duration-600 flex-1 border-b-2 px-4 uppercase transition-all sm:p-4 ${
              3 == activeTab
                ? 'border-tertiary'
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
  );
}
