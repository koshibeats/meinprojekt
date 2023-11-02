import React from 'react'
import css from "../src/styles/footer.module.css"

export default function Footer() {
  return (
    
<div className={css.footerContainer}>
<div className="row">

</div>

<div className="row">
<ul className = {css.footerTextContainer}>
<li className = {css.footerText}><a href="#">Contact us</a></li>
<li className = {css.footerText}><a href="#">Our Services</a></li>
<li className = {css.footerText}><a href="#">Privacy Policy</a></li>
<li className = {css.footerText}><a href="#">Terms & Conditions</a></li>
<li className = {css.footerText}><a href="#">Career</a></li>
</ul>
</div>

<div className={css.copyrightText}>
FILIP COPYRIGHT 2021
</div>
</div>
  
   

)}


