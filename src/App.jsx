import React from 'react'
import Header from './components/header/Header.jsx'
import Nav from './components/nav/Nav.jsx'
import About from './components/about/About.jsx'
import Footer from './components/footer/Footer.jsx'
import Skills from './components/skills/Skills.jsx'
import Experience from './components/experience/Experience.jsx'
import Education from './components/education/Education.jsx'
import Achievements from './components/achievements/Achievements.jsx'
import Contact from './components/contact/Contact.jsx'
import Project from './components/projects/Projects.jsx'
import POR from './components/por/POR.jsx'
import CodingProfile from './components/codingProfile/CodingProfile'


const App = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Skills/>
      <Experience/>
      <Project/>
      <Education/>
      <Achievements/>
      <POR/>
      <CodingProfile/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App