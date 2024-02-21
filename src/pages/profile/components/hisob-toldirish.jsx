import React from 'react'
import xisobImg from '../../../assets/imgs/xisob-img.svg'


const HisobToldirish = () => {
  return (
    <div>
      <div className='w-[966px] bg-white shadow rounded pt-[32px] pl-[32px] pb-[78px] pr-[30px] dark:bg-[#111827]'>
            <h2 className='text-[#11142D] font-bold text-3xl dark:text-white mb-[31px]'>Хисобни тулдириш</h2>
            <div className='flex items-center justify-between relative mb-[36px] bg-[#3F51B5] rounded-[20px]'>
                <div className='pt-[16px] pl-[16px] pb-[22px]'>
                    <p className='text-white font-normal text-base mb-[12px]'>ID: 0001</p>
                    <h2 className='text-white font-bold text-2xl'>45 000 сўм</h2>
                </div>
                <div className='absolute right-0 bottom-0'>
                    <img src={xisobImg} alt="img" />
                </div>
            </div>

            <div className='max-w-[343px]'>
                <h2 className='text-[#11142D] font-semibold text-sm dark:text-white mb-[6px]'>Сумма</h2>
                <div className='p-[13px] border rounded-[16px] border-[#EDEDED] mb-[35px]'>
                        <span className='text-[14px] text-[#9A9A9A]'>Сум</span>
                </div>
                <button className='bg-[#3F51B5] w-full text-white py-[10px] text-base rounded-[14px]'>
                Тулдириш
                </button>
            </div>
      </div>    
    </div>
  )
}

export default HisobToldirish
