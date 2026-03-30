import React from "react";
import CheckoutClient from "./checkoutClient";
import { getCartItems } from "@/api/services/route.services";
import EmptyMsg from "../_component/EmptyMsg";
import { FaExclamationTriangle } from "react-icons/fa";
import Link from "next/link";

export default async function Checkout() {
  const items = await getCartItems();
  const numOfItems = items?.products.length || 0;
  return (
    <>
      {numOfItems > 0 ? (
        <CheckoutClient cartItems={items} />
      ) : (
        <div className="min-h-[60vh] px-x flex items-center justify-center">
          <div className="max-w-md text-center">
            <EmptyMsg
              icon={<FaExclamationTriangle />}
              title="Your cart is empty"
              desc={<p>Add some items to your cart before checking out.</p>}
              iconStylings="w-24 h-24 rounded-full bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center mx-auto mb-6 text-4xl text-amber-500"
            />
            
          </div>
        </div>
      )}
    </>
  );
}
