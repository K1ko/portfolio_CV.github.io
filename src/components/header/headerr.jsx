import React from 'react'
import "./header.css"
import CTA from './CTA'
import ME from  "../../assets/ISIC.jpeg"
import HeaderSocials from './HeaderSocials'

const headerr = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Kristián Červenka</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA/>
        <HeaderSocials />


        <div className="me">
          <img src ={ME} alt ="me"/>
        </div>

        <a href="#contact" className="scroll_down">Scroll Down</a>

      </div>

    </header>
    
  )
}

export default headerr