import { userInt } from '../../shared/types';
import { useSelector } from 'react-redux';
import { RootState } from '../../../main';
import { useState } from 'react';

export function SectionNav() {
  const [activeTab, setActiveTab] = useState(2);
  const data = useSelector<RootState>((state) => state.user);
  const user = data as userInt;

  //   const Content = (activeTab: number) => {
  //     switch (activeTab) {
  //       case 1:
  //         return <Chatbot />;
  //       case 2:
  //         return <Learn />;
  //       case 3:
  //         return <MasterContent />;
  //       case 4:
  //       // return <Contact />;
  //       default:
  //         return <MasterContent />;
  //     }
  //   };
  return (
    <div className=" sticky top-3 px-5 py-6">
      <div className="  m-auto flex max-w-[550px] flex-auto rounded-xl border-2 border-black bg-white px-2  text-center font-mono text-[14px] leading-none sm:text-[16px]">
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
    </div>
  );
}
