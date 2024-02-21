import React from "react";
import "../header.css";
import headerMenu from "../../../assets/icons/header-menu.svg";
import headerSearch from "../../../assets/icons/header-search.svg";
import headerBottomArrow from "../../../assets/icons/header-bottom-arrow.svg";



const HeaderSearch = () => {
  return (
    <div className="flex items-center gap-[4px]">
      <form className="relative select-container">
        {/* <div className="w-[24px] ">
                <img src={headerMenu} alt="header menu" />
            </div>
            <p className="font-bold text-[16px] leding-[29px] text-[#3F51B5]">Рукнлар</p>
            <div className="h-[16px] flex items-center justify-center">
                <img src={headerBottomArrow} alt="header bottom arrow" />
            </div> */}
        
            <div className='absolute z-30  top-[12px] left-[24px] w-[24px] h-[24px]'>
                <img src={headerMenu} alt="header menu" />
            </div>
        <select id="rucuns" defaultValue={"Рукнлар"} className='border-[2px] block border-[#E1E1E1] dark:bg-[#1F2937] pl-[60px] max-w-[180px] rounded-l-[14px] pr-[18px] py-[8.3px] focus:[#3F51B5] header_select hover:shadow-[0px_0px_0px_3px_#3F51B55F] focus:shadow-[0px_0px_0px_3px_#3F51B55F] focus:border-[#3F51B5] hover:border-[#3F51B5] text-[#3F51B5] text-[16px] font-semibold'>
            <option className='border-[#3F51B5]' value="Рукнлар">Рукнлар</option>
            <option value="Жахон адабиёти">Жахон адабиёти</option>
            <option value="Узбек адабиёти">Узбек адабиёти</option>
            <option value="Бизнес ва психология">Бизнес ва психология</option>
            <option value="Болалар адабиёти">Болалар адабиёти </option>
            <option value="Детективлар">Детективлар</option>
            <option value="Фантастика">Фантастика</option>
            <option value="Диний адабиёт">Диний адабиёт</option>
            <option value="Замонавий узбек адаб...">Замонавий узбек адаб...</option>
            <option value="Фан ва таьлим">Фан ва таьлим</option>


        </select>
      </form>

      <div className="header_group dark:bg-[#1F2937]">
        <div className="header_icon">
          <img src={headerSearch} alt="header search" />
        </div>
        <input type="search" placeholder="Қидириш" className="header_input dark:bg-[#1F2937]" />
      </div>
    </div>
  );
};

export default HeaderSearch;
