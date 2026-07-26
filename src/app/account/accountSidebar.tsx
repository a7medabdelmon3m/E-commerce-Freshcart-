'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { FaGear, FaLocationDot, FaMapLocationDot } from 'react-icons/fa6'
import { IoIosArrowForward } from 'react-icons/io'

export default function AccountSidebar() {
    const params = usePathname()
    const isSettings = params.includes('settings')

    
  return (
    <aside className="w-full lg:w-72 shrink-0">
            <div className="bg-white w-full rounded-2xl border border-[#F3F4F6] shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A]">
              <div className="p-4 border-b border-[#F3F4F6]">
                <h2 className="font-bold text-[#101828] leading-6">
                  My Account
                </h2>
              </div>
              <ul className="p-2">
                <Link className={`flex items-center rounded-xl py-3 px-4 gap-3 ${!isSettings ? 'bg-[#F0FDF4]' :'' }`} href={`/account/addresses`}>
                  <div className={`w-9 h-9 rounded-lg ${!isSettings ? 'bg-[#22C55E]' :  'bg-[#F3F4F6]'}  flex justify-center items-center`}>
                    <FaLocationDot  color={` ${isSettings ? '#6A7282' :  '#FFFFFF'} `} />
                  </div>
                  <span className={`font-medium leading-6 ${!isSettings ? 'text-[#22C55E]' :  'text-[#4A5565]'}  flex-1`}>
                    My Addresses
                  </span>
                  <IoIosArrowForward color={` ${!isSettings ? '#22C55E' :  '#99A1AF'}`} />
                </Link>
                <Link className={`flex items-center rounded-xl py-3 px-4 gap-3 ${isSettings ? 'bg-[#F0FDF4]' :'' } `} href={`/account/settings`}>
                  <div className={`w-9 h-9 rounded-lg ${isSettings ? 'bg-[#22C55E]' :  'bg-[#F3F4F6]'}  flex justify-center items-center`}>
                    <FaGear color={` ${!isSettings ? '#6A7282' :  '#FFFFFF'} `} />
                  </div>
                  <span className={`font-medium leading-6 ${isSettings ? 'text-[#22C55E]' :  'text-[#4A5565]'}  flex-1`}>
                    Settings
                  </span>
                  <IoIosArrowForward color={` ${isSettings ? '#22C55E' :  '#99A1AF'}`} />
                </Link>
              </ul>
            </div>
          </aside>
  )
}
