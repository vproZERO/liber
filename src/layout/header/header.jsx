import React from "react";
import { Link } from "react-router-dom";
import headerLogo from "/public/vite.svg";
import HeaderButtons from "./components/header-buttons";
import HeaderSearch from "./components/header-search";

const Header = () => {
  return (
    <div className="py-[21px] px-[120px] dark:bg-[#111827] flex items-center justify-between border-b dark:border-white border-[#F0F0F0]">
      <Link to="/" className=" transition hover:-translate-y-[2px] flex items-center gap-2 ">
        <div>
          <img src={headerLogo} alt="header logo" />
        </div>
        <div >
          <h2 className="font-bold text-xl text-[#11142D] dark:text-white">Liber</h2>
          <p className="max-w-[104px] text-[11142D] text-[9px] dark:text-white">Барча турдаги китоблар</p>
        </div>
      </Link>
      <HeaderSearch />
      <HeaderButtons />
    </div>
  );
};

export default Header;
