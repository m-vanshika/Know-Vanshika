import React from 'react'
import './About.css'
import ME from '../../assets/myPic.jpg'
import {IoIosTime} from 'react-icons/io'
import {GiTargetPrize} from 'react-icons/gi'
import {GoProject} from 'react-icons/go'
const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
    <div className='container about__container'>
      <div className="about__me">
        <img src={ME} alt="" className='my_image'/>
      </div>
      <div className='about__content'>
        <div className="about__cards">
        <article className='about__card'>
            <IoIosTime className='about__icon'/>
            <h5>Experience</h5>
            <small>2-internships</small>
          </article>

         
          <article className='about__card'>
            <GoProject className='about__icon'/>
            <h5>Projects</h5>
            <small>6 Projects</small>
          </article>

          <article className='about__card'>
            <GiTargetPrize className='about__icon'/>
            <h5>HackerRank</h5>
            <small>6 Star problem solving </small>
          </article>

        </div>
        <p>
          Hello all! I am Vanshika. I am in my senior year of B.Tech-Computer Science Engineering from Banathali Vidyapith, Rajasthan, India. I have experienced designing, developing, implementing and testing softwares through the projects that I made during my college and the internships I did. 
          I develop Android applications with ease, but at the same time, I can make websites and games too. I have also worked with machine learning model during my internship at NIC and have also developed programs that run automated test cases. I keep learning new things whenever I get time.

        </p>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
      
    </div>  

    </section>
  )
}

export default About