import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import xisobImg from '../../../assets/imgs/xisob-img.svg'
import xisobPayme from '../../../assets/imgs/xisob-payme.svg'
import xisobClick from '../../../assets/imgs/xisob-click.svg'

const Xisob = () => {
  return (
    <div>
      <div className='w-[966px] bg-white shadow rounded pt-[32px] pl-[32px] pb-[78px] pr-[30px] dark:bg-[#111827]'>
            <h2 className='text-[#11142D] font-bold text-3xl dark:text-white mb-[31px]'>Э-Хисоб</h2>
            <div className='flex items-center justify-between relative mb-[36px] bg-[#3F51B5] rounded-[20px]'>
                <div className='pt-[16px] pl-[16px] pb-[22px]'>
                    <p className='text-white font-normal text-base mb-[12px]'>Баланс</p>
                    <h2 className='text-white font-bold text-2xl'>45 000 сўм</h2>
                </div>
                <div className='absolute right-0 bottom-0'>
                    <img src={xisobImg} alt="img" />
                </div>
            </div>
            <Link to="/profile/xisob/toldirish" className='max-w-[906px] dark:bg-[#374151] border border-[#EDEDED] flex items-center py-[21px] justify-center mb-[20px] shadow rounded-[20px]'>
                <div>
                    <img src={xisobPayme} alt="" />
                </div>
            </Link>
            <Link to="/profile/xisob/toldirish" className='max-w-[906px] dark:bg-[#374151] border border-[#EDEDED] flex items-center py-[21px] justify-center mb-[20px] shadow rounded-[20px]'>
                <div>
                    <img src={xisobClick} alt="" />
                </div>
            </Link>
      </div>    
    </div>
  )
}

export default Xisob
