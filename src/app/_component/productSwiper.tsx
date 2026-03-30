"use client"
import Image from "next/image";
import React, { useState } from "react";
import me from "../../assets/image/01207179348.png";
import { set } from "zod";
import { id } from "zod/locales";

export default function ProductSwiper({listOfImages}:{listOfImages:string[]| undefined}) {
  // const slides = [me, me,me , me , me ,me, me,me , me , me ];
  const [activeIdx, setactiveIdx] = useState(0)
  const [activeSRC, setactiveSRC] = useState(listOfImages?.[0])
  return (
    <div>
      <div className=" overflow-hidden">
        <div style={{ transform: `translateX(-${activeIdx * 100}%)` }} className={`flex transition-all duration-300`} > 

           {
              listOfImages?.map((src ,idx) =>
                <div key={idx} className="relative h-117.5 min-w-full">
                    <Image  className="max-h-280 object-contain" fill  src={src} alt={src}></Image>
                </div>
              )
            }
        </div>
        
        
      </div>
      <div className="w-full overflow-hidden pt-1.25 ">
        <div style={{ transform: `translateX(-${activeIdx *50}px)` }} className="flex gap-0.5 flex-nowrap transition-all duration-300 ">
            {
              listOfImages?.map((src ,idx) =>
                
              <div 
              onClick={() => {
                setactiveIdx(idx) 
                setactiveSRC(src)
                }} key={idx} className={`relative h-33.5 min-w-25  border-4 ${idx === activeIdx ?'border-text-color':'border-transparent'} hover:border-text-color`}>
                  <Image objectFit="cover" fill src={src} alt={src}></Image>
            </div>
              )
            }
            
        </div>
      </div>
    </div>
  );
}
