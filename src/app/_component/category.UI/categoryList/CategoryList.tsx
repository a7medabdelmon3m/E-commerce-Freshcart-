
import React from "react";
import { productCategory, productType } from "@/api/types";
import { getAllCategories, getAllProducts } from "@/api/services/route.services";
import Link from "next/link";
import CategoryCard from "../categoryCard/CategoryCard";

export default async function CategoryList() {
  const allCategories: productCategory[] | undefined = await getAllCategories();

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {allCategories?.map((cat) => (
        <Link key={cat._id} href={"/"}>
          <CategoryCard categoryData={cat} />
        </Link>
      ))}
    </div>
  );
}
