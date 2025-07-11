"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navbar() {
  const pathname = usePathname();
  // console.log(pathname);
  //  console.log(pathname.includes('dashboard'))
  if (!pathname.includes("dashboard")) {
    return (
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/Services">Services</Link>
              </li>
              <li>
                <Link href="/About">About</Link>
              </li>
              <li>
                <Link href="/products">Products</Link>
              </li>
              <li>
                <Link href="/Add">Add Product</Link>
              </li>
              <li>
                <Link href="/posts">posts</Link>
              </li>
             <li>
                <Link href="/meals"> meals</Link>
             </li>
            
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Lay</a>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="flex gap-5">
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/Services">
              <li>Services</li>
            </Link>
            <Link href="/About">
              <li>About</li>
            </Link>
            <Link href="/products">
              <li>Products</li>
            </Link>
            <Link href="/products/add">
              <li>Add Product</li>
            </Link>
            <Link href="/posts">
              <li>posts</li>
            </Link>
            <Link href="/meals">
            <li>meals</li>
            </Link>
            <Link href="/RegisterForm">
            <li>Register</li>
            </Link>

          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    );
  }
  else{
    return <></>
  }
}
