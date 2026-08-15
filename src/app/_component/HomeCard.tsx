'use client'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { motion } from "framer-motion";
import Link from 'next/link';


export default function HomeCard() {
  return (
    <div className="grid sm:grid-cols-2 gap-6">
            <motion.div initial={{opacity:0 , x:-30}} whileInView={{opacity:1, x:0}} viewport={{ once: false }}  transition={{ duration: 0.7,  ease: [0.16, 1, 0.3, 1] }} className=" relative text-white rounded-2xl p-8 overflow-hidden bg-linear-to-br from-[#00BC7D] to-[#007A55]">
              <div className="absolute w-40 h-40 rounded-full bg-[#FFFFFF1A] top-0 right-0 -translate-y-1/2 translate-x-1/2 "></div>
              <div className="absolute w-32 h-32 rounded-full bg-[#FFFFFF1A] bottom-0 left-0 translate-y-1/2 -translate-x-1/2 "></div>
              <div>
                <div className="relative z-10">
                  <div className="px-2 py-1 bg-[#FFFFFF33] gap-2 rounded-full text-white text-[14px] font-medium leading-5 w-fit mb-4">
                    <span>🔥</span>
                    <span>Deal of the Day</span>
                  </div>
                  <h3 className="text-[30px] leading-9 font-bold mb-2">
                    Fresh Organic Fruits
                  </h3>
                  <p className="mb-4 font-medium text-[#FFFFFFCC]">
                    Get up to 40% off on selected organic fruits
                  </p>
                  <div className="flex gap-4 items-center mb-6">
                    <div className=" text-3xl leading-9 font-bold">40% OFF</div>
                    <div className="text-sm font-medium  leading-5">
                      <span className="text-[#FFFFFFCC]"> Use code: </span>
                      <span className="font-bold ">ORGANIC40</span>
                    </div>
                  </div>
                  <Link
                    className="py-3 px-6 rounded-full gap-2 flex items-center font-semibold text-[#009966] bg-white w-fit hover:bg-[#F3F4F6] transition-colors"
                    href="/"
                  >
                    Shop Now <FaArrowRightLong />
                  </Link>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{opacity:0 , x:30}} whileInView={{opacity:1, x:0}} viewport={{ once: false }}  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className=" relative text-white rounded-2xl p-8 overflow-hidden bg-linear-to-br from-[#FF8904] to-[#FF2056]">
              <div className="absolute w-40 h-40 rounded-full bg-[#FFFFFF1A] top-0 right-0 -translate-y-1/2 translate-x-1/2 "></div>
              <div className="absolute w-32 h-32 rounded-full bg-[#FFFFFF1A] bottom-0 left-0 translate-y-1/2 -translate-x-1/2 "></div>
              <div>
                <div className="relative z-10">
                  <div className="px-2 py-1 bg-[#FFFFFF33] gap-2 rounded-full text-white text-[14px] font-medium leading-5 w-fit mb-4">
                    <span>✨</span>
                    <span>New Arrivals</span>
                  </div>
                  <h3 className="text-[30px] leading-9 font-bold mb-2">
                    Exotic Vegetables
                  </h3>
                  <p className="mb-4 font-medium text-[#FFFFFFCC]">
                    Discover our latest collection of premium vegetables
                  </p>
                  <div className="flex gap-4 items-center mb-6">
                    <div className=" text-3xl leading-9 font-bold">25% OFF</div>
                    <div className="text-sm font-medium  leading-5">
                      <span className="text-[#FFFFFFCC]"> Use code: </span>
                      <span className="font-bold ">Use code: FRESH25</span>
                    </div>
                  </div>
                  <Link
                    className="py-3 px-6 rounded-full gap-2 flex items-center font-semibold text-[#FF6900] bg-white w-fit hover:bg-[#F3F4F6] transition-colors "
                    href="/"
                  >
                    Explore Now <FaArrowRightLong />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
  )
}
