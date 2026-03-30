import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'
import { FaApple, FaEnvelope, FaGooglePlay, FaLeaf, FaTag, FaTruck } from 'react-icons/fa'
import { FaArrowRightLong } from 'react-icons/fa6'

export default function AppForm() {
  return (
    <div className='relative rounded-[40px] border-px border-[#D0FAE580] bg-linear-to-br from-[#F3F4F6] via-[#FFFFFF] to-[#FEF2F2] shadow-[0px_25px_50px_-12px_#00BC7D1A]'>
        <div className='absolute w-80 h-80 rounded-full bg-linear-to-br from-[#A4F4CF66] to-transparent blur-3xl top-0 right-0 translate-x-1/4 -translate-y-1/2'>

        </div>
        <div className='absolute w-64 h-64 rounded-full bg-linear-to-br from-[#96F7E44D] to-transparent blur-3xl bottom-0 left-0 -translate-x-1/4 translate-y-1/2'>

        </div>
        <div className='relative grid grid-cols-5 gap-8 p-8 lg:p-14 '>
            <div className='col-span-5 lg:col-span-3 flex flex-col gap-5.75'>
                <div className='flex  gap-4 items-center'>
                    <div className='bg-linear-to-br from-[#00BC7D] to-[#00BBA7] w-14 h-14 rounded-2xl flex items-center justify-center text-white'>
                        <FaEnvelope size={20} />
                    </div>
                    <div>
                        <h3 className='text-[#009966] font-semibold text-[14px] leading-5'>Newsletter</h3>
                        <p className='text-text-color text-[12px] font-medium leading-4'>50,000+ subscribers</p>
                    </div>
                </div>
                <div className=''>
                        <h2 className='font-bold text-[36px] leading-12.5'>Get the Freshest Updates <span className='text-[#009966] '> Delivered Free</span></h2>
                        <p className='text-text-color mt-3 medium text-[18px] leading-7'>
                            Weekly recipes, seasonal offers & exclusive member perks.
                        </p>
                </div>
                <div className='flex gap-3 flex-wrap'>
                    <div className='flex gap-2.5 px-4 py-2.5 rounded-full items-center bg-[#FFFFFFCC] border-px border-[#D0FAE5] shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A] '>
                        <div className='w-7 h-7 rounded-full flex items-center justify-center bg-[#D0FAE5] text-[#009966]'>
                                <FaLeaf />
                        </div>
                        <span className='text-[#364153] font-medium text-[14px] leading-5'>Fresh Picks Weekly</span>
                    </div>
                    <div className='flex gap-2.5 px-4 py-2.5 rounded-full items-center bg-[#FFFFFFCC] border-px border-[#D0FAE5] shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A] '>
                        <div className='w-7 h-7 rounded-full flex items-center justify-center bg-[#D0FAE5] text-[#009966]'>
                                <FaTruck />
                        </div>
                        <span className='text-[#364153] font-medium text-[14px] leading-5'>Free Delivery Codes</span>
                    </div>
                    <div className='flex gap-2.5 px-4 py-2.5 rounded-full items-center bg-[#FFFFFFCC] border-px border-[#D0FAE5] shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A] '>
                        <div className='w-7 h-7 rounded-full flex items-center justify-center bg-[#D0FAE5] text-[#009966]'>
                                <FaTag />
                        </div>
                        <span className='text-[#364153] font-medium text-[14px] leading-5'>Members-Only Deals</span>
                    </div>
                   
                </div>
                 <div>
                        <div className='flex justify-between items-center gap-3'>
                            <Input placeholder='you@example.com' type='email' className='h-auto rounded-2xl border-2 py-4.5 px-5 text-[16px] font-medium bg-white border-[#E5E7EB] shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A] focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10'/>
                            <Button className='group h-auto rounded-2xl py-4.5 px-8 flex gap-3 bg-linear-to-r  from-[#009966] to-[#00BC7D] hover:from-emerald-500 hover:to-teal-500 text-white shadow-[0px_4px_6px_-4px_#00BC7D4D,0px_10px_15px_-3px_#00BC7D4D] hover:shadow-emerald-500/40 hover:scale-[1.02] transition-all duration-300'>
                                <span>Subscribe</span>
                                <div className='group-hover:translate-x-1 transition-all duration-300'><FaArrowRightLong /></div>
                            </Button>
                        </div>
                        <p className='text-[#99A1AF] font-medium text-[12px] leading-4 mt-3'>✨ Unsubscribe anytime. No spam, ever.</p>
                    </div>
            </div> 
            <div className='col-span-5 lg:col-span-2 md:border-l border-[#D0FAE5] md:pl-8'>
                <div className='relative bg-linear-to-br from-[#101828] to-[#1E2939] rounded-3xl p-8 overflow-hidden'>
                    <div className=' absolute top-0 right-0 bg-[#00BC7D33] blur-2xl w-32 h-32 rounded-full'></div>
                    <div className='absolute bottom-0 left-0 w-24 h-24 rounded-full bg-[#00BBA733] blur-2xl'></div>
                    <div className='relative'>
                        <div className='inline-block px-3 py-1.5 rounded-full border border-[#00BC7D4D] bg-[#00BC7D33] text-[#00D492] font-semibold text-[12px] leading-4 mb-5'>
                            📱 MOBILE APP
                        </div>
                        <h3 className='text-[#FFFFFF] font-bold text-[24px] leading-7.5 mb-5'>Shop Faster on Our App</h3>
                        <p className='text-[#99A1AF] font-medium text-[14px] leading-5.75 mb-5'>Get app-exclusive deals & 15% off your first order.</p>
                        <div className='flex flex-col  gap-3 pt-2 mb-5'>
                            <a href="#" className='flex items-center  gap-3 px-4 py-3 rounded-xl bg-[#FFFFFF1A] border border-[#FFFFFF1A] backdrop-blur-sm hover:bg-[#3B4451] hover:scale-[1.02] transition-all duration-100'>
                                
                                    <FaApple size={25} color='white' />
                                
                                <div>
                                    <div className='font-medium text-[10px] leading-3.75 text-[#99A1AF]'>Download on</div>
                                    <div className='font-semibold text-[14px] leading-5 text-white'>App Store</div>
                                </div>
                            </a>
                            <a href="#" className='flex items-center  gap-3 px-4 py-3 rounded-xl bg-[#FFFFFF1A] border border-[#FFFFFF1A] backdrop-blur-sm hover:bg-[#3B4451] hover:scale-[1.02] transition-all duration-100'>
                                
                                    <FaGooglePlay  size={25} color='white' />
                                
                                <div>
                                    <div className='font-medium text-[10px] leading-3.75 text-[#99A1AF]'>Get it on</div>
                                    <div className='font-semibold text-[14px] leading-5 text-white'>Google Play</div>
                                </div>
                            </a>
                        </div> 
                        <div className='flex pt-2 gap-2 font-medium text-[14px] leading-5'>
                            <span className='text-[#FDC700]'>★★★★★</span>
                            <span className='text-[#99A1AF]'>4.9 • 100K+ downloads</span>
                        </div> 
                    </div>
                </div>

            </div>
        </div>

    </div>
  )
}
