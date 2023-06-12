import Navbar from "./frontend/pages/navbar";
import LoginForm from "./frontend/pages/login/signup";
import { useEffect, useState } from "react"
import { SelectedPage } from "./frontend/shared/types";


function App() {

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
            <Navbar
                isTopOfPage={isTopOfPage} 
                selectedPage={selectedPage} 
                setSelectedPage={setSelectedPage}
            />
            {/* <LoginForm /> */}

        </div>
    )
}

export default App