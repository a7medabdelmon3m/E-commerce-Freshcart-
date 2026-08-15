"use client";
import {
  cartItemType,
  productItemType,
  productType,
  wishListType,
} from "@/api/types";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useTransition } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { addToCart, deleteWishListItem } from "../../api/actions/routea.ctions";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { FaCheck, FaHeart, FaSpinner } from "react-icons/fa";
import { cartContextType, useCartContext } from "../_context/CartContext";
import { toast } from "react-toastify";
import { IoMdCheckmark } from "react-icons/io";
import { useRouter } from "next/navigation";

export default function WishListProductCard({
  productDetails,
  cartItems,
}: {
  productDetails: wishListType;
  cartItems: cartItemType;
}) {
  const [isPending, startTransition] = useTransition();
  const MySwal = withReactContent(Swal);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isAddedToCartState, setIsAddedToCartState] = useState(false)
  const { updateNumOfCartItems, updateNumOfWishlistItems } =
    useCartContext() as cartContextType;
    const router = useRouter();

  const handleClick = () => {
    router.push('/State'); 
  };

  const isAddedToCart = cartItems.products.some(
    (item) => item.product.id === productDetails.id,
  );
  // console.log("isAddedToCart : ", isAddedToCart);

  const handleDeleteFromWishlist = async () => {
    MySwal.fire({
      title: "Delete Product ?",
      html: (
        <div className="flex flex-col items-center gap-4">
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-red-100! text-[#FB2C36]">
            <FaHeart size={36} />
          </div>
          <p className="text-gray-500 text-lg">
            The product will be removed from your Wishlist. This action cannot
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
          startTransition(async () => {
            const response = await deleteWishListItem(productDetails.id);
            // console.log("response : ", response.data.data.length);

            if (response && response.data.data) {
              updateNumOfWishlistItems(response.data.data.length);
            }
          });
          Swal.fire({
            title: "Product Deleted!",
            text: "Your Product Is Successfully Deleted Now.",
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
  };

  const handleAddToCart = async () => {
    if (isLoading) return;
    setIsLoading(true);
    try {
      const response = await addToCart(productDetails.id);
      updateNumOfCartItems(response);
      setIsLoading(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
      }, 1500);
      setIsAddedToCartState(true)
    } catch (error) {
      setIsLoading(false);
      toast.error(error instanceof Error ? error.message : String(error));
    }
  };
  return (
    <div className=" block lg:flex border-b border-[#F3F4F6] py-5 px-6 space-y-4 lg:space-y-0 gap-4">
      <div className="flex-6 flex gap-4 items-center  ">
        <Link
          href={`products/${productDetails.id}`}
          className="w-20 h-20 shrink-0 relative rounded-xl border border-[#F3F4F6] bg-[#F9FAFB] flex items-center justify-center"
        >
          <Image
            src={productDetails.imageCover}
            alt={productDetails.title}
            fill
            className="object-scale-down "
          />
        </Link>
        <div className="min-w-0 space-y-1">
          <Link
            href={"#"}
            className="font-medium  leading-6 text-[#101828] line-clamp-1"
          >
            {productDetails.title}
          </Link>
          <p className="font-medium text-sm leading-5 text-[#99A1AF]">
            {productDetails.category.name}
          </p>
        </div>
      </div>
      <div className="flex flex-2 items-center justify-start lg:justify-center gap-2 ">
        <span className=" lg:hidden font-medium text-sm text-text-color leading-5">
          Price
        </span>
        <div className="text-right">
          <div className="font-semibold text-4 leading-6 text-center text-[#101828]">
            {productDetails.price} EGP
          </div>
        </div>
      </div>
      <div className="flex flex-2 items-center justify-start lg:justify-center gap-2 ">
        <span className="lg:hidden font-medium text-sm text-text-color leading-5">
          Status
        </span>

        <span className="inline-flex rounded-full py-1 px-3 gap-1.5 bg-[#F0FDF4] items-center">
          <span
            className={`w-1.5 h-1.5 rounded-full ${productDetails.quantity > 0 ? "bg-[#00C950] text-[#008236]" : "bg-[#C90050] text-[#820036]"}  font-medium text-xl leading-4`}
          ></span>
          {productDetails.quantity > 0 ? "In Stock" : "Out Stock"}
        </span>
      </div>
      <div className="flex gap-2 flex-2 items-center justify-center ">
        <Button
          onClick={isAddedToCart || isAddedToCartState ? handleClick : handleAddToCart }
          disabled={isLoading}
          className={`flex-1 rounded-lg py-2.5 px-4 flex gap-2   ${isAddedToCart || isAddedToCartState ? 'bg-gray-100 hover:bg-gray-200 text-gray-700':'bg-main-color hover:bg-main-color-hover text-white' } `}
        >
          {isAddedToCart || isAddedToCartState ? (
            <>
              <IoMdCheckmark className="text-main-color" />{" "}
              <span className="font-medium text-sm leading-5">View Cart</span>
            </>
          ) : isSuccess ? (
            <FaCheck />
          ) : isLoading ? (
            <FaSpinner className="animate-spin " />
          ) : (
            <>
              <FaCartShopping />{" "}
              <span className="font-medium text-sm leading-5">Add to Cart</span>
            </>
          )}
        </Button>
        <Button
          onClick={handleDeleteFromWishlist}
          disabled={isPending}
          className="w-10 h-10 rounded-lg border border-[#E5E7EB] flex items-center justify-center text-[#99A1AF] hover:bg-red-50 hover:border-red-200 hover:text-red-500"
        >
          <MdDelete size={14} />
        </Button>
      </div>
    </div>
  );
}
