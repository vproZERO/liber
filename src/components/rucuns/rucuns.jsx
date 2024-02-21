import React from "react";
import "./rucuns.css";
import { rucunsData } from "../../data";
import rucunsRightArrow from '../../assets/icons/rucuns-right-arrow.svg'

const Rucuns = () => {
  return (
    <div className="px-[120px] pt-[40px] pb-[32px] dark:bg-[#1F2937]">
      <h2 className="mb-[32px] font-semibold text-[32px] leading-[40px] dark:text-white text-[#242424]">
        Рукнлар
      </h2>
      <div className="flex items-center justify-between relative">
        {rucunsData.map((rucuns) => (
          <div key={rucuns.id} className="relative w-[200px] h-[164px] aos-init aos-animate" data-aos={rucuns.id === 1 || rucuns.id === 3 || rucuns.id === 5 ? 'fade-right' : 'fade-left'} data-aos-duration='1500'>
            <div className="absolute inset-0 z-10">
              <img src={rucuns.img} alt={rucuns.title} />
            </div>
            <h2 className="z-30 absolute font-semibold text-[18px] leading-[24px] bottom-[17px] left-[16px] text-white">
              {rucuns.title}
            </h2>
          </div>
        ))}
        <button className="p-[14px] absolute z-30 right-[-25px] rounded-full bg-[#FFFFFF] aos-init aos-animate" data-aos-duration='1500' data-aos='fade-left'>
            <img src={rucunsRightArrow} alt="rucuns right arrow" />
        </button>
      </div>
    </div>
  );
};

export default Rucuns;
