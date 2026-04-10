import React, { lazy, Suspense } from "react";
import ProductCard from "./_component/productCard/ProductCard";
import { productType, slideType } from "@/api/types";
import { getAllProducts } from "@/api/services/route.services";
import SectionHeader from "./_component/sectionHeader/SectionHeader";
import WebFeatures from "./_component/webFeatures/WebFeatures";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import Slider from "./_component/slider/Slider";
import slide from "@/assets/image/19b048dcec278f9d9c89514b670e0d9f8909f6dc.png";
import CategoriesSkeleton from "./_component/category.UI/CategoryListSkeleton";
import CategoryList from "./_component/category.UI/categoryList/CategoryList";
import AppForm from "./_component/appForm/AppForm";

const listOfSlides:slideType[] = [
  {
    image:slide.src,
    title:'Fresh Products Delivered to your Door',
    text:'Get 20% off your first order',
    whiteBtn:'Shop Now',
    transparentBtn:'View Deals'

  },
  {
    image:slide.src,
    title:'Premium Quality Guaranteed',
    text:'Fresh from farm to your table',
    whiteBtn:'Shop Now',
    transparentBtn:'Learn More'
  },
  {
    image:slide.src,
    title:'Fast & Free Delivery',
    text:'Same day delivery available',
    whiteBtn:'Order Now',
    transparentBtn:'Delivery InfoLearn More'
  }
  
]

// const imgs: string[] = [slide.src, slide.src, slide.src];
// const CategoryListAsLazy = dynamic(
//   () => import("./_component/category.UI/categoryList/CategoryList"),
//   {
//     loading: () => <CategoriesSkeleton />,
//   },
// );
const CategoryListAsLazy = lazy(
  () => import(`./_component/category.UI/categoryList/CategoryList`),
);
export default async function Home() {
  const allProducts: productType[] | undefined = await getAllProducts();
  return (
    <>
      <Slider listOfSlides={listOfSlides} slidesPerView={1} spaceBetweenVal={0} />
      <WebFeatures />
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
            <div className="my-8">
              <SectionHeader coloredText="Shop By  " unColoredText="Category" />
            </div>
            <Link
              href={"/categories"}
              className=" self-end sm:self-auto text-[16px] font-medium leading-24 text-main-color"
            >
              View All Categories <FaArrowRightLong className="ml-2 inline" />
            </Link>
          </div>

          <Suspense fallback={<CategoriesSkeleton />}>
            <CategoryList />
          </Suspense>
        </div>
      </section>
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 gap-6">
            <div className=" relative text-white rounded-2xl p-8 overflow-hidden bg-linear-to-br from-[#00BC7D] to-[#007A55]">
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
            </div>
            <div className=" relative text-white rounded-2xl p-8 overflow-hidden bg-linear-to-br from-[#FF8904] to-[#FF2056]">
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
            </div>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 py-10">
        <div className="my-8">
          <SectionHeader coloredText="Featured " unColoredText="Products" />
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-6">
          {allProducts?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <section className="py-16">
          <div className="container mx-auto px-4 py-10 ">
            <AppForm></AppForm>
          </div>
        </section>
          
      </div>
     
    </>
  );
}
