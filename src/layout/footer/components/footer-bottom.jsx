import React from 'react'
import footerFacebook from '../../../assets/icons/footer-facebook.svg'
import footerInstagram from '../../../assets/icons/footer-instagramm.svg'
import footerTelegram from '../../../assets/icons/footer-telegramm.svg'
import footerTiktok from '../../../assets/icons/footer-tiktok.svg'
import footerYoutube from '../../../assets/icons/footer-youtube.svg'

import footerUzcard from '../../../assets/imgs/footer-uzcard.svg'
import footerHumo from '../../../assets/imgs/footer-humo.svg'
import footerPayme from '../../../assets/imgs/footer-payme.svg'


const FooterBottom = () => {
  return (
    <div className='px-[120px] pt-[12px] pb-[33px] dark:bg-[#111827] bg-[#10182C] grid grid-cols-3 gap-y-[11px]'>
        <p className='text-white font-light text-[14px]'>Ижтимоий тармоқлар</p>
        <p className='text-white font-light text-[14px]'>Боғланиш</p>
        <p className='text-white font-light text-[14px]'>Биз қабул қиламиз</p>

        <div className='flex items-center gap-[24px]'>
            <div className='w-[24px] transition hover:-translate-y-[2px] cursor-pointer'>
                <img src={footerFacebook} alt="img" />
            </div>
            <div className='w-[24px] transition hover:-translate-y-[2px] cursor-pointer'>
                <img src={footerYoutube} alt="img" />
            </div>
            <div className='w-[24px] transition hover:-translate-y-[2px] cursor-pointer'>
                <img src={footerTiktok} alt="img" />
            </div>
            <div className='w-[24px] transition hover:-translate-y-[2px] cursor-pointer'>
                <img src={footerTelegram} alt="img" />
            </div>
            <div className='w-[24px] transition hover:-translate-y-[2px] cursor-pointer'>
                <img src={footerInstagram} alt="img" />
            </div>
        </div>

        <p className='text-white font-light text-[14px]'>+998 90 253 77 53      <span className='ml-[23px]'>support@liber.uz</span></p>

        <div className='flex items-center gap-[7px] '>
            <div className='w-[57px] transition hover:-translate-y-[2px] cursor-pointer'>
                <img src={footerUzcard} alt="footer img" />
            </div>
            <div className='w-[57px] transition hover:-translate-y-[2px] cursor-pointer'>
                <img src={footerHumo} alt="footer img" />
            </div>
            <div className='w-[57px] transition hover:-translate-y-[2px] cursor-pointer'>
                <img src={footerPayme} alt="footer img" />
            </div>
        </div>
    </div>
  )
}

export default FooterBottom
