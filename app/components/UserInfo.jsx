"use client"

import { useSession } from 'next-auth/react'


export default function UserInfo() {
    const session = useSession();
  return (
    <div>
        <p className='font-semibold text-2xl my-5'>From client component: </p>
        <p>{JSON.stringify(session)}</p>
    </div>
  )
}
