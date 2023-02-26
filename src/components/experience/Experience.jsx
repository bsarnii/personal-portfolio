import React from 'react'
import "./Experience.css"
import { BsFillPatchCheckFill } from "react-icons/bs"

const Experience = ({forwardedRef}) => {
  return (
    <section id="experience" >
      <h5>Diese Web-Technologien kenne ich</h5>
      <h2>Meine Erfahrungen</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3 ref={forwardedRef}>Frontend Entwicklung</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>SASS/SCSS</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Typescript</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Angular</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>React</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Git</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience