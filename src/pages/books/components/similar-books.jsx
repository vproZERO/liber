import React from "react";
import { newAddeesData } from "../../../data";

const SimilarBooks = () => {
  const [showAllBooks, setShowAllBooks] = React.useState(false);

  const booksToShow = showAllBooks ? newAddeesData : newAddeesData.slice(0, 3);
  return (
    <div>
      {booksToShow.map((books) => (
        <div className=" mb-4 flex items-center gap-[30px]" key={books.id}>
            <div className="max-w-[139px] h-[196px] ">
                <img src={books.img} alt={books.title} />
            </div>
            <div>
                <h2 className="font-bold text-lg text-[#11142D] mb-2 dark:text-white">{books.title}</h2>
                <p className="font-normal text-sm text-[#3F4348] mb-2 dark:text-blue-700">{books.category}</p>
                <div className="flex items-center gap-[10px]">
                    <div>
                        <img src={books.rateimg} alt="rate img" />
                    </div>
                    <p className="font-bold text-lg text-[#FF754C]">{books.rate}</p>
                    <p className="font-medium text-lg text-[#AAAAAA]">{books.fikrlar} <span>fikrlar</span></p>
                </div>
            </div>
        </div>
      ))}
      {!showAllBooks && (
        <button onClick={() => setShowAllBooks(true)} className='mt-6 py-[13px] rounded-xl w-[360px] bg-[#EEF4FF] dark:bg-[#3F51B5] dark:text-white text-lg font-bold text-[#3F51B5]'>Кўпроқ</button>
      )}
    </div>
  );
};

export default SimilarBooks;
