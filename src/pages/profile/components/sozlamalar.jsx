import React from "react";
import sozlamalarIcon from "../../../assets/icons/sozlamalar-icon.svg";

const Sozlamalar = () => {
  return (
    <div>
      <div className="w-[966px] bg-white shadow rounded pt-[32px] pl-[32px] pb-[78px] pr-[30px] dark:bg-[#111827]">
        <h2 className="text-[#11142D] font-bold text-3xl dark:text-white mb-[47px]">
          Созламалар
        </h2>
        <div className="flex items-center gap-[19px] mb-[42px]">
          <div className="p-[7px] rounded-full border-[5px] border-[#3F51B5]">
            <img src={sozlamalarIcon} alt="" />
          </div>
          <h2 className="text-[#3F51B5] font-medium text-base">Сурат юклаш</h2>
        </div>
        <div className="max-w-[343px] mb-[65px]">
          <h2 className="text-[#11142D] font-semibold text-sm dark:text-white mb-[6px]">
            Исмингиз
          </h2>
          <div className="p-[13px] border rounded-[16px] border-[#EDEDED] mb-[35px]">
            <span className="text-[14px] text-[#9A9A9A]">Исмингиз</span>
          </div>
        </div>
        <button className="bg-[#3F51B5] w-[343px] text-white py-[10px] text-base rounded-[14px]">
          Сақлаш
        </button>
      </div>
    </div>
  );
};

export default Sozlamalar;
