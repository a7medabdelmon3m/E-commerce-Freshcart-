import Image from "next/image";
import React, { Suspense } from "react";
import { IoLayers } from "react-icons/io5";
import me from "../../assets/image/01207179348.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from "next/link";
import CategoryCard from "../_component/CategoryCard";
import { getAllCategories } from "@/api/services/route.services";
import PageHeader from "../_component/PageHeader";
import PageLoading from "../_component/pageLoad";

export default async function page() {
  return (
    <section className="bg-[#F9FAFB80] min-h-300 gap-10 pb-51">
      <PageHeader
        title="All Categories"
        desc="Explore our complete product collection"
        icon={<IoLayers />}
        customName={["categories"]}
      />
      <div className="container mx-auto px-4 py-8 space-y-6">
        <Suspense fallback={<PageLoading sectionName="Categories" />}>
          <CategoryList />
        </Suspense>
      </div>
    </section>
  );
}

async function CategoryList() {
  const allCategories = await getAllCategories();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-4 md:gap-6 ">
      {allCategories?.map((cat) => (
        <CategoryCard key={cat._id} category={cat} />
      ))}
    </div>
  );
}
