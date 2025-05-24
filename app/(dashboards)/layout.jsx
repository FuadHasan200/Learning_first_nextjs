import React from 'react'

export default function layoutPage() {
  return (
    <div className='grid grid-cols-12 gap-3 border-2'>
        <div className='col-span-2 border-1'>
           <p>user</p>
        </div>
        <div className='col-span-10'>
           <h1 className='font-semibold text-lg border-1 border-b-blue-500'> dashboard</h1>
        </div>
    </div>
  )
}
