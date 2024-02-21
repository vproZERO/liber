import React from 'react'
import { newAddeesData } from '../../../data'

const Saqlaganlarim = () => {

    const firstTwoItems = newAddeesData.slice(0,2)

  return (
    <div>
      <div className="w-[966px] bg-white shadow rounded pt-[32px] pl-[32px] pb-[145px] pr-[30px] dark:bg-[#111827]">
        <h2 className="text-[#11142D] font-bold text-3xl dark:text-white mb-[47px]">
        Сақланганлар
        </h2>
        <div className='flex items-center flex-wrap gap-[61px]'>
            {firstTwoItems.map((item) => (
                <div key={item.id} className="max-w-[353px] flex items-center gap-[30px]">
                    <div className='w-[139px] h-[196px]'>
                        <img src={item.img} alt={item.title} />
                    </div>
                    <div>
                        <h2 className='font-bold text-lg text-[#11142D] dark:text-white max-w-[195px] mb-[8px]'>{item.title}</h2>
                        <p className='text-[#3F51B5] mb-[8px] font-nromal text-sm'>{item.category}</p>
                        <div className='flex items-center gap-[13px] mb-[20px]'>
                            <div className='flex items-center gap-[10px]'>
                                <div>
                                    <img src={item.rateimg} alt="img" />
                                </div>
                                <p className='font-bold text-[#FF754C] text-lg'>{item.rate}</p>
                            </div>
                            <h2 className='text-[#AAAAAA] text-lg font-medium'>{item.fikrlar} <span>фиклар</span> </h2>
                        </div>
                        <button className="text-[#FF5247]">
                        Ўчириш
                        </button>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Saqlaganlarim
