import React from 'react'
import './hero.css'
import heroHearth from '../../assets/icons/hero-hearth.svg'
import heroBgImg from '../../assets/imgs/hero-bg-img.svg'
import heroBgImg2 from '../../assets/imgs/hero-bg-img2.svg'
import HeroSlider from './hero-slider/hero-slider'


const Hero = () => {
  return (
    <div className='px-[120px] dark:bg-[#1F2937] pt-[16px] pb-[28px] flex items-center justify-between'>
      
    <div className='bg-[#EEF4FF] pl-[32px] dark:bg-[#111827] pr-[24px] pt-[32px] pb-[16px] rounded-[12px] h-[351px] flex items-start gap-[13px] relative'>
        <h2 className='font-bold text-[24px] leading-[44px] text-[#242424] dark:text-white'>Кўп ўқилаётганлар</h2>
        <div className='absolute left-0 bottom-0'>
            <img src={heroBgImg2} alt="hero bg img 2" />
        </div>
        <HeroSlider/>
    </div>


    <div className='pl-[22px] pr-[24px] pt-[32px] pb-[38px] bg-[#3F51B5] rounded-[12px] relative aos-init aos-animate z-0' data-aos='fade-left' data-aos-deration='1500'>
        <div className='absolute right-0 bottom-0'>
            <img src={heroBgImg} alt="hero bg img" />
        </div>
        <h2 className='font-bold text-white text-[24px] leading-[32px] max-w-[199px] mb-[20px]'>Китоб ўқишни ёқтирасизми?</h2>
        <p className='max-w-[215px] text-white text-[18px] leading-[24px] font-normal mb-[77px]'>Унда пулингизни тежаш учун ўзингиз йоқтирган рукнга обуна бўлинг</p>

        <button className='rounded-[14px] z-30  py-[7px] px-[24px] flex items-center gap-[12px] bg-white transition hover:-translate-y-[2px]'>
            <div className='z-30'>
                <img src={heroHearth} alt="hero hearth" />
            </div>
            <p className='z-30 font-bold text-[18px] leading-[33px] text-[#242424]'>Обуна бўлиш</p>
        </button>
    </div>

    </div>
  )
}

export default Hero
