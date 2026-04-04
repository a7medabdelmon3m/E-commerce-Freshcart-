import {
  getAllProducts,
  getProductDetails,
} from "@/api/services/route.services";
import Link from "next/link";
import React from "react";
import {
  FaBox,
  FaCheck,
  FaHome,
  FaMinus,
  FaPlus,
  FaRegHeart,
  FaRegStar,
  FaShareAlt,
  FaShoppingCart,
  FaStar,
  FaStarHalfAlt,
  FaTruck,
} from "react-icons/fa";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ProductSwiper from "@/app/_component/productSwiper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  FaArrowRotateLeft,
  FaShieldHalved,
  FaTruckFast,
} from "react-icons/fa6";
import { MdElectricBolt } from "react-icons/md";
import SectionHeader from "@/app/_component/sectionHeader/SectionHeader";
import RelatedProductSwiper from "@/app/_component/relatedProductSwiper/RelatedProductSwiper";
import QuantitySelector from "@/app/_component/quantitySelector/QuantitySelector";
import ProductDetailsCard from "./ProductDetailsCard";

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  // console.log('my id : ' , id);
  const productDetails = await getProductDetails(id);
  const allProducts = await getAllProducts();
  
  const relatedCategories = allProducts?.filter(
    (pro) => 
      pro.category.name === productDetails?.category.name && 
      pro.id !== productDetails.id 
  ) || [];
  // console.log( 'da el all products: ',relatedCategories);

  // console.log("de el produact details ", productDetails);
  function calcRatingForStars(numOfStars: number): number {
    const reviews = productDetails?.reviews || [] ;
     const ratingQuantity = productDetails?.ratingsQuantity || 0
    if(productDetails?.ratingsQuantity === 0) return 0
    const counter = reviews.reduce((acc, p) => {
      return p.rating === numOfStars ? acc + 1 : acc;
    }, 0);

    const percentage = (counter/ratingQuantity)*100
    return Math.round(percentage) ; 
  }

  return (
    <>
      <section className="py-4">
        <div className="container mx-auto px-4">
          <ul className="flex gap-1">
            <li className="flex items-center text-text-color text-[14px] font-medium leading-5">
              <Link className="flex items-center gap-1.5 " href={"/"}>
                <FaHome />
                <span>Home</span>
              </Link>
              <span className="px-2">
                <IoIosArrowForward />
              </span>
            </li>
            <li className="flex items-center text-text-color text-[14px] font-medium leading-5">
              <Link className="flex items-center gap-1.5 " href={"/"}>
                <span>{productDetails?.category.name}</span>
              </Link>
              <span className="px-2">
                <IoIosArrowForward />
              </span>
            </li>
            <li className="flex items-center text-text-color text-[14px] font-medium leading-5">
              <Link className="flex items-center gap-1.5 " href={"/"}>
                <span>{productDetails?.subcategory[0]?.name}</span>
              </Link>
              <span className="px-2">
                <IoIosArrowForward />
              </span>
            </li>
            <li className="flex items-center text-[#101828] text-[14px] font-medium leading-5">
              <Link className="flex items-center gap-1.5 " href={"/"}>
                {productDetails?.title}
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <section className="py-4 mb-14">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/4">
              <div className="sticky top-0 rounded-xl p-4 shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A]">
                <ProductSwiper listOfImages={productDetails?.images} />
              </div>
            </div>
            <div className="lg:w-3/4">
              <ProductDetailsCard productDetails={productDetails!}/>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-18">
        <div className="container mx-auto px-4">
          <Tabs
            defaultValue="overview"
            className=" overflow-hidden rounded-lg pb-6 flex gap-0 bg-white shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A]"
          >
            <TabsList className="flex justify-start flex-nowrap p-0! w-full border-b border-[#E5E7EB] rounded-none h-auto! overflow-x-auto overflow-y-hidden">
              <TabsTrigger
                className="px-6! py-4! w-auto! border-0 flex-none gap-2 whitespace-nowrap shrink-0 text-[#4A5565] font-medium text-[16px] leading-5 rounded-none!  data-[state=active]:border-b-2 data-[state=active]:border-main-color data-[state=active]:bg-[#F0FDF480] data-[state=active]:text-main-color "
                value="overview"
              >
                <FaStar /> Overview
              </TabsTrigger>

              <TabsTrigger
                className="px-6! py-4! w-auto! border-0 flex-none gap-2 whitespace-nowrap shrink-0 text-[#4A5565] font-medium text-[16px] leading-5 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-main-color data-[state=active]:bg-[#F0FDF480] data-[state=active]:text-main-color "
                value="Reviews (18)"
              >
                <FaBox /> Reviews (18)
              </TabsTrigger>

              <TabsTrigger
                className="px-6! py-4! w-auto! border-0 flex-none gap-2 whitespace-nowrap shrink-0 text-[#4A5565] font-medium text-[16px] leading-5 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-main-color data-[state=active]:bg-[#F0FDF480] data-[state=active]:text-main-color "
                value="Shipping & Returns"
              >
                <FaTruck /> Shipping & Returns
              </TabsTrigger>
            </TabsList>
            <TabsContent className="p-6" value="overview">
              <Card className="rounded-none flex gap-6 border-none p-0 shadow-none">
                <CardHeader className="flex gap-3 flex-col p-0">
                  <CardTitle className="text-[#101828] font-semibold text-[18px] leading-7">
                    <h3>About this Product</h3>
                  </CardTitle>
                  <CardDescription className="text-[#4A5565] font-medium text-[16px] leading-6.5">
                    {productDetails?.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0 grid md:grid-cols-2 gap-6">
                  <div className="flex gap-3 flex-col rounded-lg p-4  bg-[#F9FAFB]">
                    <h4 className="font-medium text-[#101828] ">
                      Product Information
                    </h4>
                    <ul className="flex flex-col gap-2 text-text-color text-sm leading-5 font-medium">
                      <li className="flex justify-between items-center">
                        <span>Category</span>
                        <span className="text-[#101828]">
                          {productDetails?.category.name}
                        </span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>Subcategory</span>
                        <span className="text-[#101828]">
                          {productDetails?.subcategory[0].name}
                        </span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>Brand</span>
                        <span className="text-[#101828]">
                          {productDetails?.brand.name}
                        </span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>Items Sold</span>
                        <span className="text-[#101828]">
                          {productDetails?.sold}+ sold
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex gap-3 flex-col rounded-lg p-4  bg-[#F9FAFB]">
                    <h4 className="font-medium text-[#101828] ">
                      Key Features
                    </h4>
                    <ul className="flex flex-col gap-2 text-text-color text-sm leading-5 font-medium">
                      <li className="flex gap-2 items-center">
                        <FaCheck className="text-main-color" />
                        Premium Quality Product
                      </li>
                      <li className="flex gap-2 items-center">
                        <FaCheck className="text-main-color" />
                        100% Authentic Guarantee
                      </li>
                      <li className="flex gap-2 items-center">
                        <FaCheck className="text-main-color" />
                        Fast & Secure Packaging
                      </li>
                      <li className="flex gap-2 items-center">
                        <FaCheck className="text-main-color" />
                        Quality Tested
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent className="p-6" value="Reviews (18)">
              <Card className="rounded-none space-y-6 border-none p-0 shadow-none">
                <CardContent className="p-0 flex gap-8 flex-col md:flex-row items-start md:items-center">
                  <div className="text-center">
                    <div className="text-5xl font-bold mb-2 text-gray-900">
                      {productDetails?.ratingsAverage}
                    </div>
                    <div className="text-yellow-400 flex justify-center">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaRegStar />
                      <FaRegStar />
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                      Based on {productDetails?.ratingsQuantity} reviews
                    </p>
                  </div>
                  <div className="flex gap-2 flex-1 w-full flex-col">
                    {[1, 2, 3, 4, 5].map((_, idx) => (
                      <div key={idx} className="flex gap-3 items-center ">
                        <span className="text-sm text-gray-600 w-8">
                          {idx + 1} star
                        </span>
                        <div className="flex flex-1 w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div style={{width:`${calcRatingForStars(idx+1)}%`}} className={`h-full bg-yellow-400 rounded-full transition-all duration-300`}></div>
                        </div>
                        <span className="text-sm text-gray-500 w-10">{calcRatingForStars(idx+1)}%</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <div className="border-t border-gray-200 pt-6">
                  <div className="text-center py-8">
                    <FaStar className="text-4xl text-gray-300 mb-3 mx-auto" />
                    <p className="text-gray-500 font-medium">
                      Customer reviews will be displayed here.
                    </p>
                    <Button className="mt-4 text-main-color hover:text-main-color-hover font-medium">
                      Write a Review
                    </Button>
                  </div>
                </div>
              </Card>
            </TabsContent>
            <TabsContent className="p-6" value="Shipping & Returns">
              <Card className="rounded-none border-none p-0 shadow-none">
                <CardContent className="p-0 grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div className="bg-linear-to-br from-[#F0FDF4] to-[#DDFCE7] rounded-lg p-6 ">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-main-color text-white">
                        <FaTruck className="text-[22px]" />
                      </div>
                      <h4 className="font-semibold text-gray-900">
                        Shipping Information
                      </h4>
                    </div>
                    <ul className="space-y-3">
                      {[1, 2, 3, 4].map((_, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-gray-700 "
                        >
                          <FaCheck className="text-main-color mt-0.5" />
                          <span className="text-sm font-medium leading-5 text-[#364153]">
                            Free shipping on orders over $50
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-linear-to-br from-[#F0FDF4] to-[#DDFCE7] rounded-lg p-6 ">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-main-color text-white">
                        <FaArrowRotateLeft className="text-[22px]" />
                      </div>
                      <h4 className="font-semibold text-gray-900">
                        Shipping Information
                      </h4>
                    </div>
                    <ul className="space-y-3">
                      {[1, 2, 3, 4].map((_, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-gray-700 "
                        >
                          <FaCheck className="text-main-color mt-0.5" />
                          <span className="text-sm font-medium leading-5 text-[#364153]">
                            Free shipping on orders over $50
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <div className="bg-gray-50 rounded-lg p-6 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center bg-gray-200 text-gray-600 text-2xl">
                    <FaShieldHalved />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 ">
                      Buyer Protection Guarantee
                    </h4>
                    <p className="text-sm text-gray-600 font-medium leading-5">
                      Get a full refund if your order doesn&apos;t arrive or
                      isn&apos;t as described. We ensure your shopping
                      experience is safe and secure.
                    </p>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      <section className="mb-10">
        <div className="container mx-auto px-4">
          <div className="flex gap-6 flex-col">
            <div className="flex justify-between items-center">
              <SectionHeader coloredText="Like" unColoredText="You May Also" />
              <div className="flex gap-2">
                <Button className="custom-prev w-10 h-10 flex items-center justify-center bg-[#F3F4F6] text-[#4A5565] rounded-full">
                  <IoIosArrowBack />
                </Button>
                <Button className="custom-next w-10 h-10 flex items-center justify-center bg-[#F3F4F6] text-[#4A5565] rounded-full">
                  <IoIosArrowForward />
                </Button>
              </div>
            </div>
            {
              relatedCategories && relatedCategories.length > 0 &&(
                  <RelatedProductSwiper listOfRelatedProducts={relatedCategories} />
              )
            }
            
          </div>
        </div>
      </section>
    </>
  );
}
