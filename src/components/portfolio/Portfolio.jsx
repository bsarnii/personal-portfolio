import React from 'react'
import "./Portfolio.css"
import {data} from "./websiteData";


const Portfolio = ({forwardedRef}) => {
  return (
    <section id="portfolio">
      <h5>Meine letzte Projekte</h5>
      <h2>Portfolio</h2>

      <div ref={forwardedRef} className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo, tech, description}) => {
            return (
          <article key={id} className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={image} alt={title}/>
            </div>
            <h3>{title}</h3>
            <div className='build__technologies'>
              <h4>Erstellt mit:</h4>
              <h5>{tech}</h5>
            </div>
            <div className='description'>
              <p>{description}</p>
            </div>
            <div className="portfolio__item-cta">
                <a href={github} target="_blank" rel='noreferrer' className='btn'>GitHub</a>
                <a href={demo} target="_blank" rel='noreferrer' className='btn btn-primary'>Zum Website</a>
            </div>
          </article>
            )
          })
        }
      </div>

    </section>
  )
}

export default Portfolio