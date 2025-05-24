"use client"

import { useSession, signIn, signOut } from "next-auth/react"
export default function LoginBtn() {
  return (
    <div className="flex justify-center mt-40">
       <button className="btn btn-primary" onClick={()=>signIn()}> Login </button>
    </div>
  )
}
