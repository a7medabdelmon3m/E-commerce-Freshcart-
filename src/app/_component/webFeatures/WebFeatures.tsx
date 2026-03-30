import React from 'react'
import { BiSupport } from 'react-icons/bi'
import { FaShieldAlt, FaTruck } from 'react-icons/fa'
import { FaArrowRotateLeft } from 'react-icons/fa6'

export default function WebFeatures() {
  return (
    <div className=' bg-[#F9FAFB]'>
        <div className='container mx-auto px-4 py-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
                <div className='flex items-center gap-4 rounded-xl p-4 bg-[#FFFFFF] shadow-[0_1px_2px_-1px_rgba(0,0,0,0.1),0_1px_3px_0_rgba(0,0,0,0.1)] hover:shadow-md'>
                        <div className='w-12 h-12 bg-[#FEF2F2] flex items-center justify-center rounded-full'>
                            <FaTruck color='#2B7FFF' className='text-[22.5px]' />
                        </div>
                        <div>
                            <p className='font-semibold text-[14px] leading-5 text-[#1E2939]'>Free Shipping</p>
                            <p className='font-medium text-[12px] leading-4 text-text-color'>On orders over 500 EGP</p>
                        </div>
                </div>
                <div className='flex items-center gap-4 rounded-xl p-4 bg-[#FFFFFF] shadow-[0_1px_2px_-1px_rgba(0,0,0,0.1),0_1px_3px_0_rgba(0,0,0,0.1)] hover:shadow-md'>
                        <div className='w-12 h-12 bg-[#ECFDF5] flex items-center justify-center rounded-full'>
                            <FaShieldAlt  color='#00BC7D' className='text-[22.5px]' />
                        </div>
                        <div>
                            <p className='font-semibold text-[14px] leading-5 text-[#1E2939]'>Secure Payment</p>
                            <p className='font-medium text-[12px] leading-4 text-text-color'>100% secure transactions</p>
                        </div>
                </div>
                <div className='flex items-center gap-4 rounded-xl p-4 bg-[#FFFFFF] shadow-[0_1px_2px_-1px_rgba(0,0,0,0.1),0_1px_3px_0_rgba(0,0,0,0.1)] hover:shadow-md'>
                        <div className='w-12 h-12 bg-[#F3F4F6] flex items-center justify-center rounded-full'>
                            <FaArrowRotateLeft color='#FF6900' className='text-[22.5px]' />
                        </div>
                        <div>
                            <p className='font-semibold text-[14px] leading-5 text-[#1E2939]'>Easy Returns</p>
                            <p className='font-medium text-[12px] leading-4 text-text-color'>14-day return policy</p>
                        </div>
                </div>
                <div className='flex items-center gap-4 rounded-xl p-4 bg-[#FFFFFF] shadow-[0_1px_2px_-1px_rgba(0,0,0,0.1),0_1px_3px_0_rgba(0,0,0,0.1)] hover:shadow-md'>
                        <div className='w-12 h-12 bg-[#F9FAFB] flex items-center justify-center rounded-full'>
                            <BiSupport  color='#AD46FF' className='text-[22.5px]' />
                        </div>
                        <div>
                            <p className='font-semibold text-[14px] leading-5 text-[#1E2939]'>24/7 Support</p>
                            <p className='font-medium text-[12px] leading-4 text-text-color'>Dedicated support team</p>
                        </div>
                </div>
                
        </div> 
    </div>
  )
}
