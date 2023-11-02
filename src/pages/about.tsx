import React from 'react'

import css from "../styles/about.module.css"

export default function About() {
  return (
    <div>
      
    <div className={css.wrapper}>
      <div className={css.backgroundImage}>
        <div className={css.aboutUsContainer}>
          <div className={css.aboutUsHeaderCon}>
            <h2>About Us </h2>
          </div>
          <div className={css.aboutUsPlaceholderCon}>
            <h2 className={css.aboutUsPlaceholderText}>—</h2>
          </div>
          <div className={css.aboutUsTextCon}>
            <h2 className={css.aboutUsText}>
              We are Aurum. Our history begins in 1945 when Roberto Aurum
              decided to open a clothing store. More down the line the store
              niched itself to jewellrey, becoming the biggest brand of golden
              jewellery in Western Europe.
            </h2>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
