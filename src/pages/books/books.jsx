import React from "react";
import { newAddeesData } from "../../data";
import { useParams } from "react-router-dom";
import booksChat from "../../assets/icons/books-chat.svg";
import booksRate from "../../assets/icons/books-rate.svg";
import booksBuyBtn from "../../assets/icons/books-buy-btn.svg";
import "./books.css";
import SimilarBooks from "./components/similar-books";
import Malumotlar from "./components/malumotlar";

const Books = () => {
  const params = useParams();

  const books = newAddeesData.find((obj) => obj.id === Number(params.books));

  return (
    <>
      <div className="px-[120px] dark:bg-[#1F2937] pt-6 pb-10 flex items-start gap-6">
        <div className="max-w-[300px] h-[422px]">
          <img src={books.img} alt={books.title} />
        </div>
        <div className="w-[965px]">
          <div className="flex items-center w-full justify-between">
            <h2 className="font-bold text-3xl text-[#11142D] dark:text-white">{books.title}</h2>

            <div className="flex items-center">
              <div className="flex items-center gap-4 mr-7">
                <div>
                  <img src={books.headphonimg} alt="headphone" />
                </div>
                <div>
                  <img src={books.booksimg} alt="booksimg" />
                </div>
              </div>

              <div className="flex items-center gap-5 mr-12">
                <div className="flex items-center gap-2">
                  <div>
                    <img src={books.rateimg} alt="rate img" />
                  </div>
                  <div>
                    <img src={books.rateimg} alt="rate img" />
                  </div>
                  <div>
                    <img src={books.rateimg} alt="rate img" />
                  </div>
                  <div>
                    <img src={books.rateimg} alt="rate img" />
                  </div>
                  <div>
                    <img src={booksRate} alt="rate img" />
                  </div>
                </div>
                <p className="font-bold dark:text-yellow-800 text-2xl text-[#242424]">
                  {books.rate}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div>
                  <img src={booksChat} alt="books chat" />
                </div>
                <p className="font-medium dark:text-white text-sm text-[#11142D]">
                  {books.fikrlar} Фикрлар
                </p>
              </div>
            </div>
          </div>
          <p className="text-sm font-nromal text-[#3F51B5] mb-4">
            {books.category}
          </p>
          <p className="max-w-[960px] text-start font-normal dark:text-[#9CA3AF] text-sm text-[#11142D] mb-4">
            {books.text}
          </p>
          <div className="flex items-center gap-16 mb-5">
            <div>
              <p className="font-nromal text-sm text-[#AAAAAA] mb-2">Муаллиф</p>
              <p className="font-semibold text-lg text-[#11142D] dark:text-white">
                {books.muallif}
              </p>
            </div>
            <div>
              <p className="font-nromal text-sm text-[#AAAAAA] mb-2">Нашриёт</p>
              <p className="font-semibold text-lg text-[#11142D] dark:text-white">
                {books.nashriyot}
              </p>
            </div>
            <div>
              <p className="font-nromal text-sm text-[#AAAAAA] mb-2">Йил</p>
              <p className="font-semibold text-lg text-[#11142D] dark:text-white">
                {books.yil}
              </p>
            </div>
          </div>
          <span className="block border-dashed border-b mb-6 w-full h-1"></span>

          <div className="flex items-center gap-4">
            <button className="button">
              <div>
                <span>
                  <p>Сотиб олиш - 65 000 сум</p>
                  <p className="w-[24px]">
                    <img src={booksBuyBtn} alt="" />
                  </p>
                </span>
              </div>
              <div>
                <span>
                  <p>Сотиб олиш - 65 000 сум</p>
                  <p className="w-[24px]">
                    <img src={booksBuyBtn} alt="" />
                  </p>
                </span>
              </div>
            </button>
            <button className="flex items-center gap-3 dark:shadow-none  button2 ">
              <div>
                <img src={books.headphonimg} alt="" />
              </div>
              <span className="font-medium text-sm text-[#242424]">
                Аудио тинглаш - 55 000 сум
              </span>
            </button>
            <button className="flex items-center dark:shadow-none gap-3 button2 ">
              <div>
                <img src={books.booksimg} alt="" />
              </div>
              <span className="font-medium text-sm text-[#242424]">
                Онлайн укиш - 45 000 сум
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="px-[120px] dark:bg-[#1F2937]  pb-[153px] flex items-start justify-between">
        <Malumotlar/>
        <SimilarBooks/>
      </div>
    </>
  );
};

export default Books;
