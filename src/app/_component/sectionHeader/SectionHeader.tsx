import React from 'react'

export default function SectionHeader({coloredText , unColoredText}:{coloredText:string , unColoredText:string}) {
  return (
        <div className='flex gap-3 '>
                <div className='w-1.5 h-8 bg-linear-to-b from-[#00BC7D] to-[#007A55] rounded-full'>
                </div>
                <div className='font-bold text-[24px] leading-8 sm:text-[30px] sm:leading-9 text-black'>
                    <span >{coloredText}</span> <span className='text-[#009966]'>{ unColoredText}</span>
                </div>
        </div>
  )
}
