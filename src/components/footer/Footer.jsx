import React from 'react'
import "./Footer.css"
import { BsLinkedin, BsGithub } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <a href="#header" className="footer__logo">Arnold</a>

      <ul className='permalinks'>
        <li><a href="#header">Home</a></li>
        <li><a href="#about">Über mich</a></li>
        <li><a href="#experience">Erfahrung</a></li>
        <li><a href="#services">Service</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Kontakt</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://linkedin.com/in/arnold-schiopu-3288a41a6" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/bsarnii" target="_blank" rel="noreferrer"><BsGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; 2022 Arnold Schiopu</small>
      </div>
    </footer>
  )
}

export default Footer