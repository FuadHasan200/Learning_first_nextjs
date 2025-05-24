"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function About() {
   const router = useRouter();
   const loggedIn = true;
   const handleNavigation = () =>{
    if(loggedIn){
      router.push("/About/Address")
    }
    else{
      router.push("/")
    }
}
  return (
    <div className='font-bold bg-amber-500 text-3xl '>This is about page
    <Link href={`/About/${5}`}>
     <li> Address</li>
    </Link>
    <p>
      <button className='btn btn-primary' type='button' onClick={handleNavigation}></button>
    </p>
    
    </div> 
    
  )
}
