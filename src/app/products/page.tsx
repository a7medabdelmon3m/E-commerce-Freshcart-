import { getAllProducts } from '@/api/services/route.services'
import Link from 'next/link'
import React from 'react'
import { FaBoxOpen } from 'react-icons/fa'
import { IoLayers } from 'react-icons/io5'
import ProductCard from '../_component/productCard/ProductCard'

export default async function page() {
    const allproducts = await getAllProducts() ;
    // console.log('de el all product ya 3am', allproducts);
    
  return (
    <section className='bg-[#F9FAFB80] min-h-300'>
        <div className='bg-linear-to-br from-main-color  via-[#22C55E] to-[#4ADE80] '>
             <div className='container mx-auto px-4 py-8 space-y-6 text-white'>
                <nav className='flex gap-2 text-sm leading-5 font-medium'>
                    <Link href={'/'} className='text-[#FFFFFFB2]  hover:text-white transition-colors duration-100'>Home </Link>
                    <span>/</span>
                    <span>All Products</span>
                </nav>
                <div className='flex gap-5'>
                    <div className='w-16 h-16 flex items-center justify-center rounded-2xl bg-[#FFFFFF33] backdrop-blur-sm shadow-[0px_8px_10px_-6px_#0000001A,0px_20px_25px_-5px_#0000001A] text-white text-3xl'>
                        <FaBoxOpen />

                    </div>
                    <div className='flex flex-col gap-1'>
                        <h1 className='text-3xl leading-10 font-bold'>All Products</h1>
                        <p className='text-[#FFFFFFCC] font-medium'>Explore our complete product collection</p>
                    </div>
                </div>
             </div>
        </div>
        <div className='container mx-auto px-4 py-8 space-y-6'>
            <div className='mb-6 text-sm text-text-color font-medium leading-5'>
                Showing 40 products
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6'>
                {allproducts?.map(product => <ProductCard key={product.id} product={product}/>)}
                
            </div>
        </div>
    </section>
  )
}
