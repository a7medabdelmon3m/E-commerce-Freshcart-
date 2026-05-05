"use client"
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { FaGripVertical, FaList } from 'react-icons/fa'

export default function LayoutSwitcher() {
const [isList, setIsList] = useState(false)

  return (
    <div className='flex gap-1 bg-[#FFFFFF] rounded-lg border border-[#E5E7EB] p-1 '>
        <Button onClick={() => setIsList(!isList)} className={`h-auto  rounded-md px-2 pt-2.75 pb-3.25 ${isList ? 'bg-white text-text-color':'bg-[#16A34A] text-white'} `}><FaGripVertical /></Button>
        <Button onClick={() => setIsList(!isList)} className={`h-auto  rounded-md px-2 pt-2.75 pb-3.25  ${isList ?  'bg-[#16A34A] text-white':'bg-white text-text-color' }  `}><FaList /></Button>
    </div>
  )
}
