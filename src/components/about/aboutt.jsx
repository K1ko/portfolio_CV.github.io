import React from 'react'
import "./about.css"
import ME from "../../assets/me-about.jpg"
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import {RiFolderChartLine} from "react-icons/ri"
const aboutt = () => {
  return (
    <section id="about">
    <h5>Get to know</h5>
    <h2>About me</h2>

    <div className="container about__container">
    <div className="about__me">
      <div className="about__me-image">
        <img src={ME} alt = "About Image"/>
      </div>
    </div>

    <div className="about__content">
      <div className="about__cards">
          <article className = "about__card">
            <FaAward className ="about_icon"/>
            <h5>Experience</h5>
            <small>2+ Years Working</small>

          </article>
          <article className = "about__card">
            <FiUsers className ="about_icon"/>
            <h5>Clients</h5>
            <small>50+ Worldwide</small>

          </article>
          <article className = "about__card">
            <RiFolderChartLine className ="about_icon"/>
            <h5>Projects</h5>
            <small>30+ Completed</small>
          </article>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, unde quam eos fuga aut, explicabo tempore ipsam nostrum earum recusandae ipsum provident tempora nobis? Recusandae accusantium voluptatem eligendi magni totam?
        </p>
        <a href="#contact" className="btn btn-primary" >Let's talk</a>
      </div>
    </div>
    </section>

  )
}

export default aboutt