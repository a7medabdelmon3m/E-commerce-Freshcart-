import React from 'react'
import { FaCity, FaPhone } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import ActionButoons from './actionButoons'
import { getUserAddresses } from '@/api/services/route.services';
import EmptyMsg from '@/app/_component/EmptyMsg';
import { AddAndEditModal } from './addAndEditModal';

export default async function AddresseList() {
    
  const addresses = await getUserAddresses();
  return (
    <>
      { !addresses || addresses.length === 0 ? (
              <div className="bg-white rounded-3xl border border-gray-100 p-12 text-center flex justify-center items-center">
                <EmptyMsg 
                title="No Addresses Yet"
                desc={<span className="text-gray-500 mb-6 max-w-sm mx-auto">Add your first delivery address to make checkout faster and easier.</span>}
                icon={<FaLocationDot/>}
                iconStylings="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-5 text-3xl text-gray-400"
                customButton={
                  <AddAndEditModal buttonTitle="Add Your First Address"/>
                }
                />
              </div>
              
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {addresses?.map( (address) => 
              <div key={address._id} className="border border-[#F3F4F6] rounded-2xl p-5 shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A]">
              <div className="flex justify-between gap-4">
                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl flex justify-center items-center bg-[#F0FDF4] text-main-color">
                    <FaLocationDot width={13.5} hanging={18.11} />
                  </div>
                  <div className="flex-1 gap-1">
                    <h3 className="font-bold text-[#101828]">{address.name}</h3>
                    <span className="font-medium text-sm leading-5 text-[#4A5565]">
                      {address.details}
                    </span>
                    <div className="flex flex-wrap gap-4 pt-[7.5px]">
                      <span className="flex gap-1.5 items-center text-text-color font-medium text-sm leading-5">
                        <FaPhone />
                       {address.phone}
                      </span>
                      <span className="flex gap-1.5 items-center text-text-color font-medium text-sm leading-5">
                        <FaCity />
                        {address.city}
                      </span>
                    </div>
                  </div>
                </div>
                <ActionButoons addresseData={address} addresseId={address._id}/>
              </div>
            </div>
            )}
            
          </div>
            )}
    </>
    
  )
}
