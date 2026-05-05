"use client";
import { productBrand, productCategory } from "@/api/types";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { FaFilter } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
const activeFilterColors = [
  { name: "q", bgColor: "bg-gray-100", textColor: "text-gray-700" },
  { name: "category", bgColor: "bg-green-100", textColor: "text-green-700" },
  { name: "price", bgColor: "bg-amber-100", textColor: "text-amber-700" },
  { name: "brand", bgColor: "bg-violet-100", textColor: "text-violet-700" },
];
export type prop = {
  allCategories?: productCategory[];
  allbrands?: productBrand[];
};
export default function FilterTags({ allCategories, allbrands }: prop) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const params = new URLSearchParams(searchParams.toString());
  const tags: { label: string; key: string; originalValue: string }[] = [];
  const minPrice = params.get("minPrice") || "0";
  const maxPrice = params.get("maxPrice") || "∞";
  const isPrice = params.get("minPrice") || params.get("maxPrice");

  if ((minPrice || maxPrice) && isPrice) {
    tags.push({
      label: `${minPrice} - ${maxPrice} EGP`,
      key: "price",
      originalValue: "range",
    });
  }

  params.forEach((value, key) => {
    let displayName = value;
    if (
      key !== "page" &&
      key !== "sort" &&
      key !== "minPrice" &&
      key !== "maxPrice"
    ) {
      if (key === "brand") {
        const brandObj = allbrands?.find((v) => v._id === value);
        if (brandObj) displayName = brandObj.name;
      }
      if (key === "category") {
        const categoryObj = allCategories?.find((v) => v._id === value);
        if (categoryObj) displayName = categoryObj.name;
      }
      tags.push({ label: displayName, key: key, originalValue: value });
    }
  });

  function handleRemoveTag(key: string, origin: string) {
    if (key === "price") {
      params.delete("minPrice");
      params.delete("maxPrice");
    } else {
      const currentValues = params.getAll(key);
      if (currentValues.length > 1) {
        const filteredValues = currentValues.filter((v) => v !== origin);
        params.delete(key);
        filteredValues.forEach((v) => params.append(key, v));
      } else {
        params.delete(key);
      }
    }

    router.push(`/search?${params.toString()}`);
  }

  if (tags.length === 0) {
    return;
  }
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-sm text-gray-500 flex items-center gap-1">
        <FaFilter />
        Active:
      </span>
      {tags.map((item) => {
        const styling =
          activeFilterColors.find((v) => v.name === item.key) ||
          activeFilterColors[0];
        return (
          <span
            key={item.label}
            className={`inline-flex items-center gap-1 px-2 py-1 rounded-full  text-xs font-medium ${styling.bgColor} ${styling.textColor}  `}
          >
            {/* &quot;dd&quot; */}
            {item.label}
            <Button
              onClick={() => handleRemoveTag(item.key, item.originalValue)}
              className="h-auto p-0! hover:text-red-500"
            >
              {" "}
              <FaXmark />
            </Button>
          </span>
        );
      })}
      <Button
        onClick={() => router.push(`/search`)}
        className="h-auto text-xs text-gray-500 hover:text-gray-700 underline ml-2 cursor-pointer"
      >
        Clear all
      </Button>
    </div>
  );
}
