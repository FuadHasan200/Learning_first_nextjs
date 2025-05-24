import Link from 'next/link'
import React from 'react'

export default function NotfoundPage404() {
  return (
    <div className=''>
        <img className='max-w-[150px]' src="/404.jpg" alt="" />
        <h1>404 Not FOUND page</h1>
        <Link href="/">
        <p>Go Back to Home</p>
        </Link>
    </div>
  )
}
