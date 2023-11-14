import Navbar from "./frontend/pages/navbar";
import LoginForm from "./frontend/pages/login/signup";
import { useEffect, useState } from "react"
import { SelectedPage } from "./frontend/shared/types";
import { useNavigate } from "react-router-dom";


function App() {
    const navigate = useNavigate();

    const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
    const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

    
    
    
    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY === 0) {
                setIsTopOfPage(true);
                setSelectedPage(SelectedPage.Home);

            }
            if(window.scrollY !== 0) setIsTopOfPage(false);
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    return (
        <div>
            {/* <Navbar
                isTopOfPage={isTopOfPage} 
                selectedPage={selectedPage} 
                setSelectedPage={setSelectedPage}
            /> */}
            <div className=" flex h-screen ">
                <div className="flex m-auto flex-col border-2 border-gray-900 w-[600px] h-[500px]">
                    <div>
                        <span className=" text-[35px] text-center flex p-10 pt-9">E-Classroom: Educational Entertainment platform focusing on Micro-Learning</span>
                        
                    </div>
                    <div className=" flex flex-row">
                    <button className="m-auto flex w-[200px] h-[70px] border  rounded-md bg-gray-200" onClick={() => navigate("/SignIn")} ><span className="font-bold text-[25px] m-auto ">Log In</span></button>
                        <button className="m-auto flex w-[200px] h-[70px] border  rounded-md bg-gray-200 " onClick={() => navigate("/SignUp")} ><span className="font-bold text-[25px] m-auto flex">Sign Up</span></button>
                    </div>
                    <div>
                        <span className=" text-[24px] text-center flex p-10 pt-9">A program developed by Adam Filchoir TP061627</span>
                    </div>


                </div>
            </div>
            {/* <LoginForm /> */}

        </div>
    )
}

export default App