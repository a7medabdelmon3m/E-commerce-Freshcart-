import Link from "next/link";
import React from "react";
import { FaTags } from "react-icons/fa";
import BrandCard from "./BrandCard";
import { getAllBrands } from "@/api/services/route.services";
import PageHeader from "../_component/PageHeader";

export default async function page() {
    const brandsList =  await getAllBrands()
  return (
    <section className="min-h-300 pb-10 space-y-10">
     
      <PageHeader title="Top Brands" desc="Shop from your favorite brands" icon={<FaTags />} grediantColors="from-[#7F22FE]  via-[#8E51FF] to-[#C27AFF]"/>
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-5 ">
            {
                brandsList?.map(brand => <BrandCard key={brand._id} brand={brand}/> )
            }
            
        </div>
        
      </div>
    </section>
  );
}
