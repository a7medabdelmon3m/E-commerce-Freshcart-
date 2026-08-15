import Link from "next/link";
import React, { Suspense } from "react";
import { FaTags } from "react-icons/fa";
import BrandCard from "./BrandCard";
import { getAllBrands } from "@/api/services/route.services";
import PageHeader from "../_component/PageHeader";
import PageLoading from "../_component/pageLoad";

export default async function page() {
  
  return (
    <section className="min-h-300 pb-10 space-y-10">
      <PageHeader
        title="Top Brands"
        desc="Shop from your favorite brands"
        icon={<FaTags />}
        grediantColors="from-[#7F22FE]  via-[#8E51FF] to-[#C27AFF]"
        customName={["brands"]}
      />
      <div className="container px-4 mx-auto">
        <Suspense fallback={<PageLoading sectionName="Brands" spinnerColor="text-[#7F22FE]"/>}>
          <BrandList/>
        </Suspense>
      </div>
    </section>
  );
}
 async function BrandList() {
  const brandsList = await getAllBrands();
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-5 ">
      {brandsList?.map((brand) => (
        <BrandCard key={brand._id} brand={brand} />
      ))}
    </div>
  );
}
