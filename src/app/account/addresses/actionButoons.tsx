"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { FaCity, FaPen, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function ActionButoons() {
      const MySwal = withReactContent(Swal);
    

    function handleDeleteAddress(){
        MySwal.fire({
              title: "Delete Address ?",
              html: (
                <div className="flex flex-col items-center gap-4">
                  <div className="w-20 h-20 flex items-center justify-center rounded-full bg-red-100! text-[#FB2C36]">
                    <FaCity size={36} />
                  </div>
                  <p className="text-gray-500 text-lg">
                    The Address will be removed from your Addresses. This action cannot
                    be undone.
                  </p>
                </div>
              ),
              imageWidth: 100,
              imageHeight: 100,
              showCancelButton: true,
              confirmButtonText: "Yes, Delete",
              cancelButtonText: "Cancel Deleting",
              buttonsStyling: false,
        
              customClass: {
                popup: "rounded-2xl p-6",
                confirmButton:
                  "bg-red-500 font-medium hover:bg-red-600 text-white py-3 px-6 rounded-xl mr-2",
                cancelButton:
                  "bg-gray-200 font-medium hover:bg-gray-300 px-6 py-3 rounded-xl mr-2",
              },
            }).then(async (result) => {
              if (result.isConfirmed)
                try {
                //   startTransition(async () => {
                //     const response = await deleteWishListItem(productDetails.id);
                //     // console.log("response : ", response.data.data.length);
        
                //     if (response && response.data.data) {
                //       updateNumOfWishlistItems(response.data.data.length);
                //     }
                //   });
                  Swal.fire({
                    title: "Address Deleted!",
                    text: "Your Address Is Successfully Deleted Now.",
                    icon: "success",
                    buttonsStyling: false,
                    confirmButtonText: "OK",
                    timer: 3000,
                    timerProgressBar: true,
        
                    customClass: {
                      popup: "!rounded-[20px] !p-8 !bg-white !overflow-hidden",
        
                      title: "!text-[#101828] !font-bold !text-2xl !mb-2",
        
                      htmlContainer: "!text-gray-500 !text-lg !font-medium",
        
                      confirmButton:
                        "!bg-[#0aad0a] hover:!bg-[#089008] !text-white !font-semibold !py-4 !px-12 !rounded-2xl !text-lg !transition-all !duration-300 !w-full sm:!w-auto",
        
                      icon: "!border-[#0aad0a] !text-[#0aad0a] scale-75",
                      timerProgressBar: "!bg-[#0aad0a] !h-[4px]",
                    },
                  });
                } 
                catch (error) {
                  Swal.fire("Error!", "Something went wrong.", "error");
                }
            });
    }
  return (
    <div>
      <div className="flex  gap-2">
        <Button className="w-9 h-9 rounded-lg flex items-center justify-center bg-[#F3F4F6] text-[#4A5565] hover:bg-main-color-subtle hover:text-main-color transition-colors duration-100">
          <FaPen />
        </Button>
        <Button onClick={handleDeleteAddress} className="w-9 h-9 rounded-lg flex items-center justify-center bg-[#F3F4F6] text-[#4A5565] hover:bg-red-100 hover:text-red-600 transition-colors duration-100">
          <FaTrash />
        </Button>
      </div>
    </div>
  );
}
