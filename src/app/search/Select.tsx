'use client'
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react'
export default function Select() {
const searchParams = useSearchParams() ; 
const params = new URLSearchParams(searchParams.toString())
const router = useRouter() ;
  function handleSorting(e:any){
    // console.log('selection : ' ,e.target.value);
    const val = e.target.value
    if( val === 'Relevance' || !val){
      params.delete('sort');
    }else{
      params.set('sort' , val)
    }
    router.push(`/search?${params.toString()}`)

    
  }
  return (
    <div className='flex gap-2 items-center'> 
     <p className='text-text-color text-sm leading-5 font-medium'> Sort by:</p>
     <select onChange={handleSorting} className='rounded-lg border border-[#E5E7EB] py-2 pl-4 pr-7 bg-white focus:ring-2 focus:ring-main-color  foucs:outline-none focus:border-green-500 transitions-all' name="sort"  >
      <option value={"Relevance"}>Relevance</option>
      <option value="price">Price: Low to High</option>
      <option value="-price">Price: High to Low</option>
      <option value="-ratingsAverage">Rating: High to Low</option>
      <option value="title">Name: A to Z</option>
      <option value="-title">Name: Z to A</option>
     </select>
    </div>
  )
}
