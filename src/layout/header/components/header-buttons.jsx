import React from 'react'
import headerUzbImg from '../../../assets/imgs/header-uzb.svg'
import headerBottomArrow from '../../../assets/icons/header-bottom-arrow.svg'
import headerUser from '../../../assets/icons/header-user.svg'
import { Link } from 'react-router-dom'


const HeaderButtons = () => {
  return (
    <div className='flex items-center gap-[20px]'>
        <div className='header_button_lng bg-[#EEF4FF] py-[9px] px-[16px] rounded-[14px] flex items-center gap-[9px]'>
            <div>
                <img src={headerUzbImg} alt="uzb img" />
            </div>
            <p className='font-semibold text-[16px] leading-[29px] text-[#3F51B5]'>Ўз</p>
            <div>
                <img src={headerBottomArrow} alt="bottom arrow" />
            </div>
        </div>
        <Link to="/profile/obuna-bolish" className='header_button_btn flex items-center gap-[12px] rounded-[14px] py-[7px] px-[24px] bg-[#3F51B5] '>
            <div>
                <img src={headerUser} alt="user icon" />
            </div>
            <p className='text-white font-bold text-[18px] leading-[33px]'>Кириш</p>
        </Link>
    </div>
  )
}

export default HeaderButtons
