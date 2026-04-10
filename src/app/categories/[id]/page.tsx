import { productCategory, subCategoryType } from "@/api/types";
import PageHeader from "@/app/_component/PageHeader";
import React from "react";
import me from "../../../assets/image/01207179348.png";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";
import SubCategoryCard from "../SubCategoryCard";
import { getSpecificCategory, getSubCategory } from "@/api/services/route.services";

export default async function page({ params }: { params: Promise<{ id: string }> }) {
    const id = (await params).id;
    // console.log('da el param ya 3am :' , id);
    const allSubCategories =await getSubCategory(id)
    const category =await getSpecificCategory(id)
    
  // const x: productCategory = {
  //   _id: "",
  //   image: me.src,
  //   name: "",
  //   slug: "",
  // };
  return (
    <div>
      <section>
        <PageHeader
          customName={category?.name}
          isBrand={false}
          brand={category}
          title={category?.name || 'product'}
          desc="Choose a subcategory to browse products"
          
        />
        <div className="container px-4 py-10 mx-auto">
          <Link
            href="/categories"
            className="flex gap-2 items-center text-gray-600 hover:text-main-color transition-colors duration-100 mb-6"
          >
            <FaArrowLeftLong />
            Back to Categories
          </Link>
          <h2 className="text-lg font-bold text-gray-900 mb-6 ">
            {allSubCategories?.length} Subcategories in {category?.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {
              (allSubCategories as subCategoryType[]).map(sub => <SubCategoryCard subCategory={sub} key={sub._id} /> )
            }
            
          </div>
        </div>
      </section>
    </div>
  );
}
