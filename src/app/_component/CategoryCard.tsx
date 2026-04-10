import { productCategory } from '@/api/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
export type prop = {
        category:productCategory
    }
export default function CategoryCard({category}:prop) {
    
  return (
     <Link
            href={`/categories/${category._id}`}
            className="bg-[#FFFFFF] p-4 sm:p-6 rounded-2xl border border-[#F3F4F6] hover:-translate-y-1 hover:border-green-200 shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A] hover:shadow-[0px_8px_10px_-6px_#0000001A,0px_20px_25px_-5px_#0000001A] transition-all duration-300  group"
          >
            <div className="relative aspect-square rounded-xl bg-[#F9FAFB] overflow-hidden mb-4">
              <Image
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                src={category.image}
                alt={category.name}
              ></Image>
            </div>
            <h3 className="font-bold text-center text-[#101828] mb-2 group-hover:text-main-color transition-colors ">
              {category.name}
            </h3>
            <div className="flex justify-center opacity-0 group-hover:opacity-100 transition-all ">
              <span className="text-xs flex items-center gap-1 font-medium leading-4 text-main-color">
                View Subcategories <FaLongArrowAltRight />
              </span>
            </div>
          </Link>
  )
}
