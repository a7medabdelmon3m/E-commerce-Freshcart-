"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
};



export default function AppPagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const pathName = usePathname();
  const router = useRouter() ;
  const searchParams = useSearchParams()

  const handlePageChange = (newPage: number) => {
      if(onPageChange){
        onPageChange(newPage);
        return
      }

      const params = new window.URLSearchParams(searchParams.toString())

      params.set('page' , newPage.toString()) 

      router.push(`${pathName}?${params}` , {scroll:false})

  
  }
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      if (currentPage > 3) {
        pages.push("...");
      }

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) {
        pages.push("...");
      }

      pages.push(totalPages);
    }

    return pages;
  };

  if (totalPages <= 1) return null; 

  return (
    <div className="flex items-center justify-center gap-2 my-8 dir-ltr">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center justify-center w-10 h-10 rounded-xl border border-[#F3F4F6] bg-white text-gray-600 hover:bg-gray-50 hover:text-main-color transition-colors disabled:opacity-40 disabled:cursor-not-allowed shadow-sm cursor-pointer"
      >
        <FaChevronLeft className="w-3.5 h-3.5" />
      </button>

      <div className="flex items-center gap-1.5">
        {getPageNumbers().map((page, index) => {
          if (page === "...") {
            return (
              <span
                key={`dots-${index}`}
                className="w-10 h-10 flex items-center justify-center text-gray-400 font-bold select-none"
              >
                ...
              </span>
            );
          }

          const isSelected = page === currentPage;

          return (
            <button
              key={page}
              onClick={() => handlePageChange(Number(page))}
              className={`w-10 h-10 rounded-xl font-medium text-sm transition-all duration-150 flex items-center justify-center shadow-sm cursor-pointer ${
                isSelected
                  ? "bg-main-color text-white shadow-[0px_4px_6px_-4px_#16A34A40,0px_10px_15px_-3px_#16A34A40] scale-105"
                  : "bg-white text-gray-700 border border-[#F3F4F6] hover:bg-gray-50 hover:text-main-color"
              }`}
            >
              {page}
            </button>
          );
        })}
      </div>

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center justify-center w-10 h-10 rounded-xl border border-[#F3F4F6] bg-white text-gray-600 hover:bg-gray-50 hover:text-main-color transition-colors disabled:opacity-40 disabled:cursor-not-allowed shadow-sm cursor-pointer"
      >
        <FaChevronRight className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}