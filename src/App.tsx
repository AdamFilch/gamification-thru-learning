import Navbar from './frontend/pages/navbar';
import LoginForm from './frontend/pages/login/signup';
import { useEffect, useState } from 'react';
import { SelectedPage } from './frontend/shared/types';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home,
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* <Navbar
                isTopOfPage={isTopOfPage} 
                selectedPage={selectedPage} 
                setSelectedPage={setSelectedPage}
            /> */}
      <div className=" flex h-screen ">
        <div className="m-auto flex h-[500px] w-[600px] flex-col border-2 border-gray-900">
          <div>
            <span className=" flex p-10 pt-9 text-center text-[35px]">
              E-Classroom: Educational Entertainment platform focusing on
              Micro-Learning
            </span>
          </div>
          <div className=" flex flex-row">
            <button
              className="m-auto flex h-[70px] w-[200px] rounded-md  border bg-gray-200"
              onClick={() => navigate('/SignIn')}
            >
              <span className="m-auto text-[25px] font-bold ">Log In</span>
            </button>
            <button
              className="m-auto flex h-[70px] w-[200px] rounded-md  border bg-gray-200 "
              onClick={() => navigate('/SignUp')}
            >
              <span className="m-auto flex text-[25px] font-bold">Sign Up</span>
            </button>
          </div>
          <div>
            <span className=" flex p-10 pt-9 text-center text-[24px]">
              A program developed by Adam Filchoir TP061627
            </span>
          </div>
        </div>
      </div>
      {/* <LoginForm /> */}
    </div>
  );
}

export default App;
