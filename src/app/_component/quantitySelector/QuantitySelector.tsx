'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function QuantitySelector({ stock , quantity ,setQuantity }: { stock: number ,quantity:number ,setQuantity:React.Dispatch<React.SetStateAction<number>> }) {
//   const [selectorValue, setSelectorValue] = useState(1);
  return (
    <div>
      {" "}
      <div className="flex items-center rounded-lg border-2 border-[#E5E7EB] ">
        <Button
          disabled={quantity  <= 1}
          onClick={() => {
            if (quantity  > 1) setQuantity(quantity-1);
          }}
          className="p-4! flex h-auto items-center justify-center  hover:text-main-color hover:bg-gray-100"
        >
          <FaMinus />
        </Button>
        <Input
          value={quantity }
          onChange={(e) => {
            const val = Number(e.target.value);

            if (val >= 1 && val <= stock) setQuantity(val);
          }}
          type="number"
          min={1}
          max={200}
          className="text-[#364153]! leading-7! text-lg! font-medium! w-16 border-none "
        />
        <Button
          disabled={quantity >= stock}
          onClick={() => {
            if (quantity < stock) setQuantity(quantity + 1);
          }}
          className="p-4! h-auto flex items-center justify-center hover:text-main-color hover:bg-gray-100 "
        >
          <FaPlus />
        </Button>
      </div>
    </div>
  );
}
