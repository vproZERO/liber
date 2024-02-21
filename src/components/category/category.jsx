import React from 'react'
import { categoryData } from '../../data'
import './category.css'

const Category = () => {
  return (
    <div className='py-[9px] px-[120px] flex items-center gap-[20px] dark:bg-[#1F2937] border-b border-[#F0F0F0]'>
        {categoryData.map((category) => (
            <a className='text-[#3F51B5] dark:text-white font-semibold text-[16px] leading-[29px] category_link' href={category.path} key={category.id}>
                <span >{category.title}</span>
            </a>
        ))}
    </div>
  )
}

export default Category
