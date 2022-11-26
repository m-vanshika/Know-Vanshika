import React from 'react'
import './Footer.css'
import {AiFillInstagram,AiFillGithub,AiFillTwitterCircle} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footerLogo'>Vanshika</a>
      <ul className='linksList'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Project</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#achievements">Achievements</a></li>
        <li><a href="#por">Position of Responsibility</a></li>
        <li><a href="#cp">Coding Profile</a></li>
        <li><a href="#contact">Contacts</a></li>
      </ul>
      <div className="footer_socials">
      <a href="https://www.instagram.com/kavyitri_/"><AiFillInstagram/></a>
      <a href="https://twitter.com/medhavee_v"><AiFillTwitterCircle/></a>
      <a href="https://github.com/m-vanshika"><AiFillGithub/></a>
        
      </div>
      <div className="footer_copyright">
        <small>
          &copy; Vanshika. All rights reserved.
        </small>
      </div>
    </footer>
  )
}

export default Footer