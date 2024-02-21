import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Kitoblarim = () => {
  const location = useLocation();
  return (
    <div>
      <div className="w-[966px] bg-white shadow rounded pt-[31px] pl-[33px] flex items-center gap-[80px] pb-[27px] pr-[30px] dark:bg-[#111827] mb-[30px]">
        <h2 className="font-bold text-[#11142D] text-3xl dark:text-white">
          Обуна
        </h2>

        <div className="gap-[27px] flex items-center">
          <Link to="/profile/kitoblarim/audio-kitob" className={`text-[#11142D] font-medium text-base  dark:text-[#9CA3AF]  ${location.pathname === "/profile/kitoblarim/audio-kitob" ? "text-[#3F51B5] dark:text-[#3F51B5] border-[#3F51B5] border-b-[2px] rounded-[4px]" : ""}`}>
            AudioKitob
          </Link>
          <Link to="/profile/kitoblarim/electron-kitob" className={`text-[#11142D] font-medium text-base  dark:text-[#9CA3AF]  ${location.pathname === "/profile/kitoblarim/electron-kitob" ? "text-[#3F51B5] dark:text-[#3F51B5] border-[#3F51B5] border-b-[2px] rounded-[4px]" : ""}`}>ElectronKiton</Link>
          <Link to="/profile/kitoblarim/bosma-kitob" className={`text-[#11142D] font-medium text-base  dark:text-[#9CA3AF]  ${location.pathname === "/profile/kitoblarim/bosma-kitob" ? "text-[#3F51B5] dark:text-[#3F51B5] border-[#3F51B5] border-b-[2px] rounded-[4px]" : ""}`}>BosmaKitob</Link>
        </div>
      </div>
      
      <Outlet />
    </div>
  );
};

export default Kitoblarim;
