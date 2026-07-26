import React, { ReactNode } from 'react'
import PageHeader from '../_component/PageHeader'
import { FaUser } from 'react-icons/fa'
import Link from 'next/link'
import { FaLocationDot } from 'react-icons/fa6'
import { IoIosArrowForward } from 'react-icons/io'
import AccountSidebar from './accountSidebar'

export default async function layout({children}:{children:ReactNode}) {
  
  return (
    <section className='min-h-screen space-y-8'>
      <PageHeader
        desc="Manage your addresses and account settings"
        title="My Account"
        icon={<FaUser />}
        customName={["My Account"]}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          <AccountSidebar/>
          {children}
        </div>
        
      </div>
    </section>
  )
}
