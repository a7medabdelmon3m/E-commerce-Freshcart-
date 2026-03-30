"use client";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { slideType } from "@/api/types";
import { Button } from "@/components/ui/button";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// import Image from 'next/image';

export default function Slider({
  listOfSlides,
  spaceBetweenVal = 50,
  slidesPerView = 3,
}: {
  listOfSlides: slideType[];
  spaceBetweenVal?: number;
  slidesPerView?: number;
}) {
  return (
    <div className="relative">
      <Swiper
        // install Swiper modules
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
        //   scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
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
              className="relative h-100 "
            >
              <div className="py-20 p-4 absolute inset-0 z-0 bg-linear-to-r from-[#00C950E5] to-[#05DF7280]">
                <div className="container py-8.5 pr-32 pl-21.5 flex flex-col gap-4 text-white">
                  <h2 className="font-bold text-[30px] leading-9 max-w-[384px]">
                    {slide.title}
                  </h2>
                  <p className="font-medium">{slide.text}</p>
                  <div className="pt-px flex gap-2 opacity-[97.83]">
                    <a
                      className="bg-white rounded-lg px-6 py-2  border-2 border-[#FFFFFF80] font-semibold text-[#00C950] hover:scale-106 transition-all"
                      href="#"
                    >
                      {slide.whiteBtn}
                    </a>
                    <a
                      className="rounded-lg px-6 py-2  border-2 border-[#FFFFFF80] font-semibold hover:scale-106 transition-all "
                      href="#"
                    >
                      {slide.transparentBtn}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Button className="custom-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 max-h-auto h-12 w-12 bg-[#FFFFFFE5] text-[#00C950] flex items-center justify-center rounded-full shadow-[0px_4px_6px_-4px_#0000001A,0px_10px_15px_-3px_#0000001A] hover:text-green-600 hover:bg-white hover:scale-110 transition-all duration-300"><IoIosArrowBack /></Button>
      <Button className="custom-next absolute right-4 top-1/2 -translate-y-1/2 z-10 max-h-auto h-12 w-12 bg-[#FFFFFFE5] text-[#00C950] flex items-center justify-center rounded-full shadow-[0px_4px_6px_-4px_#0000001A,0px_10px_15px_-3px_#0000001A] hover:text-green-600 hover:bg-white hover:scale-110 transition-all duration-300"><IoIosArrowForward /></Button>
    </div>
  );
}
