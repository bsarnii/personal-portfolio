import React from 'react'
import "./About.css"
import ME from "../../assets/mee-about.jpg";
import {FaAward, FaFolderOpen} from "react-icons/fa";

const About = () => {

  return (
    <section id="about">
      <h5>Wer bin ich?</h5>
      <h2>Über mich</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="ich" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Erfahrungen</h5>
              <small>1+ Jahr</small>
            </article>

            {/*<article className="about__card">
              <FaUsers className='about__icon'/>
              <h5>Kundschaft</h5>
              <small>0 Weltweit</small>
            </article>
            */}

            <article className="about__card">
              <FaFolderOpen className='about__icon'/>
              <h5>Projekte</h5>
              <small>10+ individuelle Projekte</small>
            </article>

          </div>
          <p>
              Ich habe meine Interesse nach Frontend Entwicklung in 2021 entdeckt.
              Ich entwickle Webseiten mit Qualitätsbewusstsein
              und ich gebe mein Bestes in jedem Projekt.
          </p>

            <a href="#contact" className='btn btn-primary'>Lass uns sprechen</a>
        </div>
      </div>
    </section>
  )
}

export default About