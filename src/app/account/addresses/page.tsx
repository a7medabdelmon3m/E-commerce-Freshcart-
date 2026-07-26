import EmptyMsg from "@/app/_component/EmptyMsg";
import { Button } from "@/components/ui/button";
import React from "react";
import { FaCity, FaPen, FaPhone, FaPlus, FaTrash } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import ActionButoons from "./actionButoons";
const addressesList = [1];

export default function page() {
  return (
    <div className="flex-1">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-xl font-bold leading-7 text-[#101828]">
              My Addresses
            </h2>
            <p className="font-medium text-sm leading-5 text-text-color">
              Manage your saved delivery addresses
            </p>
          </div>
          <Button className="h-auto! rounded-xl py-2.5 px-5 bg-main-color inline-flex gap-2 items-center shadow-[0px_4px_6px_-4px_#16A34A40,0px_10px_15px_-3px_#16A34A40] text-white font-semibold hover:bg-main-color-hover transition-colors duration-100 ">
            <FaPlus />
            Add Address
          </Button>
        </div>
        {addressesList.length === 0 ? (
          <div className="bg-white rounded-3xl border border-gray-100 p-12 text-center">
            <EmptyMsg 
            title="No Addresses Yet"
            desc={<p className="text-gray-500 mb-6 max-w-sm mx-auto">Add your first delivery address to make checkout faster and easier.</p>}
            icon={<FaLocationDot/>}
            iconStylings="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-5 text-3xl text-gray-400"
            customButton={
              <Button className="h-auto inline-flex items-center gap-2 px-6! py-3! rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors shadow-lg shadow-green-600/25">
                  <FaPlus/>
                  Add Your First Address
              </Button>
            }
            />
          </div>
          
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-[#F3F4F6] rounded-2xl p-5 shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A]">
              <div className="flex justify-between gap-4">
                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl flex justify-center items-center bg-[#F0FDF4] text-main-color">
                    <FaLocationDot width={13.5} hanging={18.11} />
                  </div>
                  <div className="flex-1 gap-1">
                    <h3 className="font-bold text-[#101828]">Sadat City</h3>
                    <span className="font-medium text-sm leading-5 text-[#4A5565]">
                      Sadat City
                    </span>
                    <div className="flex flex-wrap gap-4 pt-[7.5px]">
                      <span className="flex gap-1.5 items-center text-text-color font-medium text-sm leading-5">
                        <FaPhone />
                        01097514862
                      </span>
                      <span className="flex gap-1.5 items-center text-text-color font-medium text-sm leading-5">
                        <FaCity />
                        Sadat City
                      </span>
                    </div>
                  </div>
                </div>
                <ActionButoons/>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
