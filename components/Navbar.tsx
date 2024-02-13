import React from "react";
import Link from "next/link";
//src="./logo.png"
//import css from "../src/styles/navbar.module.css"

function Navbar() {
  return (
    <>
      <div>
        <div className="">
          <img></img>
        </div>
        <div className="flex justify-center items-center bg-black h-15">
          <ul className="flex flex-row ">
            <li className="p-5 text-white grid gap-x-8 grid-cols-2  ">
              <Link href="/">Home</Link>
            </li>
            <li className="p-5 text-white grid gap-x-8 grid-cols-2  ">
              <Link href="/about">About</Link>
            </li>
            <li className="p-5 text-white grid gap-x-8 grid-cols-2 ">
              <Link href="/store">Store</Link>
            </li>
            <li className="p-5 text-white grid gap-x-8 grid-cols-2 ">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Navbar;
