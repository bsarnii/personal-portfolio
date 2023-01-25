import React from 'react'
import "./Services.css"
import {BiCheck} from "react-icons/bi"

const Services = ({forwardedRef}) => {
  return (
    <section id="services" >
      <h5>Was ich anbiete</h5>
      <h2>Service</h2>

      <div className="container services__container">
      {/*Web Development*/}
        <article className="service">
          <div className="service__head">
            <h3 ref={forwardedRef}>Web Entwicklung</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Erstllung von Fontend-Webseiten mit verschiedene Web-Frameworks (React / Angular / Vanilla JS)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>API implementierung</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Responsive Web Entwicklung auf PC / Tablet / Handy</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>browser- und geräteübergreifende Website-Optimierung</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>erstellte Webseite ins Internet veröffentlichen</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services