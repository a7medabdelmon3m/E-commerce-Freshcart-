"use client";
import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { slideType } from "@/api/types";
import { Button } from "@/components/ui/button";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Slider({
  listOfSlides,
  spaceBetweenVal = 50,
  slidesPerView = 1,
}: {
  listOfSlides: slideType[];
  spaceBetweenVal?: number;
  slidesPerView?: number;
}) {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={spaceBetweenVal}
        slidesPerView={slidesPerView}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{
          clickable: true,
          renderBullet(index, className) {
            return `<span class="${className} w-3! h-3! rounded-full! bg-[#FFFFFF80]! relative! z-1! opacity-70! transition-all! duration-300! ease-in-out! "></span>`;
          },
          bulletActiveClass: "bg-white! w-8! rounded-[1000px] opacity-100!",
        }}
        loop={true}
      >
        {listOfSlides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              className="relative h-100"
            >
              <div className="py-20 p-4 absolute inset-0 z-0 bg-linear-to-r from-[#00C950E5] to-[#05DF7280]">
                <div className="container mx-auto px-4 lg:px-14 text-white space-y-4 content-center h-full">
                  
                  <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-white text-3xl font-bold mb-4 max-w-96"
                  >
                    {slide.title}
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="font-medium"
                  >
                    {slide.text}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="pt-px flex gap-2"
                  >
                    <a
                      className="bg-white rounded-lg px-6 py-2 border-2 border-[#FFFFFF80] font-semibold text-[#00C950] hover:scale-106 transition-all"
                      href="#"
                    >
                      {slide.whiteBtn}
                    </a>
                    <a
                      className="rounded-lg px-6 py-2 border-2 border-[#FFFFFF80] font-semibold hover:scale-106 transition-all"
                      href="#"
                    >
                      {slide.transparentBtn}
                    </a>
                  </motion.div>

                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Button className="custom-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 max-h-auto h-12 w-12 bg-[#FFFFFFE5] text-[#00C950] hidden md:flex items-center justify-center rounded-full shadow-[0px_4px_6px_-4px_#0000001A,0px_10px_15px_-3px_#0000001A] hover:text-green-600 hover:bg-white hover:scale-110 transition-all duration-300">
        <IoIosArrowBack />
      </Button>
      <Button className="custom-next absolute right-4 top-1/2 -translate-y-1/2 z-10 max-h-auto h-12 w-12 bg-[#FFFFFFE5] text-[#00C950] hidden md:flex items-center justify-center rounded-full shadow-[0px_4px_6px_-4px_#0000001A,0px_10px_15px_-3px_#0000001A] hover:text-green-600 hover:bg-white hover:scale-110 transition-all duration-300">
        <IoIosArrowForward />
      </Button>
    </div>
  );
}