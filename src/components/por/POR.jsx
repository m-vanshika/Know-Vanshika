import React from 'react'
import './POR.css'
import {FaHandPointRight} from 'react-icons/fa'
const POR = () => {
  return (
  <section id='por'>
  <h5>How responsible am I</h5>
  <h2>Positions of Responsibility</h2>
  <div className="container container__por">
  <div className='por'>
      <div className='main'>
        <h3 className='head'>Technical Member at HackerEarth Hub Banasthali Vidyapith</h3>
      </div>
      <div className="content">
        <ul>
        <li>
          <FaHandPointRight className='hand__icon'/>
          <small className='content_text'>Organised a Coding contest</small>
                            
          </li>
          <li>
          <FaHandPointRight className='hand__icon'/>
          <small className='content_text'>Developed the official website</small>
                            
          </li>
          <li>
          <FaHandPointRight className='hand__icon'/>
          <small className='content_text'>Conducted a two days workshop on server side attacks-Ethical Hacking</small>
                            
          </li>
        </ul>
      </div>
    </div>
    <div className='por'>
    <div className='main'>
        <h3 className='head'>Mentor at UAceIt Winter of Mentorship</h3>
      </div>
      <div className="content">
          <ul>
          <li>
            <FaHandPointRight className='hand__icon'/>
            <small className='content_text'>Mentored 13 students to make an Android app</small>
                              
            </li>
            <li>
            <FaHandPointRight className='hand__icon'/>
            <small className='content_text'>Taught them from the basic of android app development.</small>
                              
            </li>
          </ul>
      </div>
      
      
    </div>
  </div>
  </section>
  )
}

export default POR