
import { Routes, Route, Navigate } from "react-router-dom"
import App from '../../App'
import LoginForm from '../pages/login/signup'
import SignInForm from "../pages/login/signinform"
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../main";
import ProfilePage from "../pages/profilepage/profilepage";
import HomePage from "../pages/homepage/homepage";
import LearnVidPage from "../pages/learn/learnvideo";
import WordScramble from "../pages/games/wordscramble/wordscramble";
import Quiz from "../pages/games/quiz/quiz";
import {Addlearn} from "../pages/master/learnmaster/addlearn";
import Dellearn from "../pages/master/learnmaster/dellearn";
import WSDeleteWord from "../pages/master/wsmaster/deleteword";

const Rendering = () => {

  const mode = useSelector<RootState, string>((state) => state.mode);
  const isAuth = Boolean(useSelector<RootState>((state) => state.token))

  return (
    <Routes>
        <Route path='/' element={<App />}/> {/* LANDING PAGE */}
        <Route path='/SignUp' element={<LoginForm />} /> {/* SIGN-IN PAGE */}
        <Route path='/BecomeAPlayer' /> {/* BECOME A PLAYER PAGE */}
        <Route path='/SignIn' element={<SignInForm />}/> {/* LOG-IN PAGE */}
        <Route path="/Home/*" element={isAuth ? <HomePage /> : <Navigate to="/" />} />{/* HOME PAGE IN LOGIN */} 
        <Route path="/ProfilePage/:userId" element={isAuth ? <ProfilePage /> : <Navigate to="/" />} />{/* HOME PAGE IN LOGIN */} 
        <Route path='/Video/:videoId' element={<LearnVidPage />}/>
        <Route path='/About'/> {/* ABOUT PAGE */}
        <Route path='/Pot'/> {/* POT CHATBOT PAGE */}

        <Route path='/AddALearn' element={<Addlearn />}/>
        <Route path='/DeleteALearn' element={<Dellearn />}/>

        <Route path='/WS/DeleteAWord' element={<WSDeleteWord />}/>


        <Route path='/Games/WordScramble' element={<WordScramble />}/>
        <Route path='/Games/Quiz' element={<Quiz />}/>

        <Route path='*'/> {/* NOT FOUND PAGE */}
    </Routes>
  )
}

export default Rendering