'use client'
import { cartItemType, wishListType } from '@/api/types'
import React, { ReactNode, useContext, useEffect, useState } from 'react'
import { createContext } from 'react'
import { number } from 'zod'
import { getNumOfICartitems, getNumOfIWishlist } from '../(auth)/login/login.action'
export interface cartContextType{
  numberOfCartItems:number;
  updateNumOfCartItems:(num:number)=>void
  numberOfWishlistItems:number;
  updateNumOfWishlistItems:(num:number)=>void
  isGrid:boolean,
  updateDisplayLayout:(val:boolean) => void

}
 export const cartContext = createContext<cartContextType>({numberOfCartItems :0 ,updateNumOfCartItems(){} ,numberOfWishlistItems:0 ,updateNumOfWishlistItems(){} ,isGrid:false,updateDisplayLayout(){}  })
export default function CartContextProvider({children , cartItems , whishlistItems}:{children:ReactNode,cartItems:cartItemType| undefined | Error ,whishlistItems:wishListType[] | undefined | Error }) {
  
  const [numberOfCartItems, setnumberOfCartItems] = useState( ()=> {
    return cartItems === undefined ? 0:(cartItems as cartItemType).products.length})
    function updateNumOfCartItems(num:number){
      setnumberOfCartItems(num)
    }

  const [numberOfWishlistItems, setnumberOfWishlistItems] = useState( ()=> {
    return whishlistItems === undefined ? 0:(whishlistItems as wishListType[])?.length})
    function updateNumOfWishlistItems(num:number){
      setnumberOfWishlistItems(num)
      console.log('num : ', num);
      
    }

    const [isGrid, setIsGrid] = useState(false)
     function updateDisplayLayout(val:boolean){
          setIsGrid(val)
      }

    
   
  return (
    <cartContext.Provider value={{numberOfCartItems,updateNumOfCartItems,numberOfWishlistItems ,updateNumOfWishlistItems , isGrid ,updateDisplayLayout}}>
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
