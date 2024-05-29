import { useSelector } from 'react-redux';
import { RootState } from '../../../main';
import CloseIcon from '@mui/icons-material/Close';

import { useNavigate } from 'react-router-dom';
import { userInt } from '../../shared/types';

export const HomePage = () => {
  const data = useSelector<RootState>((state) => state.user);
  const user = data as userInt;
  const navigate = useNavigate();

  return (
    <div>
      {/* <button className="absolute p-8" onClick={() => navigate('/')}>
        <CloseIcon sx={{ fontSize: 50 }} />
      </button> */}
      <div id="header" className="m-auto max-w-[600px] p-5">
        <div className=" text-center">
          <h1 className="font-accent p-3 text-[26px] font-bold lg:text-[36px]">
            Welcome to the Classroom, {user.firstname}
          </h1>
          <div>
            <blockquote>
              <span>
                <h2 className=" mt-2 text-center font-sans  text-[15px]  font-light leading-tight lg:text-[20px]">
                  An Educational Entertainment platform for learning with
                  minigames
                </h2>
              </span>
            </blockquote>
            {/* <blockquote>
              <span>
                <h2 className="mt-8 text-center text-[20px]">
                  Rotating Comments stuff and stuff
                </h2>
              </span>
            </blockquote> */}
          </div>
        </div>
      </div>
    </div>
  );
};
