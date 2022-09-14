import React from 'react'
import "./experience.css"
import {BsPatchCheckFill} from "react-icons/bs"

const experiencee = () => {
  return (
    <section id = "experience">
      <h5>The Skills I Have</h5>
      <h2>My Experience</h2>
    <div className="container experience__container">
      <div className="experience__frontend">
        <h3>Frontend Development</h3>
        <div className="experience__content">
        <article className ="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>HTML</h4>
            <small className = "text-light">Intermediate user</small>
            </div>
          </article><article className ="experience__details">
          <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>JavaScript</h4>
            <small className = "text-light">Basics</small>
            </div>
          </article><article className ="experience__details">
          <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>React</h4>
            <small className = "text-light">Intermediate user</small>
            </div>
          </article>
        </div>
      </div>
    <div className="experience__backend">
    <h3>Backend Development</h3>
        <div className="experience__content">
        <article className ="experience__details">
        <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Java</h4>
            <small className = "text-light">Intermediate user</small>
            </div>
          </article><article className ="experience__details">
          <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>C#</h4>
            <small className = "text-light">Intermediate user</small>
            </div>
          </article><article className ="experience__details">
          <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>PHP</h4>
            <small className = "text-light">Basics</small>
          </div>
          </article>
          <article className ="experience__details">
          <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Python</h4>
            <small className = "text-light">Advanced User</small>
            </div>
          </article>
          <article className ="experience__details">
          <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>SQL</h4>
            <small className = "text-light">Basics</small>
          </div>
          </article>
          <article className ="experience__details">
          <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Ruby</h4>
            <small className = "text-light">Intermediate user</small>
          </div>
          </article>
        </div>
      
    </div>

    </div>
    </section>
  )
}

export default experiencee