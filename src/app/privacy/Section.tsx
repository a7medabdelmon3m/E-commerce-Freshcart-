import React, { ReactNode } from "react";
import { FaDatabase } from "react-icons/fa";
import { IconType } from "react-icons/lib";

export default function Section({
  icon: Icon,
  sectionItemList,
  articleNo,
  title,
  text,
}: {
  icon: IconType;
  title: string;
  articleNo: number;
  sectionItemList?: { title: string; desc: string }[];
  text?: ReactNode;
}) {
  return (
    <section className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 shadow-sm hover:shadow-lg hover:border-green-100 transition-all duration-300 group">
      <div className="flex items-start gap-4 mb-5">
        <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-green-100 to-green-50 flex items-center justify-center shrink-0 group-hover:from-green-500 group-hover:to-green-400 transition-all duration-300 ">
          <Icon className="text-xl text-green-600 group-hover:text-white transition-colors duration-300" />
        </div>
        <div>
          <span className="text-xs font-bold text-green-600 uppercase tracking-wider">
            Article {articleNo}
          </span>
          <h2 className="text-xl font-bold text-gray-900">{title}</h2>
        </div>
      </div>
      <div className="space-y-3">
        {text ? (
          <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
        ) : (
          sectionItemList?.map((item, idx) => {
            return (
              <SectionItem
                key={idx}
                itemTitle={item.title}
                itemDesc={item.desc}
                sectionNo={idx + 1}
              />
            );
          })
        )}
      </div>
    </section>
  );
}
function SectionItem({
  sectionNo,
  itemTitle,
  itemDesc,
}: {
  sectionNo: number;
  itemTitle: string;
  itemDesc: string;
}) {
  return (
    <div className="flex items-start gap-3 text-gray-600 leading-relaxed">
      <span className="text-xs font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-md mt-0.5 shrink-0">
        {sectionNo}.1
      </span>
      <p className="text-sm">
        <strong className="text-gray-800">{itemTitle}:</strong>
        {itemDesc}
      </p>
    </div>
  );
}
