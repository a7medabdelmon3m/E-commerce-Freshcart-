import React from "react";
import { FaSpinner } from "react-icons/fa6";

type PageLoadingProps = {
  sectionName?: string;  
  showDots?: boolean;   
  spinnerColor?: string; 
};

export default function PageLoading({
  sectionName = "products",
  showDots = true,
  spinnerColor = "text-main-color", 
}: PageLoadingProps) {
  return (
    <div className="min-h-87.5 w-full flex flex-col items-center justify-center gap-4 p-6">
      
      <FaSpinner className={`w-10 h-10 animate-spin ${spinnerColor}`} />

      <p className="text-gray-600 font-medium text-base sm:text-lg tracking-wide flex items-center">
        <span>Searching {sectionName}</span>
        
        {showDots && (
          <span className="inline-flex ml-0.5">
            <span className="animate-bounce delay-0">.</span>
            <span className="animate-bounce delay-150">.</span>
            <span className="animate-bounce delay-300">.</span>
          </span>
        )}
      </p>

    </div>
  );
}