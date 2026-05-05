"use client";
import { Input } from "@/components/ui/input";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchInput() {
  const searchParams = useSearchParams();
  const router = useRouter();
  

  const searchWord = searchParams.get("q") || "";
  
  function handleSearch(e: any) {
    const val = e.target.value;
    const params = new URLSearchParams(searchParams.toString());
    if (val && val.trim()) {
      params.set( 'q',val);
      
    } else params.delete('q');
    router.push(`/search?${params}`);
  }
  return (
    <div className="relative w-full">
      <Input
        onChange={handleSearch}
        value={searchWord || ""}
        className="rounded-xl border h-auto border-[#E5E7EB] py-3.5 pr-4 pl-12 text-lg placeholder:text-lg placeholder:text-[#36415380] placeholder:font-medium focus:ring-2 focus:ring-main-color  foucs:outline-none focus:border-green-500 transitions-all"
        placeholder="Search for products..."
      ></Input>
      <FaSearch
        color="#99A1AF"
        className="absolute left-4 top-1/2 -translate-y-1/2"
      />
    </div>
  );
}
