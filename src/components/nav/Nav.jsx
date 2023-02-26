import React from 'react'
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai"
import { BiBook } from "react-icons/bi"
import { MdContactMail } from "react-icons/md"
import { TbHeartRateMonitor } from "react-icons/tb"
import "./Nav.css"

const Nav = ({view}) => {

  return (
    <nav>
      <a href="#header" className={view.header === true ? "active" : ""}><AiOutlineHome/></a>
      <a href="#about" className={view.about === true ? "active" : ""}><AiOutlineUser/></a>
      <a href="#experience" className={view.experience === true ? "active" : ""}><BiBook/></a>
      <a href="#portfolio" className={view.portfolio === true ? "active" : ""}><TbHeartRateMonitor/></a>
      <a href="#contact" className={view.contact === true ? "active" : ""}><MdContactMail/></a>
    </nav>
  )

}

export default Nav