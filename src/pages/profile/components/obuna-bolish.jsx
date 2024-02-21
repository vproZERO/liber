import React from "react";
import obunaBolishImg from "../../../assets/imgs/obuna-bolish.svg";
import obunaBolishImg2 from "../../../assets/imgs/obuna-bolish2.svg";

const ObunaBolish = () => {
  return (
    <div>
      <div className="w-[966px] pt-[32px] mb-[23px] flex items-center overflow-auto dark:bg-[#111827] justify-between pl-[32px] bg-[#FF7F4D] rounded-[11px] pb-[79px] relative">
        <h2 className="max-w-[331px] text-white font-bold text-2xl">
          Узингиз севган булимга обуна бўлинг
        </h2>
        <div className="absolute right-0 bottom-0">
          <img src={obunaBolishImg2} alt="img" />
        </div>
        <div className="absolute bottom-0 right-0">
          <img src={obunaBolishImg} alt="img" />
        </div>
      </div>

      <div className="dark:bg-[#111827] bg-white pt-[32px] pl-[32px] pr-[51px] pb-[121px] rounded">
        <h2 className="font-bold text-[#11142D] text-3xl dark:text-white mb-[30px]">Обуна</h2>
        <div className="flex items-center justify-between">
            <div>
                <form className="w-[343px] mb-[24px]">
                    <label for="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Обуна давом этиш вакти</label>
                    <select  id="countries" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>30 кун</option>
                    </select>
                </form>
                <form className="w-[343px] mb-[24px]">
                    <label for="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Булимни танланг</label>
                    <select  id="countries" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Фантастика</option>
                    </select>
                </form>
                <h2 className="font-bold text-[#11142D] text-xl dark:text-white">Обуна 30 кун давом этади</h2>
            </div>
            <div>
                <div className="bg-[#F5F5F5] mb-[34px] w-[368px] dark:bg-gray-700 p-4 rounded">
                    <div className="flex items-center justify-between mb-[16px]">
                        <h2 className="fonr-medium text-[#242424] text-sm dark:text-gray-400 ">Бошланиш вакти</h2>
                        <p className="font-bold text-[#242424] text-xl dark:text-white">12/09/2021</p>
                    </div>
                    <div className="flex items-center justify-between mb-[16px]">
                        <h2 className="fonr-medium text-[#242424] text-sm dark:text-gray-400 ">Якунланиш вакти</h2>
                        <p className="font-bold text-[#242424] text-xl dark:text-white">12/10/2021</p>
                    </div>
                    <div className="flex items-center justify-between mb-[16px]">
                        <h2 className="fonr-medium text-[#242424] text-sm dark:text-gray-400 ">Обуна нархи</h2>
                        <p className="font-bold text-[#3F51B5] text-xl ">12 000 сум</p>
                    </div>
                </div>
                <button className="w-[368px] rounded-[14px] bg-[#3F51B5] py-[12px] text-white text-lg font-medium">
                    Обуна булиш
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ObunaBolish;
