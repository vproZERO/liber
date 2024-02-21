import React from "react";
import { Link } from "react-router-dom";
import audioBooks from "../../../assets/icons/audio-books-arrow.svg";

import { newAddeesData } from "../../../data";

const NewAddes = () => {
  return (
    <div className="px-[120px] dark:bg-[#1F2937] pb-[93px] pt-[64px] ">
      <div className="flex items-center justify-between mb-[32px]">
        <h2 className="font-semibold text-[32px] leading-[40px] dark:text-white text-[#242424]">
          Янги қўшилганлар
        </h2>

        <div className="w-[196px] flex items-center justify-between">
          <div className="p-[8px] rounded-full bg-[#EEF4FF]">
            <img className="w-[16px]" src={audioBooks} alt="img" />
          </div>

          <div className="flex items-center gap-[16px]">
            <div className="w-[9px] h-[9px] rounded-full bg-[#3F51B5]"></div>
            <div className="w-[9px] h-[9px] rounded-full bg-[#EEF4FF]"></div>
            <div className="w-[9px] h-[9px] rounded-full bg-[#EEF4FF]"></div>
            <div className="w-[9px] h-[9px] rounded-full bg-[#EEF4FF]"></div>
          </div>

          <div className="p-[8px] rounded-full bg-[#EEF4FF]">
            <img
              className="w-[16px] rotate-[180deg]"
              src={audioBooks}
              alt="img"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-6 gap-y-16">
        {newAddeesData.map((addes) => (
          <Link
            to={`/home/${addes.id}`}
            key={addes.id}
            className="aos-init aos-animate"
            data-aos={
              addes.id % 2 === 0
                ? "fade-up-right"
                : "fade-up-left"
            }
            data-aos-duration="1500"
          >
            <div className="w-[239px] mb-[18px]">
              <img src={addes.img} alt={addes.title} />
            </div>
            <h2 className="font-bold dark:text-white text-[20px] leading-[37px] text-[#11142D]">
              {addes.title}
            </h2>
            <h3 className="font-normal text-[14px] leading-[19px] text-[#3F51B5] mb-[16px]">
              {addes.category}
            </h3>
            <div className="w-full flex items-center justify-between">
              <div className="flex items-center gap-[10px]">
                <div className="w-[24px]">
                  <img src={addes.rateimg} alt={addes.rate} />
                </div>
                <h3 className="text-[18px] font-bold leading-[24px] text-[#FF7F4D]">
                  {addes.rate}
                </h3>
              </div>

              <div className="flex items-center gap-[16px]">
                <div className="w-[24px]">
                  <img src={addes.headphonimg} alt={addes.rate} />
                </div>
                <div className="w-[24px]">
                  <img src={addes.booksimg} alt={addes.rate} />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NewAddes;
