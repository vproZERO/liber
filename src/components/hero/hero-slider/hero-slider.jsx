import React from "react";
import { heroSliderData } from "../../../data";
import heroLeftArrow from "../../../assets/icons/hero-left-arrow.svg";

const HeroSlider = () => {
  return (
    <div className="flex items-center gap-[16px]">
      <button className="p-[8px] rounded-full bg-[#3F51B5] cursor-pointer ">
        <div className="w-[16px]">
          <img src={heroLeftArrow} alt="hero left arrow" />
        </div>
      </button>

      {heroSliderData.map((slider) => (
        <div key={slider.id} className="">
          <div className="w-[190px] h-[267px] mb-[16px]">
            <img src={slider.img} alt={slider.title} />
          </div>
          <h2 className="text-[#242424] dark:text-white font-normal text-[20px] leading-[20px] text-center">
            {slider.title}
          </h2>
        </div>
      ))}

      <button className="p-[8px] -rotate-[180deg] rounded-full bg-[#3F51B5] cursor-pointer ">
        <div className="w-[16px]">
          <img src={heroLeftArrow} alt="hero left arrow" />
        </div>
      </button>
    </div>
  );
};

export default HeroSlider;
