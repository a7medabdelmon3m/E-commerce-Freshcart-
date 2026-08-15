import React, { Suspense } from "react";
import { AddAndEditModal } from "./addAndEditModal";
import AddressListSkeleton from "@/app/_component/skeleton/addresseCardSkeleton";
import AddresseList from "./addresseList";
// const addressesList = [1];

export default function page() {
  // console.log('addresses : ' , addresses );

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
          <AddAndEditModal />
        </div>
         <Suspense fallback={<AddressListSkeleton/>}>
          <AddresseList />
         </Suspense>
        
      </div>
    </div>
  );
}
