import React from 'react'
import ProductCard from '../_component/productCard/ProductCard'
import EmptyMsg from '../_component/EmptyMsg'
import { FaSearch } from 'react-icons/fa'
import { getFillteredProducts } from '@/api/services/route.services';
import Pagination from './Pagination';

export default async function FilterResult(params : {params:any}) {
    const filters = {
    keyword: Array.isArray(params.params.q) ? params.params.q[0] : params.params.q,
    category: params.params.category,
    brand: params.params.brand,
    priceMin: params.params.min,
    priceMax: params.params.max,
    sort: params.params.sort,
    page: params.params.page || "1"
  };
  const response = await getFillteredProducts(filters);
  const filteredProducts = response?.data
  // console.log('filteredProducts',filteredProducts);
  
  if(!filteredProducts || filteredProducts.length === 0) 
    return(
        <div className="min-h-[60vh] px-x flex items-center justify-center">
                  <div className="max-w-md text-center">
                    <EmptyMsg
                      title="No Products Found"
                      desc="Try adjusting your search or filters to find what you're looking for."
                      iconStylings="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-5 text-3xl text-gray-400"
                      buttonName="Clear Filters"
                      icon={<FaSearch />}
                    />
                  </div>
                </div>
            
     )

     return (
                <>
                <div className=" grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {filteredProducts?.map((item) => (
                    <ProductCard key={item.id} product={item} />
                  ))}
                </div>
                <div>
                  {response.metadata.numberOfPages > 1 && 
                    <Pagination length={response.metadata.numberOfPages} />
                  }
              
            </div>
            </>
     )
     

  

}
