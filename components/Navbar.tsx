import React from "react";
import Link from "next/link";
import css from "../src/styles/navbar.module.css"

function Navbar() {
  return (
    <div className = {css.navbarContainer}>
    <div className={css.logo}>LOGO</div>
    <div className = {css.listContainer}>
    <ul className = {css.list}>
      
      
        <li className = {css.menuElement}>
        <Link href = "/">home</Link>
        </li>
        <li className = {css.menuElement}>
        <Link href = "/about">about</Link>
        </li>
        <li  className = {css.menuElement}>
        <Link href = "/store">store</Link>

        
        </li>
        <li className = {css.menuElement}>
        <Link href = "/contact">contact</Link>
        </li>
        
    </ul>
    </div></div>
  
  ); 
}

export default Navbar;