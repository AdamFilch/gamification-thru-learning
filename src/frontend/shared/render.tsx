
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

const Rendering = () => {

  const mode = useSelector<RootState, string>((state) => state.mode);
  const isAuth = Boolean(useSelector<RootState>((state) => state.token))

  return (
    <Routes>
        <Route path='/' element={<App />}/> {/* LANDING PAGE */}
        <Route path='/SignUp' element={<LoginForm />} /> {/* SIGN-IN PAGE */}
        <Route path='/BecomeAPlayer' /> {/* BECOME A PLAYER PAGE */}
        <Route path='/SignIn' element={<SignInForm />}/> {/* LOG-IN PAGE */}
        <Route path="/Home" element={isAuth ? <HomePage /> : <Navigate to="/" />} />{/* HOME PAGE IN LOGIN */} 
        <Route path="/ProfilePage/:userId" element={isAuth ? <ProfilePage /> : <Navigate to="/" />} />{/* HOME PAGE IN LOGIN */} 
        <Route path='/Video' element={<LearnVidPage />}/> {/* LOG-IN PAGE */}
        <Route path='/About'/> {/* ABOUT PAGE */}
        <Route path='/Pot'/> {/* POT CHATBOT PAGE */}
        <Route path='*'/> {/* NOT FOUND PAGE */}
    </Routes>
  )
}

export default Rendering