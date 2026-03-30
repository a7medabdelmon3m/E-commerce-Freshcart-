"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { MdDelete } from "react-icons/md";
import { clearUserCart } from "./cart.actions";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { BsCart3 } from "react-icons/bs";
import { cartContextType, useCartContext } from "../_context/CartContext";

const MySwal = withReactContent(Swal);

export default function ClearAllItems() {
    const {updateNumOfCartItems} = useCartContext() as cartContextType
  function handleClearCart() {
    MySwal.fire({
      title: "Clear Your Cart?",
      html: (
        <div className="flex flex-col items-center gap-4">
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-red-100! text-[#FB2C36]">
            <BsCart3 size={36} />
          </div>
          <p className="text-gray-500 text-lg">
            All items will be removed from your cart. This action cannot be
            undone.
          </p>
        </div>
      ),
      imageWidth: 100,
      imageHeight: 100,
      showCancelButton: true,
      confirmButtonText: "Yes, Clear All",
      cancelButtonText: "Keep Shopping",
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
          const resp = await clearUserCart();
          updateNumOfCartItems(resp)
          Swal.fire({
            title: "Cart Cleared!",
            text: "Your cart is now empty.",
            icon: "success",
            buttonsStyling: false,
            confirmButtonText: "Continue Shopping",
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
        } catch (error) {
          Swal.fire("Error!", "Something went wrong.", "error");
        }
    });
  }
  return (
    <Button
      onClick={handleClearCart}
      className="text-sm leading-5 font-medium text-text-color hover:text-[#FB2C36] flex gap-2  items-center transition-all duration-300 disabled:opacity-50 group"
    >
      <MdDelete className="group-hover:scale-110 transition-all duration-300" />
      Clear all items
    </Button>
  );
}
