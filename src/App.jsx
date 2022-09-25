import './App.css';
import Header from "./components/header/Header"
import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Experience from "./components/experience/Experience"
import Nav from "./components/nav/Nav"
import Footer from "./components/footer/Footer"
import Services from "./components/services/Services"
import Portfolio from "./components/portfolio/Portfolio"
import React, { useMemo, useState } from 'react';
import handleViewport from 'react-in-viewport';

function App() {
  //Initializing state
  const [inView,setInView] = useState({
    header: true,
    about: false,
    experience: false,
    services: false,
    contact: false
   })
  // Set viewport states
    const headerEnter = () => {
      setInView({
        header:true,
        about:false,
        experience:false,
        services: false,
        contact:false
      })
    }
    const aboutEnter = () => {
      setInView({
        header:false,
        about:true,
        experience:false,
        services: false,
        contact:false
      })
    }
    const experienceEnter = () => {
      setInView({
        header:false,
        about:false,
        experience:true,
        services: false,
        contact:false
      })
    }
    const servicesEnter = () => {
      setInView({
        header:false,
        about:false,
        experience:false,
        services: true,
        contact:false
      })
    }
    const contactEnter = () => {
      setInView({
        header:false,
        about:false,
        experience:false,
        services: false,
        contact:true
      })
    }
    // Creating viewport Components
    const ViewportHeader = handleViewport(Header);
    const ViewportAbout = handleViewport(About);
    const ViewportExperience = handleViewport(Experience);
    const ViewportServices = handleViewport(Services);
    const ViewportContact = handleViewport(Contact);

    // creating memo hook to not rerender
    const header= useMemo(()=><ViewportHeader onEnterViewport={headerEnter}/>,[])
    const about = useMemo(()=><ViewportAbout onEnterViewport={aboutEnter}/>,[])
    const experience = useMemo(()=><ViewportExperience onEnterViewport={experienceEnter}/>,[])
    const services = useMemo(()=><ViewportServices onEnterViewport={servicesEnter}/>,[])
    const contact = useMemo(()=><ViewportContact onEnterViewport={contactEnter}/>,[])
  return (
    <>
      <Nav view={inView} />
      {header}
      {about}
      {experience}
      {services}
      <Portfolio />
      {contact}
      <Footer />
    </>
  );
}

export default App;
