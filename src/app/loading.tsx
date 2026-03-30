import React from 'react'
import { BeatLoader } from 'react-spinners'

export default function loading() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
        <div>
            <BeatLoader size={8} />
            loading
        </div>
        
        </div>
  )
}
