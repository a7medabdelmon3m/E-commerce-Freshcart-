import React, { Suspense } from "react";
import ProductCard from "./_component/productCard/ProductCard";
import { productType, slideType, wishListType } from "@/api/types";
import { getAllProducts, getUserWishlist } from "@/api/services/route.services";
import SectionHeader from "./_component/sectionHeader/SectionHeader";
import WebFeatures from "./_component/webFeatures/WebFeatures";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import Slider from "./_component/slider/Slider";
import slide from "@/assets/image/19b048dcec278f9d9c89514b670e0d9f8909f6dc.png";
import CategoriesSkeleton from "./_component/category.UI/CategoryListSkeleton";
import CategoryList from "./_component/category.UI/categoryList/CategoryList";
import AppForm from "./_component/appForm/AppForm";
import HomeCard from "./_component/HomeCard";

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

export default async function Home() {
  const allProducts: productType[] | undefined = await getAllProducts();
  const wishlist = await getUserWishlist()
    console.log('wishlist : ' , wishlist);
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
          <HomeCard/>
        </div>
      </section>
      <div className="container mx-auto px-4 py-10">
        <div className="my-8">
          <SectionHeader coloredText="Featured " unColoredText="Products" />
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-6">
          {allProducts?.map((product) => (
            <ProductCard key={product.id} product={product} wishlist={wishlist as wishListType[]} />
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
