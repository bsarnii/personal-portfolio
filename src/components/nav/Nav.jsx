import React from 'react'
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai"
import { BiBook } from "react-icons/bi"
import { RiServiceLine } from "react-icons/ri"
import { MdContactMail } from "react-icons/md"
import "./Nav.css"

const Nav = ({view}) => {

  return (
    <nav>
      <a href="#header" className={view.header === true ? "active" : ""}><AiOutlineHome/></a>
      <a href="#about" className={view.about === true ? "active" : ""}><AiOutlineUser/></a>
      <a href="#experience" className={view.experience === true ? "active" : ""}><BiBook/></a>
      <a href="#services" className={view.services === true ? "active" : ""}><RiServiceLine/></a>
      <a href="#contact" className={view.contact === true ? "active" : ""}><MdContactMail/></a>
    </nav>
  )

}

export default Nav