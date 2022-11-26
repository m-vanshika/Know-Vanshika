import React from 'react'
import './Nav.css'
import {AiFillHome} from 'react-icons/ai'
import {FaUserCircle} from 'react-icons/fa'
import {RiComputerFill} from 'react-icons/ri'
import {MdOutlineWork} from 'react-icons/md'
import {GiBookCover} from 'react-icons/gi'
import {GiAchievement} from 'react-icons/gi'
import {MdContactPhone} from 'react-icons/md'
import { useState } from 'react'
const Nav = () => {
  const[activeNav,setActiveNav]=useState('#')
  return (
    <nav>
    <a href="#" onClick={()=> setActiveNav('#')} className={activeNav==='#'?'active':''} ><AiFillHome/></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav==='#about'?'active':''} ><FaUserCircle/></a>
      <a href="#skills"  onClick={()=> setActiveNav('#skills')} className={activeNav==='#skills'?'active':''} ><RiComputerFill/></a>
      <a href="#experience"  onClick={()=> setActiveNav('#experience')} className={activeNav==='#experience'?'active':''} ><MdOutlineWork/></a>
      <a href="#education"  onClick={()=> setActiveNav('#education')} className={activeNav==='#education'?'active':''} ><GiBookCover/></a>
      <a href="#achievements"  onClick={()=> setActiveNav('#achievements')} className={activeNav==='#achievements'?'active':''} ><GiAchievement/></a>
      <a href="#contact"  onClick={()=> setActiveNav('#contact')} className={activeNav==='#contact'?'active':''} ><MdContactPhone/></a>
    </nav>
  )
}

export default Nav