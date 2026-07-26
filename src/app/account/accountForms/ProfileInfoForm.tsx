'use client'
import React from 'react'
import { FaSave, FaUser } from 'react-icons/fa'
import DynamicFeild from './DynamicFeild'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'

export default function ProfileInfoForm() {

    const {control, handleSubmit ,formState :{isSubmitting}} = useForm({

    })
  return (
    <div className='rounded-3xl overflow-hidden bg-white border border-[#F3F4F6] shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A]'>
        <div className='p-6 border-b border-[#F3F4F6] space-y-6'>
            <div className='flex gap-4 items-center'>
                <div className='w-14 h-14 flex justify-center items-center rounded-2xl bg-main-color-subtle'>
                    <FaUser className='text-main-color w-5 h-6'/>
                </div>
                <div className=''>
                    <h3 className='font-bold text-[#101828]'>Profile Information</h3>
                    <p className='text-sm font-medium leading-5 text-text-color'>Update your personal details</p>
                </div>
            </div>
            <form className='space-y-5'>
                <DynamicFeild control={control} label='Full Name' name='name' placeHolder='Enter Your Name' id='_name' />
                <DynamicFeild control={control} label='Email Address' name='email' placeHolder='Enter your email' id='_email' type='email' />
                <DynamicFeild control={control} label='Phone Number' name='phone' placeHolder='01xxxxxxxxx' id='_phone' type='phone' />
                <div className='pt-4 '>
                    <Button className='h-auto rounded-xl py-3 px-6 inline-flex items-center gap-2 text-white font-semibold shadow-[0px_4px_6px_-4px_#16A34A40,0px_10px_15px_-3px_#16A34A40] bg-main-color hover:bg-main-color-hover transition-colors duration-100'>
                        <FaSave/>
                        Save Changes
                    </Button>
                </div>
            </form>
        </div>
        <div className='p-6 space-y-4 bg-[#F9FAFB]'>
            <h3 className='font-bold text-[#101828]'>Account Information</h3>
            <div className='space-y-3'>
                <div className='flex justify-between items-center'>
                    <span className='text-sm font-medium leading-5 text-text-color'>User ID</span>
                    <span className='text-sm font-medium font-mono leading-5 text-text-color'>—</span>
                </div>
                <div className='flex justify-between items-center'>
                    <span className='text-sm font-medium leading-5 text-text-color'>Role</span>
                    <span className='px-3 py-1 bg-main-color-subtle rounded-lg text-main-color-hover'>User</span>
                </div>
            </div>
        </div>
    </div>
  )
}
