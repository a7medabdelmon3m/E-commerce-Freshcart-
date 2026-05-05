"use client";
import { Button } from "@/components/ui/button";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
export default function Pagination({ length }: { length: number }) {
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const router = useRouter();
  const isFirst = currentPage === 1 
  const islast = currentPage === length 

  function handlePagination(idx: number) {
    if (idx  === 1) {
      router.push(`/search`);
      
    } else {
      router.push(`/search/?page=${idx }`);
    }
  }
  // console.log(Object.fromEntries(searchParams.entries()))
  
  return (
    <div className="pt-4 flex gap-2 items-center justify-center">
      {length > 1 && (
        <Button disabled={isFirst} onClick={() => !isFirst && handlePagination(currentPage-1) } className={` h-10 w-10  rounded-lg border border-[#E5E7EB] text-[#4A5565] ${isFirst ? 'cursor-not-allowed':'cursor-pointer'} `}>
          <IoIosArrowBack />
        </Button>
      )}

      {Array.from({ length: length }).map((_, idx) => (
        <Button
          onClick={() => handlePagination(idx+1)}
          key={idx}
          className={` h-10 w-10  rounded-lg border border-[#E5E7EB] ${currentPage === idx + 1 ? "bg-main-color text-white" : "text-[#4A5565]"} `}
        >
          {idx + 1}
        </Button>
      ))}

      {length > 1 && (
        <Button disabled={islast} onClick={() => !islast && handlePagination(currentPage+1) }  className={` h-10 w-10  rounded-lg border border-[#E5E7EB] text-[#4A5565] ${islast ? 'cursor-not-allowed':'cursor-pointer'} `}>
          <IoIosArrowForward />
        </Button>
      )}
    </div>
  );
}
