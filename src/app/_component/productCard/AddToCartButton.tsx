"use client";
import { cartContextType, useCartContext } from "@/app/_context/CartContext";
import { addToCart, updateCount } from "@/api/actions/routea.ctions";
import { Button } from "@/components/ui/button";
import { Span } from "next/dist/trace";
import React, { ReactNode, useState } from "react";
import { FaCheck, FaPlus, FaSpinner } from "react-icons/fa";

type prop = {
  className?: string;
  id: string;
  children: ReactNode;
  successState?: string;
  quantity?:number
};

export default function AddToCartButton({
  successState = "",
  className = "",
  id,
  children,
  quantity
}: prop) {
  const [isLoading, setisLoading] = useState(false);
  const [isSuccess, setisSuccess] = useState(false);
  const {updateNumOfCartItems} =useCartContext() as cartContextType

  async function handleAddToCart() {
    if (isLoading) return;
    setisLoading(true);
    
    try {
      const numOfCartItems =   await addToCart(id);
      setisLoading(false);
      setisSuccess(true);
      setTimeout(() => {
        setisSuccess(false);
      }, 1500);
      updateNumOfCartItems(numOfCartItems)
    } catch (error) {
      console.error(error);
      setisLoading(false);
    }
  }
  return (
    <Button
      disabled={isLoading}
      onClick={handleAddToCart}
      className={className}
    >
      {isLoading ? (
        <span>
          <FaSpinner className="animate-spin" />
        </span>
      ) : isSuccess ? (
        <span className="flex gap-2">
          <FaCheck />
          {successState}
        </span>
      ) : (
        children
      )}
    </Button>
  );
}
