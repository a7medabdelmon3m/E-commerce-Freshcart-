
import React from "react";
import { productCategory, productType } from "@/api/types";
import { getAllCategories, getAllProducts } from "@/api/services/route.services";
import Link from "next/link";
import CategoryCard from "../homeCategoryCard/HomeCategoryCard";
import HomeCategoryCard from "../homeCategoryCard/HomeCategoryCard";

export default async function CategoryList() {
  const allCategories: productCategory[] | undefined = await getAllCategories();

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {allCategories?.map((cat) => (
        <Link key={cat._id} href={`/categories/${cat._id}`}>
          <HomeCategoryCard categoryData={cat} />
        </Link>
      ))}
    </div>
  );
}
