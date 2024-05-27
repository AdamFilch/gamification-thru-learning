import { Routes, Route, Navigate } from 'react-router-dom';
import App from '../../App';
import LoginForm from '../pages/login/signup';
import SignInForm from '../pages/login/signinform';
import { useSelector } from 'react-redux';
import { RootState } from '../../main';
import ProfilePage from '../pages/profilepage/profilepage';
// import HomePage from '../pages/homepage/homepage';
import LearnVidPage from '../pages/learn/learnvideo';
import WordScramble from '../pages/games/wordscramble/wordscramble';
import Quiz from '../pages/games/quiz/quiz';
import { Addlearn } from '../pages/master/learnmaster/addlearn';
import Dellearn from '../pages/master/learnmaster/dellearn';
import WSDeleteWord from '../pages/master/wsmaster/deleteword';
import WSAddWord from '../pages/master/wsmaster/addword';
import QDeletecard from '../pages/master/quizmaster/deletequiz';
import QAddQuestion from '../pages/master/quizmaster/addquiz';
import Index from '../pages/games/wordle2';
import Permission from '../pages/master/permission/permission';
import Wsdata from '../pages/master/wsmaster/wsdata';
import Quizdata from '../pages/master/quizmaster/quizdata';

import { LandingPage } from '../pages/sections';

const Rendering = () => {
  const isAuth = Boolean(useSelector<RootState>((state) => state.token));

  return (
    <Routes>
      <Route path="/" element={<App />} /> {/* LANDING PAGE */}
      <Route path="/SignUp" element={<LoginForm />} /> {/* SIGN-IN PAGE */}
      <Route path="/SignIn" element={<SignInForm />} /> {/* LOG-IN PAGE */}
      <Route
        path="/Home/*"
        element={isAuth ? <LandingPage /> : <Navigate to="/" />}
      />
      {/* HOME PAGE IN LOGIN */}
      <Route
        path="/ProfilePage/:userId"
        element={isAuth ? <ProfilePage /> : <Navigate to="/" />}
      />
      {/* HOME PAGE IN LOGIN */}
      <Route path="/Video/:videoId" element={<LearnVidPage />} />
      <Route path="/About" /> {/* ABOUT PAGE */}
      <Route path="/Pot" /> {/* POT CHATBOT PAGE */}
      <Route path="/AddALearn" element={<Addlearn />} />
      <Route path="/DeleteALearn" element={<Dellearn />} />
      <Route path="/WS/AddAWord" element={<WSAddWord />} />
      <Route path="/WS/DeleteAWord" element={<WSDeleteWord />} />
      <Route path="/WS/DataAnalysis" element={<Wsdata />} />
      <Route path="/Q/AddACard" element={<QAddQuestion />} />
      <Route path="/Q/DeleteACard" element={<QDeletecard />} />
      <Route path="/Q/DataAnalysis" element={<Quizdata />} />
      <Route path="/User/Permissions" element={<Permission />} />
      <Route path="/Games/WordScramble" element={<WordScramble />} />
      <Route path="/Games/Quiz" element={<Quiz />} />
      <Route path="/Games/Wordle" element={<Index />} />
      <Route path="*" /> {/* NOT FOUND PAGE */}
    </Routes>
  );
};

export default Rendering;
