"use client";
import React from "react";
import ProductCard from "../_component/productCard/ProductCard";
import { productType, wishListType } from "@/api/types";
import { cartContextType, useCartContext } from "../_context/CartContext";

export default function ProductLis({filteredProducts , whishlist}:{filteredProducts:productType[] ,whishlist:wishListType[]}) {

    const {isGrid} = useCartContext() as cartContextType
    
  return (
    <div className={` grid ${isGrid ? ' grid-cols-2 sm:grid-cols-3 lg:grid-cols-4':'grid-cols-1' }  gap-4`}>
      {filteredProducts?.map((item) => (
        <ProductCard key={item.id} product={item} wishlist={whishlist} />
      ))}
    </div>
  );
}
