'use client'
import { Button } from '@/components/ui/button'
import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { updateCount } from '../cart.actions';
export type prop = {
    isPlus?:boolean ;
    newCount:number ;
    id:string
    setIsLoading:(flag:boolean) => void
}
export default function UpdateItemCount({isPlus = true , newCount ,id ,setIsLoading}:prop) {
   async function handleUpdateCount(){
    setIsLoading(true)
         try {
            const resp  = await updateCount(id ,newCount)
         
            setIsLoading(false)
         
         } catch (error) {
            console.error(error);
            
         }finally{
           setIsLoading(false)
         }

    }
  return (
    <Button disabled={newCount <= 0} onClick={handleUpdateCount} className={`w-8 h-8 rounded-lg ${isPlus ? 'bg-main-color text-white hover:bg-main-color-hover':'bg-white text-text-color hover:bg-[#F9FAFB]'} flex items-center justify-center shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A]  transition-all duration-300 `}>
                    {
                        isPlus?<FaPlus /> :<FaMinus />
                    }
                    
                  </Button>
  )
}
