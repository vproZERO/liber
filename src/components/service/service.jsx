import React, { useEffect } from 'react'
import './service.css'
import { serviceData } from '../../data'

const Service = () => {


  return (
    <div className='px-[120px] dark:bg-[#1F2937] pt-[28px] pb-[40px] flex items-center justify-between'>
      {serviceData.map((serviceitems) => (
        <div key={serviceitems.id} className='flex service_content items-center gap-[19px] aos-init aos-animate' data-aos={serviceitems.id === 1 || serviceitems.id === 3 ? 'fade-right' : 'fade-up'}>
            <div className='p-[11px]  rounded-[11px] bg-[#EEF4FF] dark:bg-[#111827] cursor-pointer'>
                <img className='service_imgs w-[24px]' src={serviceitems.img} alt={serviceitems.title} />
            </div>
            <div>
                <h2 className='font-bold text-[15px] leading-[19px] mb-[7px] text-[#11142D] dark:text-white'>{serviceitems.title}</h2>
                <p className='font-normal text-[11px] leading-[15px] text-[#AAAAAA] max-w-[212px]'>{serviceitems.text}</p>
            </div>
        </div>
      ))}
    </div>
  )
}

export default Service
