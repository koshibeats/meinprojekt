import React from 'react'
import css from "../styles/store.module.css"
import Image from "next/image"

function store() {
  return (
    <><div>
      <h1 className={css.storeHeader}>Soundkits</h1>
      </div>
      <div className={css.soundkitContainer}>
        <div className = {css.eachSoundkit}>  
        <div className = {css.soundkitEntry}>
          <div className={css.coverImage}><Image
          src="/cover1.jpg"
          width={300}
          height={300}
          alt="Picture of the author" /></div>
          <div className = {css.nameAndPage}>
          <p className = {css.loopkitName}>Loopkit Palace</p>
          <p className = {css.loopkitPrice}>30$</p>
          </div>
          <div className = {css.soundkitEntry}>
          <div className={css.coverImage}><Image
          src="/cover3.jpeg"
          width={300}
          height={300}
          alt="Picture of the author" /></div>
          <div className = {css.nameAndPage}>
          <p className = {css.loopkitName}>Loopkit Palace</p>
          <p className = {css.loopkitPrice}>30$</p>
          </div>
          <div className = {css.soundkitEntry}>
          <div className={css.coverImage}><Image
          src="/cover2.jpeg"
          width={300}
          height={300}
          alt="Picture of the author" /></div>
          <div className = {css.nameAndPage}>
          <p className = {css.loopkitName}>Loopkit Palace</p>
          <p className = {css.loopkitPrice}>30$</p>
          </div>
          </div>
          </div>
          </div>
          </div></div>
          
          </>
          )}
          

export default store
          



        
        

  
     