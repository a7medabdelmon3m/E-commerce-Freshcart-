import React from "react";

export default function ProductDetailsPageSkeleton() {
  return (
    <div className="container mx-auto p-4 sm:p-6 my-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        
        {/* ================= 1. قسم الصور (الشمال) ================= */}
        <div className="space-y-4">
          {/* الصورة الكبيرة الرئيسية */}
          <div className="w-full h-[320px] sm:h-[420px] rounded-2xl bg-gray-200 animate-pulse" />

          {/* الصور المصغرة تحت (Thumbnails) */}
          <div className="flex items-center gap-3">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-gray-200 animate-pulse shrink-0"
              />
            ))}
          </div>
        </div>

        {/* ================= 2. قسم التفاصيل (اليمين) ================= */}
        <div className="rounded-xl p-6 shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A] bg-white border border-gray-100 space-y-5">
          
          {/* Tags (Category & Brand) */}
          <div className="flex gap-2">
            <div className="w-20 h-7 rounded-full bg-gray-200 animate-pulse" />
            <div className="w-24 h-7 rounded-full bg-gray-200 animate-pulse" />
          </div>

          {/* العنوان (Title) */}
          <div className="w-4/5 h-8 rounded-lg bg-gray-200 animate-pulse" />

          {/* التقييمات والنجوم (Rating & Reviews) */}
          <div className="flex gap-3 items-center">
            <div className="w-28 h-5 rounded bg-gray-200 animate-pulse" />
            <div className="w-20 h-4 rounded bg-gray-200 animate-pulse" />
          </div>

          {/* السعر (Price) */}
          <div className="w-36 h-9 rounded-lg bg-gray-200 animate-pulse" />

          {/* حالة التوفر (In Stock Tag) */}
          <div className="flex">
            <div className="w-24 h-7 rounded-full bg-gray-200 animate-pulse" />
          </div>

          {/* الوصف (Description) */}
          <div className="border-t pt-5 border-[#F3F4F6] space-y-2.5">
            <div className="w-full h-4 rounded bg-gray-200 animate-pulse" />
            <div className="w-11/12 h-4 rounded bg-gray-200 animate-pulse" />
            <div className="w-3/4 h-4 rounded bg-gray-200 animate-pulse" />
          </div>

          {/* الكمية (Quantity Input Skeleton) */}
          <div className="space-y-2">
            <div className="w-16 h-4 rounded bg-gray-200 animate-pulse" />
            <div className="flex gap-4 items-center">
              <div className="w-32 h-10 rounded-lg bg-gray-200 animate-pulse" />
              <div className="w-24 h-4 rounded bg-gray-200 animate-pulse" />
            </div>
          </div>

          {/* إجمالي السعر (Total Price Box) */}
          <div className="rounded-lg p-4 bg-[#F9FAFB]">
            <div className="flex justify-between items-center">
              <div className="w-20 h-5 rounded bg-gray-200 animate-pulse" />
              <div className="w-32 h-7 rounded bg-gray-200 animate-pulse" />
            </div>
          </div>

          {/* أزرار الشراء والشحن (Primary Action Buttons) */}
          <div className="flex gap-3">
            <div className="h-12 rounded-xl bg-gray-200 animate-pulse flex-1" />
            <div className="h-12 rounded-xl bg-gray-200 animate-pulse flex-1" />
          </div>

          {/* أزرار الإضافة للمفضلة والمشاركة (Secondary Buttons) */}
          <div className="flex gap-3">
            <div className="h-12 rounded-xl bg-gray-200 animate-pulse flex-1" />
            <div className="w-12 h-12 rounded-xl bg-gray-200 animate-pulse shrink-0" />
          </div>

          {/* المميزات السفلى (Shipping, Warranty, Security) */}
          <div className="border-t border-[#F3F4F6] pt-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex gap-3 items-center">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-gray-200 animate-pulse" />
                  <div className="space-y-2 flex-1">
                    <div className="w-20 h-4 rounded bg-gray-200 animate-pulse" />
                    <div className="w-14 h-3 rounded bg-gray-200 animate-pulse" />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}