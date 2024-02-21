import React from 'react'
import footerImg from '../../../assets/imgs/footer-img.svg'
import footerImg2 from '../../../assets/imgs/footer-img2.svg'


const FooterTop = () => {
  return (
    <div className='px-[120px] pt-[31px] flex items-start justify-between pb-[63px] dark:bg-[#374151] bg-[#EEF4FF]'>
        <ul>
            <li className='mb-[14px] text-[#11142D] font-bold text-[20px] leading-[37px] dark:text-white'>Платформа хақида</li>
            <li className='text-[#11142D] text-[18px] leading-[33px] font-normal mb-[18px] hover:text-[#3F51B5] transition hover:-translate-y-1 cursor-pointer dark:text-[#9CA3AF] dark:hover:text-white'>Liber ўзи нима?</li>
            <li className='text-[#11142D] text-[18px] leading-[33px] font-normal mb-[18px] hover:text-[#3F51B5] transition hover:-translate-y-1 cursor-pointer dark:text-[#9CA3AF] dark:hover:text-white'>Фойдаланиш шартлари</li>
            <li className='text-[#11142D] text-[18px] leading-[33px] font-normal mb-[18px] hover:text-[#3F51B5] transition hover:-translate-y-1 cursor-pointer dark:text-[#9CA3AF] dark:hover:text-white'>Ёрдам</li>

        </ul>
        <ul>
            <li className='mb-[14px] text-[#11142D] font-bold text-[20px] leading-[37px] dark:text-white'>Обуна хақида</li>
            <li className='text-[#11142D] text-[18px] leading-[33px] font-normal mb-[18px] hover:text-[#3F51B5] transition hover:-translate-y-1 cursor-pointer dark:text-[#9CA3AF] dark:hover:text-white'>Обуна бўлиш</li>
            <li className='text-[#11142D] text-[18px] leading-[33px] font-normal  hover:text-[#3F51B5] transition hover:-translate-y-1 cursor-pointer dark:text-[#9CA3AF] dark:hover:text-white'>Қандай тўлаш</li>

        </ul>
        <ul>
            <li className='mb-[14px] text-[#11142D] font-bold text-[20px] leading-[37px] dark:text-white'>Китоблар</li>
            <li className='text-[#11142D] text-[18px] leading-[33px] font-normal mb-[18px] hover:text-[#3F51B5] transition hover:-translate-y-1 cursor-pointer dark:text-[#9CA3AF] dark:hover:text-white'>Аудио китоблар</li>
            <li className='text-[#11142D] text-[18px] leading-[33px] font-normal mb-[18px] hover:text-[#3F51B5] transition hover:-translate-y-1 cursor-pointer dark:text-[#9CA3AF] dark:hover:text-white'>Электрон китоблар</li>
            <li className='text-[#11142D] text-[18px] leading-[33px] font-normal mb-[18px] hover:text-[#3F51B5] transition hover:-translate-y-1 cursor-pointer dark:text-[#9CA3AF] dark:hover:text-white'>Китоблар</li>

        </ul>
        <ul>
            <li className='mb-[14px] text-[#11142D] font-bold text-[20px] leading-[37px] dark:text-white'>Мобил илова</li>
            <li className='text-[#11142D] text-[18px] leading-[33px] font-normal mb-[18px] hover:text-[#3F51B5] transition hover:-translate-y-1 cursor-pointer'>
                <div>
                    <img src={footerImg} alt="footer img" />
                </div>
            </li>
            <li className='text-[#11142D] text-[18px] leading-[33px] font-normal  hover:text-[#3F51B5] transition hover:-translate-y-1 cursor-pointer'>
                <div>
                    <img src={footerImg2} alt="footer img" />
                </div>
            </li>

        </ul>
    </div>
  )
}

export default FooterTop
