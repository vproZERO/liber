import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ProfileItem from "./profile-item";
import profileIcon from "../../assets/icons/profile-icon.svg";
import profileIcon2 from "../../assets/icons/profile-icon2.svg";
import profileIcon3 from "../../assets/icons/profile-icon3.svg";
import profileIcon4 from "../../assets/icons/profile-icon4.svg";
import profileIcon5 from "../../assets/icons/profile-icon5.svg";
import DarkMode from "./components/dark-mode";

const Profile = () => {

    const location = useLocation()

  return (
    <div className="px-[120px] dark:bg-[#1F2937] pb-14  bg-[#FBFBFB]">
      <ProfileItem />
      <div className="flex items-start gap-9">
        <div className="bg-white shadow dark:bg-[#111827] pr-6 pt-7 pb-11 rounded">
          <Link to="/profile/obuna-bolish" className={`flex items-center gap-4 font-medium mb-5 pl-6  text-lg text-[#242424] dark:text-[#9CA3AF] dark:hover:text-white ${location.pathname === '/profile/obuna-bolish' ? "text-[#3F51B5]  border-l-4 border-[#3F51B5]  pl-4" : ''}`}>
            <div>
              <img src={profileIcon} alt="profile icon" />
            </div>
            <span className={location.pathname === '/profile/obuna-bolish' ? "text-[#3F51B5] font-bold" : ''}>Обуна бўлиш</span>
          </Link>
          <Link to="/profile/xisob" className={`flex items-center gap-4 font-medium mb-5 pl-6 text-lg text-[#242424] dark:text-[#9CA3AF] dark:hover:text-white ${location.pathname === '/profile/xisob' || location.pathname === '/profile/xisob/toldirish' ? "text-[#3F51B5]  border-l-4 border-[#3F51B5] pl-4" : ''}`}>
            <div>
              <img src={profileIcon2} alt="profile icon" />
            </div>
            <span className={location.pathname === '/profile/xisob' ? "text-[#3F51B5] font-bold" : ''}>Э-Хисоб</span>
          </Link>
          <Link to="/profile/kitoblarim/audio-kitob" className={`flex items-center gap-4 font-medium mb-5 pl-6 text-lg text-[#242424] dark:text-[#9CA3AF] dark:hover:text-white ${location.pathname === '/profile/kitoblarim' || location.pathname === "/profile/kitoblarim/audio-kitob" || location.pathname === "/profile/kitoblarim/electron-kitob"  || location.pathname === "/profile/kitoblarim/bosma-kitob" ? "text-[#3F51B5]  border-l-4 border-[#3F51B5] pl-4" : ''}`}>
            <div>
              <img src={profileIcon3} alt="profile icon" />
            </div>
            <span className={location.pathname === '/profile/kitoblarim' ? "text-[#3F51B5] font-bold" : ''}>Китобларим</span>
          </Link>
          <Link to="/profile/saqlaganlarim" className={`flex items-center gap-4 font-medium mb-5 pl-6 text-lg text-[#242424] dark:text-[#9CA3AF] dark:hover:text-white ${location.pathname === '/profile/saqlaganlarim'  ? "text-[#3F51B5]  border-l-4 border-[#3F51B5] pl-4" : ''}`}>
            <div>
              <img src={profileIcon4} alt="profile icon" />
            </div>
            <span className={location.pathname === '/profile/saqlaganlarim' ? "text-[#3F51B5] font-bold" : ''}>Сақланганлар</span>
          </Link>
          <Link to="/profile/sozlamalar" className={`flex items-center gap-4 font-medium mb-5 pl-6 text-lg text-[#242424] dark:text-[#9CA3AF] dark:hover:text-white ${location.pathname === '/profile/sozlamalar'  ? "text-[#3F51B5]  border-l-4 border-[#3F51B5] pl-4" : ''}`}>
            <div>
              <img src={profileIcon5} alt="profile icon" />
            </div>
            <span className={location.pathname === '/profile/sozlamalar' ? "text-[#3F51B5] font-bold" : ''}>Созламалар</span>
          </Link>
          <DarkMode/>
        </div>
      <Outlet />
      </div>

    </div>
  );
};

export default Profile;
