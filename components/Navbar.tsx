import React from "react";
import Link from "next/link";
//src="./logo.png"
//import css from "../src/styles/navbar.module.css"

function Navbar() {
  return (
    
    <>
    <div>
    <div className=""><img></img></div><div  className="flex justify-center items-center bg-black h-15">
      <ul className="flex flex-row ">


        <li className="p-5 text-white grid gap-x-8 grid-cols-2  ">
          <Link href="/">home</Link>
        </li>
        <li className="p-5 text-white grid gap-x-8 grid-cols-2  ">
          <Link href="/about">about</Link>
        </li>
        <li className="p-5 text-white grid gap-x-8 grid-cols-2 ">
          <Link href="/store">store</Link>


        </li>
        <li className="p-5 text-white grid gap-x-8 grid-cols-2 ">
          <Link href="/contact">contact</Link>
        </li>

      </ul>
    </div></div></>
  
  ); 
}
export default Navbar;