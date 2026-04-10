import {
  getFillteredProducts,
  getSpecificBrand,
  getSpecificCategory,
  getSpecificSubcategory,
} from "@/api/services/route.services";
import React from "react";
import { FaBoxOpen, FaFolderOpen } from "react-icons/fa";
import { IoLayers } from "react-icons/io5";
import ProductCard from "../_component/productCard/ProductCard";
import PageHeader from "../_component/PageHeader";
import Filter from "../_component/Filter";
import EmptyMsg from "../_component/EmptyMsg";

export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ brand?: string; category?: string ; subcategory?: string }>;
}) {
  const { brand, category ,subcategory } = (await searchParams) || null;
  // const params = await  searchParams || null ;
  // console.log('searchParams : ' ,params);

  const myBrand = brand ? await getSpecificBrand(brand) : null;
  const myCategory = category ? await getSpecificCategory(category) : null;
  const mySubcategory = subcategory ? await getSpecificSubcategory(subcategory) : null;

  const name = myBrand ? myBrand.name : myCategory ? myCategory.name :  mySubcategory ? mySubcategory.name : null;

  // await getFillteredProducts({brand:brand})

  const allproducts = await getFillteredProducts({ brand: brand, category:category ,subcategory:subcategory });

  return (
    <section className="bg-[#F9FAFB80] min-h-screen">
      <PageHeader
        desc={
          myBrand
            ? `Shop ${myBrand.name} products`
            : myCategory
              ? `Browse products in ${myCategory.name}`
              : mySubcategory
              ? `Browse products in ${mySubcategory.name}`
              : " Explore our complete product collection"
        }
        title={
         name ?name : "All Products"
        }
        brand={myBrand ? myBrand : myCategory ? myCategory : undefined}
        icon={myBrand || myCategory ? undefined : mySubcategory ? <FaFolderOpen/> : <FaBoxOpen />}
        customName={
          name ? name : undefined
        }
        isBrand={myBrand ? true : false}
      />
      <div className="container mx-auto px-4 py-8 space-y-6">
        {name && (
          <Filter
            icon={myBrand ? undefined : <IoLayers />}
            color={
              myBrand
                ? undefined
                : "bg-green-100 text-green-700 hover:bg-green-200"
            }
            filterItems={[`${name}`]}
          />
        )}

        <div className="mb-6 text-sm text-text-color font-medium leading-5">
          Showing {allproducts?.length} products
        </div>
        {(allproducts?.length as number) > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
              {allproducts?.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        ) : (
          <div className="min-h-[60vh] px-x flex items-center justify-center">
            <div className="max-w-md text-center">
              <EmptyMsg
                title="No Products Found"
                desc="No products match your current filters."
                icon={<FaBoxOpen />}
                buttonName={<>View All Products</>}
                iconStylings="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-5 text-3xl text-gray-400"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
