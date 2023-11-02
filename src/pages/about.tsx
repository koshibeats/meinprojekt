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
            Welcome to WavStash, a team of seven dedicated music producers who develop high-quality sound kits for music producers all around the world. Our team is made up of experienced producers, composers, and sound engineers who understand the music industry and what it takes to make excellent music.

WavStash takes pride in our attention to detail and the high quality of our sound kits. We recognize that the correct sound can make or break a song, and we work relentlessly to guarantee that our sound kits give the greatest results possible. We have a vast choice of sounds in our library, covering a wide range of genres such as Hip-Hop, Pop, R&B, and many more.

We are enthusiastic about our job and dedicated to offering great customer service to our clients. We are always available to answer your questions and provide assistance to ensure that you get the most out of our sound kits.


            </h2>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
