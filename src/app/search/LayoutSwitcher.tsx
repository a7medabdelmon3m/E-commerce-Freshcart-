"use client"
import { Button } from '@/components/ui/button'
import { FaGripVertical, FaList } from 'react-icons/fa'
import { cartContextType, useCartContext } from '../_context/CartContext'

export default function LayoutSwitcher() {
// const [isList, setIsList] = useState(false)

const {isGrid, updateDisplayLayout} = useCartContext() as cartContextType

  return (
    <div className='flex gap-1 bg-[#FFFFFF] rounded-lg border border-[#E5E7EB] p-1 '>
        <Button onClick={() => updateDisplayLayout(!isGrid)} className={`h-auto  rounded-md px-2 pt-2.75 pb-3.25 ${!isGrid ? 'bg-white text-text-color':'bg-main-color text-white'} `}><FaGripVertical /></Button>
        <Button onClick={() => updateDisplayLayout(!isGrid)} className={`h-auto  rounded-md px-2 pt-2.75 pb-3.25  ${!isGrid ?  'bg-main-color text-white':'bg-white text-text-color' }  `}><FaList /></Button>
    </div>
  )
}
