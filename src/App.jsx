import React from 'react'
import Header from "./components/header/headerr"
import Nav from "./components/nav/navv"
import About from "./components/about/aboutt"
import Experience from "./components/experience/experiencee"
import Services from "./components/services/servicess"
import Portfolio from "./components/portfolio/portfolioo"
import Testimonials from "./components/testimonials/testimonialss"
import Contact from "./components/contact/contactt"
import Footer from "./components/footer/footerr"


const App = () => {
  return (
    <>
      <Header/>
      <Nav />
      <About />
      <Experience/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App