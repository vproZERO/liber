import React from 'react'
import profileItemIcon from '/public/icon.jpg'

const ProfileItem = () => {
  return (
    <div className='py-14'>
      <div className='py-6 pl-6 shadow bg-white dark:bg-[#111827] rounded flex items-start gap-8'>
        <div className='max-w-[163px] '>
            <img className='rounded-full ' src={profileItemIcon} alt="profile item icon" />
        </div>
        <div>
            <h2 className='font-bold text-[#11142D] text-3xl mb-[10px] dark:text-white'>Abdulahad Abduvahobov</h2>
            <p className='text-[#242424] font-medium text-xl mb-[10px] dark:text-[#9CA3AF] dark:hover:text-white'>+998 91 143 03 77</p>
            <p className='text-[9A9A9A] font-medium text-xl opacity-50 dark:text-[#9CA3AF] dark:hover:text-white'>ID: 0001  Баланс: 45 000 $</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileItem
