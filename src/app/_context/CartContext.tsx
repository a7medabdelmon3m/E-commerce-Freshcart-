'use client'
import { cartItemType } from '@/api/types'
import React, { ReactNode, useContext, useState } from 'react'
import { createContext } from 'react'
import { number } from 'zod'
export interface cartContextType{
  numberOfCartItems:number;
  updateNumOfCartItems:(num:number)=>void

}
 export const cartContext = createContext<cartContextType>({numberOfCartItems :0 ,updateNumOfCartItems(){} })
export default function CartContextProvider({children , cartItems}:{children:ReactNode,cartItems:cartItemType| undefined | Error}) {
  const [numberOfCartItems, setnumberOfCartItems] = useState( ()=> {
    return cartItems === undefined ? 0:(cartItems as cartItemType).products.length})
    function updateNumOfCartItems(num:number){
      setnumberOfCartItems(num)
    }
  return (
    <cartContext.Provider value={{numberOfCartItems,updateNumOfCartItems}}>
    {
        children
    }
    </cartContext.Provider>
  )
}
export function useCartContext(){
    const resp =  useContext(cartContext)

    if(!resp){
      return new Error('can`t use cart context putside it`s context!')
    }
    return resp
}
