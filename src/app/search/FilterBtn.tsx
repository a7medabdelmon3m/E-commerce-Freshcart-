"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import React from "react";
import { FaSliders } from "react-icons/fa6";
import FilterationSide from "./FilterationSide";
import { productBrand, productCategory } from "@/api/types";
export type prop = {
  categories? :productCategory[];
  brands? :productBrand[];
}
export default function FilterBtn({brands ,categories}:prop) {
  return (
    <div>
      <Sheet >
        <SheetTrigger asChild>
          <Button
            className={`lg:hidden flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors`}
          >
            <FaSliders />
            Filters
          </Button>
        </SheetTrigger>
        <SheetContent className="w-80 overflow-y-auto max-h-screen bg-white [&>button]:w-8 [&>button]:h-8 [&>button]:rounded-full [&>button]:bg-gray-100 [&>button]:flex [&>button]:items-center [&>button]:justify-center [&>button]:hover:bg-gray-200 [&>button]:transition-colors">
          <SheetHeader>
            <SheetTitle className="text-lg font-bold">Filters</SheetTitle>
          </SheetHeader>
         <FilterationSide brands={brands} categories={categories}/> 
         
        </SheetContent>
      </Sheet>
    </div>
  );
}
