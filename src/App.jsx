import './App.css';
import Header from "./components/header/Header"
import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Experience from "./components/experience/Experience"
import Nav from "./components/nav/Nav"
import Footer from "./components/footer/Footer"
import Services from "./components/services/Services"
import Portfolio from "./components/portfolio/Portfolio"

function App() {

  return (
    <>
      <Header />
      <Nav />
      <About/>
      <Experience />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
