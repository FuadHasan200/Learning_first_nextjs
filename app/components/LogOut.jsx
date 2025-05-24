"use client"

import { signOut } from 'next-auth/react'
import React from 'react'

export default function LogOut() {
  return (
    <div>
        <button className='btn btn-primary' onClick={()=>signOut()}>Logout</button>
    </div>
  )
}
