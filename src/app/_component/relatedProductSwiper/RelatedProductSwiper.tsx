
"use client";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { productType} from "@/api/types";
// import { Button } from "@/components/ui/button";
import ProductCard from "@/app/_component/productCard/ProductCard";
// import me from '../../../assets/image/01207179348.png'
// const product:productType = {
//   title:'snnjdnjnj',
//   id:'65966946' ,
  
//     image:['https://img.freepik.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_hybrid&w=740&q=80' ,'https://img.freepik.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_hybrid&w=740&q=80'] ,
//     imageCover:"https://img.freepik.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_hybrid&w=740&q=80" ,
//     price:100 ,
//     quantity:100 ,
//     ratingsAverage:100 ,
//     description:'string' ,
//     priceAfterDiscount:85 ,
//     ratingsQuantity:100 ,
//      category:{
//        _id:'string',
//   name:'string',
//   slug:'string', 
//   image:'string',
//      },
//      brand:{
//        _id:'string',
//   name:'string',
//   slug:'string', 
//   image:'string',
//      } ,
// }

// import Image from 'next/image';

export default function RelatedProductSwiper({listOfRelatedProducts}:{listOfRelatedProducts:productType[]}) {
    // console.log('da el list of products ' , listOfRelatedProducts);
    
  return (
    <div className="">
      <Swiper
    
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={16}
        slidesPerView={1}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        breakpoints={{
          480: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 16,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 16,
          },
        }}
       
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
        loop={true}
      >
        {listOfRelatedProducts.map((product, idx) => (
          <SwiperSlide key={idx}>
             
             
                <ProductCard product={product} key={idx}/>
             
          </SwiperSlide>
        ))}
      </Swiper>
      
    </div>
  );
}

