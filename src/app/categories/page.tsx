import Image from "next/image";
import React from "react";
import { IoLayers } from "react-icons/io5";
import me from "../../assets/image/01207179348.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from "next/link";
import CategoryCard from "../_component/CategoryCard";
import { getAllCategories } from "@/api/services/route.services";

export default async function page() {
     const allCategories= await getAllCategories();
  return (
    <section className="bg-[#F9FAFB80] min-h-300 gap-10 pb-51">
      <div className=" bg-linear-to-br from-main-color  via-[#22C55E] to-[#4ADE80] ">
        <div className="container mx-auto px-4 py-8 space-y-6 text-white">
          <nav className="flex gap-2 text-sm leading-5 font-medium">
            <Link
              href={"/"}
              className="text-[#FFFFFFB2]  hover:text-white transition-colors duration-100"
            >
              Home{" "}
            </Link>
            <span>/</span>
            <span>All Products</span>
          </nav>
          <div className="flex gap-5">
            <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-[#FFFFFF33] backdrop-blur-sm shadow-[0px_8px_10px_-6px_#0000001A,0px_20px_25px_-5px_#0000001A] text-white text-3xl">
              <IoLayers />
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-3xl leading-10 font-bold">All Products</h1>
              <p className="text-[#FFFFFFCC] font-medium">
                Explore our complete product collection
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 space-y-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-4 md:gap-6 ">
            {allCategories?.map(cat => <CategoryCard key={cat._id} category={cat}/>)}
         
        </div>
        
      </div>
    </section>
  );
}
