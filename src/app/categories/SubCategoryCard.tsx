import { subCategoryType } from '@/api/types'
import Link from 'next/link'
import React from 'react'
import { FaFolderOpen } from 'react-icons/fa'
import { FaArrowRightLong } from 'react-icons/fa6'
export type prop = {
  subCategory:subCategoryType
}
export default function SubCategoryCard({subCategory}:prop) {
  return (
    <Link href={`/products?subcategory=${subCategory._id}`} className='bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-xl hover:border-green-200 hover:-translate-y-1 transition-all duration-100 group '>
        <div className='h-14 w-14 rounded-xl bg-green-50 flex items-center justify-center mb-4 text-2xl text-main-color group-hover:bg-green-100 transition-colors duration-100'>
            <FaFolderOpen/>
        </div>
        <h3 className='font-bold text-gray-900 text-lg group-hover:text-main-color transition-colors mb-2'>{subCategory.name}</h3>
        <div className='flex items-center gap-2 text-sm text-main-color opacity-0 group-hover:opacity-100 transition-opacity'>
            Browse Products
            <FaArrowRightLong />
        </div>
    </Link>
  )
}
