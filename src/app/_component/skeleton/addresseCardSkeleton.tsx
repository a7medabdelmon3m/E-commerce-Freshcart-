import React from "react";

export default function AddressListSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {[1, 2].map((item) => (
        <div
          key={item}
          className="border border-[#F3F4F6] rounded-2xl p-5 shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A] bg-white"
        >
          <div className="flex justify-between gap-4">
            {/* الجزء الأيسر: الأيقونة والتفاصيل */}
            <div className="flex gap-4 flex-1">
              {/* أيقونة الموقع (Circle/Box Skeleton) */}
              <div className="w-11 h-11 shrink-0 rounded-xl bg-gray-200 animate-pulse" />

              {/* نصوص العنوان والهاتف والمدينة */}
              <div className="flex-1 space-y-2">
                {/* اسم العنوان (Address Name) */}
                <div className="w-28 h-5 rounded-md bg-gray-200 animate-pulse" />

                {/* التفاصيل (Address Details) */}
                <div className="w-4/5 h-4 rounded-md bg-gray-200 animate-pulse" />

                {/* الهاتف والمدينة (Phone & City) */}
                <div className="flex flex-wrap gap-4 pt-[7.5px]">
                  {/* Phone */}
                  <div className="w-24 h-4 rounded-md bg-gray-200 animate-pulse" />
                  {/* City */}
                  <div className="w-20 h-4 rounded-md bg-gray-200 animate-pulse" />
                </div>
              </div>
            </div>

            {/* الجزء الأيمن: أزرار التحكم (Action Buttons Skeleton) */}
            <div className="flex gap-2 items-start shrink-0">
              <div className="w-8 h-8 rounded-lg bg-gray-200 animate-pulse" />
              <div className="w-8 h-8 rounded-lg bg-gray-200 animate-pulse" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}