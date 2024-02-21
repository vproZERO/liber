import React from "react";
import { newAddeesData } from "../../../../data";
import booksChat from "../../../../assets/icons/books-chat.svg";
import booksRate from "../../../../assets/icons/books-rate.svg";
import booksBuyBtn from "../../../../assets/icons/books-buy-btn.svg";

const AudioKitob = () => {
  const firstTwoItems = newAddeesData.slice(0, 1);

  const secondTwoItems = newAddeesData.slice(1, 2);

  return (
    <div>
      {firstTwoItems.map((item) => (
        <div
          key={item.id}
          className="p-[24px] mb-[16px] dark:bg-[#111827] rounded flex items-center gap-[27px] max-w-[970px]"
        >
          <div className="w-[218px] h-[307px]">
            <img src={item.img} alt={item.title} />
          </div>
          <div className="w-[677px]">
            <div className="flex items-center w-full justify-between">
              <h2 className="font-bold text-3xl text-[#11142D] dark:text-white">
                {item.title}
              </h2>

              <div className="flex items-center">

                <div className="flex items-center gap-5 mr-12">
                  <div className="flex items-center gap-2">
                    <div>
                      <img src={item.rateimg} alt="rate img" />
                    </div>
                    <div>
                      <img src={item.rateimg} alt="rate img" />
                    </div>
                    <div>
                      <img src={item.rateimg} alt="rate img" />
                    </div>
                    <div>
                      <img src={item.rateimg} alt="rate img" />
                    </div>
                    <div>
                      <img src={booksRate} alt="rate img" />
                    </div>
                  </div>
                  <p className="font-bold dark:text-yellow-800 text-2xl text-[#242424]">
                    {item.rate}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <p className="font-medium dark:text-white text-sm text-[#11142D]">
                    {item.fikrlar} Фикрлар
                  </p>
                </div>
              </div>
            </div>
            <p className="text-sm font-nromal text-[#3F51B5] mb-4">
              {item.category}
            </p>
            <p className="max-w-[960px] text-start font-normal dark:text-[#9CA3AF] text-sm text-[#11142D] mb-4">
              {item.text}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-16 mb-5">
                <div>
                  <p className="font-nromal text-sm text-[#AAAAAA] mb-2">
                    Муаллиф
                  </p>
                  <p className="font-semibold text-lg text-[#11142D] dark:text-white">
                    {item.muallif}
                  </p>
                </div>
                <div>
                  <p className="font-nromal text-sm text-[#AAAAAA] mb-2">
                    Нашриёт
                  </p>
                  <p className="font-semibold text-lg text-[#11142D] dark:text-white">
                    {item.nashriyot}
                  </p>
                </div>
                <div>
                  <p className="font-nromal text-sm text-[#AAAAAA] mb-2">Йил</p>
                  <p className="font-semibold text-lg text-[#11142D] dark:text-white">
                    {item.yil}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-[16px]">
                  <div>
                    <img src={item.headphonimg} alt="" />
                  </div>
                  <div>
                    <img src={item.booksimg} alt="" />
                  </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      {secondTwoItems.map((item) => (
        <div
          key={item.id}
          className="p-[24px] mb-[16px] dark:bg-[#111827] rounded flex items-center gap-[27px] max-w-[970px]"
        >
          <div className="w-[218px] h-[307px]">
            <img src={item.img} alt={item.title} />
          </div>
          <div className="w-[677px]">
            <div className="flex items-center w-full justify-between">
              <h2 className="font-bold text-3xl text-[#11142D] dark:text-white">
                {item.title}
              </h2>

              <div className="flex items-center">

                <div className="flex items-center gap-5 mr-12">
                  <div className="flex items-center gap-2">
                    <div>
                      <img src={item.rateimg} alt="rate img" />
                    </div>
                    <div>
                      <img src={item.rateimg} alt="rate img" />
                    </div>
                    <div>
                      <img src={item.rateimg} alt="rate img" />
                    </div>
                    <div>
                      <img src={item.rateimg} alt="rate img" />
                    </div>
                    <div>
                      <img src={booksRate} alt="rate img" />
                    </div>
                  </div>
                  <p className="font-bold dark:text-yellow-800 text-2xl text-[#242424]">
                    {item.rate}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <p className="font-medium dark:text-white text-sm text-[#11142D]">
                    {item.fikrlar} Фикрлар
                  </p>
                </div>
              </div>
            </div>
            <p className="text-sm font-nromal text-[#3F51B5] mb-4">
              {item.category}
            </p>
            <p className="max-w-[960px] text-start font-normal dark:text-[#9CA3AF] text-sm text-[#11142D] mb-4">
              {item.text}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-16 mb-5">
                <div>
                  <p className="font-nromal text-sm text-[#AAAAAA] mb-2">
                    Муаллиф
                  </p>
                  <p className="font-semibold text-lg text-[#11142D] dark:text-white">
                    {item.muallif}
                  </p>
                </div>
                <div>
                  <p className="font-nromal text-sm text-[#AAAAAA] mb-2">
                    Нашриёт
                  </p>
                  <p className="font-semibold text-lg text-[#11142D] dark:text-white">
                    {item.nashriyot}
                  </p>
                </div>
                <div>
                  <p className="font-nromal text-sm text-[#AAAAAA] mb-2">Йил</p>
                  <p className="font-semibold text-lg text-[#11142D] dark:text-white">
                    {item.yil}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-[16px]">
                  <div>
                    <img src={item.headphonimg} alt="" />
                  </div>
                  <div>
                    <img src={item.booksimg} alt="" />
                  </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AudioKitob;
