"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { MdDelete } from "react-icons/md";
import { deleteCartItem } from "../cart.actions";
import { cartContextType, useCartContext } from "@/app/_context/CartContext";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);
export type prop = {
  id: string;
  title: string;
};

export default function DeleteItemBtn({ id, title }: prop) {
  const { updateNumOfCartItems } = useCartContext() as cartContextType;
  async function handleDeleteItem() {
    MySwal.fire({
      title: "Remove Item?",
      html: (
      <div className="flex flex-col items-center gap-4">
        <div className="w-20 h-20 flex items-center justify-center rounded-full bg-red-100! text-[#FB2C36]">
         <MdDelete size={36}/>
        </div>
        <p className="text-gray-500 text-lg">
          Remove <span className="font-bold text-black">{title}</span> from your cart?
        </p>
      </div>
    ),
      imageWidth: 100,
      imageHeight: 100,
      showCancelButton: true,
      confirmButtonText: "Remove",
      cancelButtonText: "Cancel",
      buttonsStyling: false,
    
      customClass: {
        popup: "rounded-2xl p-6",
        confirmButton:
          "bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-xl mr-2",
        cancelButton: "bg-gray-200 hover:bg-gray-300 px-6 py-3 rounded-xl mr-2",
      },
    }).then(async (result) => {
      if (result.isConfirmed)
        try {
          const numOfItems = await deleteCartItem(id);
          updateNumOfCartItems(numOfItems);
          // Swal.fire({
          //   title: "Deleted!",
          //   text: "Your file has been deleted.",
          //   icon: "success",
          // });
        } catch (error) {
          Swal.fire("Error!", "Something went wrong.", "error");
        }
    });
  }
  return (
    <Button
      onClick={handleDeleteItem}
      className="flex items-center justify-center w-10 h-10 rounded-xl border border-[#FFC9C9] bg-[#FEF2F2] text-[#FB2C36] hover:bg-[#FB2C36] hover:text-white transition-all duration-300"
    >
      <MdDelete />
    </Button>
  );
}
