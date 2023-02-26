import React from 'react'
import "./About.css"
import ME from "../../assets/mee-about.jpg";
import {FaAward, FaFolderOpen} from "react-icons/fa";

const About = ({forwardedRef})  => {
  return (
    <section id="about" >
      <h5>Wer bin ich?</h5>
      <h2>Über mich</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image" ref={forwardedRef}>
            <img src={ME} alt="ich" />
          </div>
        </div>

        <div className="about__content">
          <p>
          Ich beschäftige mich seit 2021 mit der Webentwicklung 
          und habe mich insbesondere auf die Erstellung von Single-Page-Anwendungen mit React und Angular spezialisiert.
          <br/>
          <br/>
          Ich verfüge über ein tiefes Verständnis für die grundlegenden Technologien HTML, CSS und JavaScript und bin in der Lage, 
          diese Sprachen mit den von mir gewählten Frameworks zu integrieren und zu nutzen, um ansprechende Benutzeroberflächen zu erstellen.
          <br/>
          <br/>
          Ich achte darauf, dass die Webanwendungen, die ich entwickle, auf allen Geräten gut aussehen und funktionieren, um die Benutzererfahrung zu optimieren.
          <br/>
          <br/>
          Insgesamt bin ich sehr motiviert, mich als Frontend-Entwickler weiterzuentwickeln und freue mich auf zukünftige Projekte, bei denen ich meine Fähigkeiten einsetzen und erweitern kann.
          </p>

            <a href="#contact" className='btn btn-primary'>Lass uns sprechen</a>
        </div>
      </div>
    </section>
  )
}

export default About