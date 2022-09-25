import React from 'react'
import "./Header.css"
import CTA from "./CTA"
import ME from "../../assets/mee.png"
import HeaderSocials from './HeaderSocials'

const Header = ({forwardedRef}) => {
  return (
    <header id='header' ref={forwardedRef}>
      <div className="container header__container">
        <h5>Hallo, ich bin</h5>
        <h1>Arnold</h1>
        <h5 className="text-light">Frontend Entwickler</h5>
        <CTA/>
        <HeaderSocials/>

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Nach unten</a>
      </div>
    </header>
  )
}

export default Header