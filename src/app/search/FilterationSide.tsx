"use client";
import { productBrand, productCategory } from "@/api/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
const priceRanges = [
  { id: "p500", label: "Under 500", value: 500 },
  { id: "p1k", label: "Under 1K", value: 1000 },
  { id: "p5k", label: "Under 5K", value: 5000 },
  { id: "p10k", label: "Under 10K", value: 10000 },
];

export type prop = {
  categories?: productCategory[];
  brands?: productBrand[];
};
export default function FilterationSide({ brands, categories }: prop) {
  const searchParams = useSearchParams();
  const router = useRouter();
  // console.log('searchParams' ,searchParams.get('category') );
  // const categoryParam = searchParams.get('category')
  const maxPrice = searchParams.get("maxPrice") || 0;
  const minPrice = searchParams.get("minPrice") || 0;
  function handleFilter(type: string, param: string) {
    const params = new URLSearchParams(searchParams.toString());
    // console.log('params from sidbar' ,params.get('category') );

    const currentValues = params.getAll(type);

    if (currentValues.includes(param)) {
      const newValues = currentValues.filter((v) => v !== param);
      params.delete(type);
      newValues.forEach((v) => params.append(type, v));
    } else {
      params.append(type, param);
    }
    if (params.get("page")) {
      // console.log('hello from sidbar' , params.get('page') );
      params.delete("page");
    }
    // params.set('page', '1');

    router.push(`/search?${params.toString()}`, { scroll: false });
  }
  function handleFilterByPrice(type: "minPrice" | "maxPrice", price: number) {
    const params = new URLSearchParams(searchParams.toString());
    // const currentValues = params.getAll(type)
    if (price === 0 || !price) {
      params.delete(type);
      // console.log('hello from sidbar' , price );
    } else params.set(type, price.toString());
    router.push(`/search?${params.toString()}`, { scroll: false });
  }
  const categoryList = searchParams.getAll("category");
  const brandList = searchParams.getAll("brand");

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 ">
      <div className="space-y-6">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-[#101828]">Categories</h3>
            {categoryList.length >= 1 && (
              <span className="text-xs text-main-color font-medium">
                {categoryList.length} selected
              </span>
            )}
          </div>
          <div className="space-y-2 max-h-52 overflow-y-auto">
            {categories?.map((item) => (
              <Label
                key={item._id}
                htmlFor={item.name}
                className="flex gap-3 items-center cursor-pointer group"
              >
                <Input
                  className="w-4 h-4 rounded-[2.5px] border border-[#767676] bg-white text-green-600 focus:ring-green-500 cursor-pointer "
                  type="checkbox"
                  value={item._id}
                  id={item.name}
                  name="category"
                  onChange={() => handleFilter("category", item._id)}
                  checked={searchParams.getAll("category").includes(item._id)}
                />
                <span className="text-sm text-[#4A5565] font-medium leading-5 group-hover:text-gray-900 transition-all">
                  {item.name}
                </span>
              </Label>
            ))}
          </div>
        </div>
        <hr className="border border-gray-100 h-px" />
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-[#101828]">Price Range</h3>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <Label
                className="text-text-color block font-medium leading-4 text-xs"
                htmlFor="min_price"
              >
                Min (EGP)
              </Label>
              <Input
                onChange={(e) =>
                  handleFilterByPrice("minPrice", Number(e.target.value))
                }
                id="min_price"
                value={minPrice}
                min={0}
                placeholder="0"
                type="number"
                className="h-auto rounded-lg w-full border border-[#E5E7EB] text-sm focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none placeholder:text-sm placeholder:font-medium placeholder:text-[#36415380] px-3 py-2"
              />
            </div>
            <div className="space-y-1">
              <Label
                className="text-text-color block font-medium leading-4 text-xs"
                htmlFor="max_price"
              >
                Max (EGP)
              </Label>
              <Input
                onChange={(e) =>
                  handleFilterByPrice("maxPrice", Number(e.target.value))
                }
                value={Number(maxPrice) > 0 ? maxPrice : ""}
                id="max_price"
                placeholder="No limit"
                type="number"
                className="h-auto rounded-lg w-full border border-[#E5E7EB] text-sm focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none placeholder:text-sm placeholder:font-medium placeholder:text-[#36415380] px-3 py-2"
              />
            </div>
          </div>
          <div className=" flex gap-2 flex-wrap">
            {priceRanges.map((item) => (
              <Button
                key={item.id}
                onClick={() => handleFilterByPrice("maxPrice", item.value)}
                className={`h-auto px-3 py-1.5 rounded-full  text-xs font-medium leading-4  ${Number(maxPrice) === item.value ? "bg-main-color text-white" : "bg-[#F3F4F6] text-[#4A5565] hover:bg-gray-200"} `}
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>
        <hr className="border border-gray-100 h-px" />
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-[#101828]">Brands</h3>
            {brandList.length >= 1 && (
              <span className="text-xs text-main-color font-medium">
                {brandList.length} selected
              </span>
            )}
          </div>
          <div className="space-y-2 max-h-52 overflow-y-auto">
            {brands?.map((item) => (
              <Label
                key={item._id}
                htmlFor={item.name}
                className="flex gap-3 items-center cursor-pointer group"
              >
                <Input
                  className="w-4 h-4 rounded-[2.5px] border border-[#767676] bg-white text-green-600 focus:ring-green-500 cursor-pointer "
                  type="checkbox"
                  value={item._id}
                  id={item.name}
                  name="brand"
                  checked={searchParams.getAll("brand").includes(item._id)}
                  onChange={() => handleFilter("brand", item._id)}
                />
                <span className="text-sm text-[#4A5565] font-medium leading-5 group-hover:text-gray-900 transition-all">
                  {item.name}
                </span>
              </Label>
            ))}
          </div>
        </div>
        <hr className="border border-gray-100 h-px" />
        <Button
          onClick={() => router.push(`/search`)}
          className="h-auto w-full py-2.5 rounded-lg border border-gray-200 text-gray-600 text-sm font-medium hover:bg-gray-50 hover:border-gray-300 transition-colors cursor-pointer"
        >
          Clear All Filters
        </Button>
      </div>
    </div>
  );
}
