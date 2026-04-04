import Image from 'next/image'
import React from 'react'
import me from '@/assets/image/01207179348.png'
import { Type } from 'lucide-react'
import { productCategory } from '@/api/types'
type props ={
  categoryData : productCategory
}
export default function HomeCategoryCard({categoryData}:props) {
  return (
    <div className='flex flex-col p-4 rounded-lg justify-center items-center gap-3 shadow-[0_1px_2px_-1px_rgba(0,0,0,0.1),0_1px_3px_0_rgba(0,0,0,0.1)] hover:shadow-md'>
        <div className='relative w-20 h-20 rounded-full overflow-hidden flex items-center justify-center  bg-main-color-subtle'>
                <Image className='w-full h-full object-cover' src={categoryData.image} alt={categoryData.name} fill ></Image>
                {/* <img src={me} alt="" /> */}
        </div>
        <p className='text-[16px] font-medium leading-6 text-[#364153]'>{categoryData.name}</p>
    </div>
  )
}
