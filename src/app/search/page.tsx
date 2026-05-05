import React, { Suspense } from "react";
import Breadcrumbs from "../_component/Breadcrumbs";
import LayoutSwitcher from "./LayoutSwitcher";
import Select from "./Select";
import FilterationSide from "./FilterationSide";
import SearchInput from "./SearchInput";
import { getAllBrands, getAllCategories } from "@/api/services/route.services";
import FilterResult from "./FilterResult";
import { BiLoaderCircle } from "react-icons/bi";
import FilterTags from "./FilterTags";

export default async function Search({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  // console.log("serchParams", params);
  const keyword = Array.isArray(params.q) ? params.q[0] : params.q;
  const suspenseKey = JSON.stringify(params);

  // console.log("suspenseKey", suspenseKey);
  const allCategories = await getAllCategories() ;
  const allBrands = await getAllBrands() ;
  // console.log('allCategories' , getAllCategories , '/n' , 'allBrands' , allBrands );
  

  return (
    <section className="min-h-300 pb-8 bg-[#F9FAFB80] space-y-8">
      <div className=" border-b border-[#F3F4F6] bg-[#FFFFFF]">
        <div className="container mx-auto py-6 px-4 space-y-4">
          <div className="">
            <Breadcrumbs
              linkColorHover="Hover:text-[#16A34A]"
              linkColor="text-[#6A7282]"
              pageColor="text-[#101828]"
              customName={["Search Results"]}
            />
          </div>
          <div className="max-w-2xl">
            <SearchInput />
          </div>
          {params.q && (
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Search Results for &quot; {params.q} &quot;
              </h1>
              <p className="text-gray-500 text-sm mt-1">
                We found 0 products for you
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex gap-8">
          <div className="">
            <FilterationSide categories={allCategories} brands={allBrands}/>
          </div>

          <div className="space-y-6 flex-1">
            <div className="flex justify-between ">
              <LayoutSwitcher />
              <Select />
            </div>
            <FilterTags allCategories={allCategories} allbrands={allBrands}/>
            <Suspense
              key={suspenseKey}
              fallback={
                <div className="min-h-[60vh] px-x flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <BiLoaderCircle className="text-6xl text-main-color animate-spin mx-auto" />
                    <h3 className="text-xl  text-text-color">Searching Products...</h3>
                  </div>
                </div>
              }
            >
              <FilterResult params={params} />
            </Suspense>

            
          </div>
        </div>
      </div>
    </section>
  );
}
