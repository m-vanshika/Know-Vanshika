import React, { useState } from 'react'
import './Projects.css'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import SHD from '../../assets/shd.png'
import BE from '../../assets/BanasthaliE.png'
import RunB from '../../assets/runB.png'
import hackerHub from '../../assets/hackerHub.png'
import qgis from '../../assets/qgis.png'
import portfolio from '../../assets/portfolio.png'

import {FaHandPointRight} from 'react-icons/fa'
import {FaJava} from 'react-icons/fa'
import {SiCsharp, SiPython, SiQgis} from 'react-icons/si'
import {SiCplusplus} from 'react-icons/si'
import {SiCodio} from 'react-icons/si'
import {AiOutlineConsoleSql} from 'react-icons/ai'
import {AiFillHtml5} from 'react-icons/ai'
import {DiHtml5, DiJavascript1} from 'react-icons/di'
import {IoLogoCss3} from 'react-icons/io'
import {TbCSharp} from 'react-icons/tb'
import {DiAndroid} from 'react-icons/di'
import {HiOutlineDesktopComputer} from 'react-icons/hi'
import {FaGamepad} from 'react-icons/fa'
import {SiFirebase} from 'react-icons/si'
import {SiMysql} from 'react-icons/si'
import {SiSqlite} from 'react-icons/si'
import {AiFillGithub} from 'react-icons/ai'
import {IoLogoBitbucket} from 'react-icons/io'
import {SiJirasoftware} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'
import {MdMobileScreenShare} from 'react-icons/md'
import {FaUnity} from 'react-icons/fa'


const Projects = () => {
    const [slideIndex, setSlideIndex]=useState(0);
    const settings={
        dots:true,
        infinite:true,
        speed:500,
        slidesToShow:3,
        //autoplay:true,
        autoplaySpeed: 1000,
        beforeChange: (current, next)=>setSlideIndex(next)
        ,centerMode:true
    };
    const settings_mobile={
        dots:true,
        infinite:true,
        speed:500,
        slidesToShow:1,
        //autoplay:true,
        autoplaySpeed: 1000,
        beforeChange: (current, next)=>setSlideIndex(next)
        ,centerMode:true
    };
  return (
    <section id='projects'>
    <h5>What have I made</h5>
    <h2>My Projects</h2>
      <div className="container container__projects">
        <Slider {...settings}>
            <div className={0 === slideIndex?'thisProject-active':'thisProject'} key={0}>
                <img src={SHD}/>
                <div className='heading__project'>
                    <h3>Student Help Desk</h3>
                    <small className='text-light'>Android Application</small>
                </div>
                <div className='body__project'>
                    <ul className='list__work__project'>
                    <li className='list_work_point'>
                            <FaHandPointRight className='hand__icon'/>
                            <small className='content_text'>It is a placement management app that maintains records of all the students of a college</small>
                            
                        </li>
                        <li className='list_work_point'>
                            <FaHandPointRight className='hand__icon'/>
                            <small className='content_text'>It helps students to store and update all their data at one place and thus not having to reach out to college placement cell for a small change.</small>
                            
                        </li>
                        <li className='list_work_point'>
                            <FaHandPointRight className='hand__icon'/>
                            <small className='content_text'> But critical information like name, is still locked by the college and only a request to change it can be made by the student.</small>
                            
                        </li>
                        <li className='list_work_point'>
                            <FaHandPointRight className='hand__icon'/>
                            <small className='content_text'> A student also enjoys facility of direct push notification from college/company.</small>
                            
                        </li>
                        <li className='list_work_point'>
                            <FaHandPointRight className='hand__icon'/>
                            <small className='content_text'>FAQ is also provided to help student directly ask questions from faculty of their college and also read other's questions and their answers.</small>
                            
                        </li>
                        
                    </ul>
                    <h4 className='heading_small'>Technology Used:</h4>
                    <div className='tech__used'>
                    <div className='thisTech'>
                            <FaJava className='icon__tech'/>
                            <h5>Java</h5>
                        </div>
                        <div className='thisTech'>
                            <MdMobileScreenShare className='icon__tech'/>
                            <h5>XML</h5>
                        </div>
                        <div className='thisTech'>
                            <SiFirebase className='icon__tech'/>
                            <h5>Firebase</h5>
                        </div>
                    </div>
                    <div className='buttons'>
                        
                        <a href='https://drive.google.com/file/d/1rK9VU7oEMCRgihpoBmxBfhWbKXNh0fGt/view?usp=sharing'  className='btn'>Download</a>
                        <a href="https://github.com/m-vanshika/StudentHelpDesk" className='btn btn-primary'>GitHub</a>
                    </div>
                </div>


            </div>
            <div className={1=== slideIndex?'thisProject-active':'thisProject'} key={1}>
                
                <img src={BE}/>
                <div className='heading__project'>
                    <h3>Banasthali Eats</h3>
                    <small className='text-light'>Android Application</small>
                </div>
                <div className='body__project'>
                    <ul className='list__work__project'>
                    <li className='list_work_point'>
                            <FaHandPointRight className='hand__icon'/>
                            <small className='content_text'>It is a food delivery app to deliver food from the canteens of my college.</small>
                            
                        </li>
                        <li className='list_work_point'>
                            <FaHandPointRight className='hand__icon'/>
                            <small className='content_text'>It allows students to choose the canteens, the food they wanna eat and then place their order.</small>
                            
                        </li>
                        <li className='list_work_point'>
                            <FaHandPointRight className='hand__icon'/>
                            <small className='content_text'>The orders are then stored in firebase, which can be used to deliver the order later.</small>
                            
                        </li>

                    </ul>
                    <h4 className='heading_small'>Technology Used:</h4>
                    <div className='tech__used'>
                    <div className='thisTech'>
                            <FaJava className='icon__tech'/>
                            <h5>Java</h5>
                        </div>
                        <div className='thisTech'>
                            <MdMobileScreenShare className='icon__tech'/>
                            <h5>XML</h5>
                        </div>
                        <div className='thisTech'>
                            <SiFirebase className='icon__tech'/>
                            <h5>Firebase</h5>
                        </div>
                    </div>
                    <div className='buttons'>
                        
                        {/*<a href='' className='btn'>Download</a>*/}
                        <a href="https://github.com/m-vanshika/banasthalieats" className='btn btn-primary'>GitHub</a>
                    </div>
                </div>


            </div>
            <div className={2 === slideIndex?'thisProject-active':'thisProject'} key={2}>
                <img src={RunB} />
                <div className='heading__project'>
                    <h3>Run Bunny</h3>
                    <small className='text-light'>Unity2D Game</small>
                </div>
                <div className='body__project'>
                    <ul className='list__work__project'>
                    <li className='list_work_point'>
                            <FaHandPointRight className='hand__icon'/>
                            <small className='content_text'>It is a simple infinite game made in Unity2D</small>
                            
                        </li>
                        <li className='list_work_point'>
                            <FaHandPointRight className='hand__icon'/>
                            <small className='content_text'>In this game, bunny has to collect the coins and has to cover the maximum distance to make a high score.</small>
                            
                        </li>
                        <li className='list_work_point'>
                            <FaHandPointRight className='hand__icon'/>
                            <small className='content_text'>At the same time bunny also has to prevent itself from falling into the river below the land.</small>
                            
                        </li>

                    </ul>
                    <h4 className='heading_small'>Technology Used:</h4>
                    <div className='tech__used'>
                    <div className='thisTech'>
                            <SiCsharp className='icon__tech'/>
                            <h5>C#</h5>
                        </div>
                        <div className='thisTech'>
                            <FaUnity className='icon__tech'/>
                            <h5>Unity2D</h5>
                        </div>
                    </div>
                    <div className='buttons'>
                        
                        <a href='https://drive.google.com/file/d/1hspnX4FyvTl1R7tBeT-EDY5Jhz8b8QSH/view?usp=sharing'  className='btn'>Download</a>
                        <a href="https://github.com/m-vanshika/Bunny-game" className='btn btn-primary'>GitHub</a>
                    </div>
                </div>


            </div>
            <div className={3 === slideIndex?'thisProject-active':'thisProject'} key={3}>
                <img src={portfolio}/>
                <div className='heading__project'>
                    <h3>My Portfolio</h3>
                    <small className='text-light'>Web Application</small>
                </div>
                <div className='body__project'>
                    <ul className='list__work__project'>
                    <li className='list_work_point'>
                            <FaHandPointRight className='hand__icon'/>
                            <small className='content_text'>It is a website that describes everything about me(Vanshika).</small>
                            
                        </li>
                        <li className='list_work_point'>
                            <FaHandPointRight className='hand__icon'/>
                            <small className='content_text'>It is responsive and can be used on all screen sizes.</small>
                            
                        </li>

                    </ul>
                    <h4 className='heading_small'>Technology Used:</h4>
                    <div className='tech__used'>
                    <div className='thisTech'>
                            <FaReact className='icon__tech'/>
                            <h5>React</h5>
                        </div>
                        <div className='thisTech'>
                            <IoLogoCss3 className='icon__tech'/>
                            <h5>CSS</h5>
                        </div>
                        <div className='thisTech'>
                            <DiHtml5 className='icon__tech'/>
                            <h5>HTML</h5>
                        </div>
                    </div>
                    <div className='buttons'>
                        
                        <a href='#' className='btn'>Visit</a>
                        <a href="" className='btn btn-primary'>GitHub</a>
                    </div>
                </div>


            </div>
            
            <div className={4 === slideIndex?'thisProject-active':'thisProject'} key={4}>
                <img src={hackerHub}/>
                <div className='heading__project'>
                    <h3>HackerEarth Hub Website</h3>
                    <small className='text-light'>Website</small>
                </div>
                <div className='body__project'>
                    <ul className='list__work__project'>
                    <li className='list_work_point'>
                            <FaHandPointRight className='hand__icon'/>
                            <small className='content_text'>It is the official website of HackerEarth Hub Banasthali Vidyapith.</small>
                            
                        </li>
                        <li className='list_work_point'>
                            <FaHandPointRight className='hand__icon'/>
                            <small className='content_text'>It provides basic information about them, like their Aim, events and team members.</small>
                            
                        </li>
                    </ul>
                    <h4 className='heading_small'>Technology Used:</h4>
                    <div className='tech__used'>
                    <div className='thisTech'>
                            <DiJavascript1 className='icon__tech'/>
                            <h5>JavaScript</h5>
                        </div>
                        <div className='thisTech'>
                            <IoLogoCss3 className='icon__tech'/>
                            <h5>CSS</h5>
                        </div>
                        <div className='thisTech'>
                            <DiHtml5 className='icon__tech'/>
                            <h5>HTML</h5>
                        </div>
                    </div>
                    <div className='buttons'>
                        
                        <a href="https://hackerearth-bv.netlify.app/"  className='btn'>Visit</a>
                        <a href='https://github.com/m-vanshika/hackerearthbv' className='btn btn-primary'>GitHub</a>
                    </div>
                </div>


            </div>
            
            <div className={5 === slideIndex?'thisProject-active':'thisProject'} key={5}>
                <img src={qgis}/>
                <div className='heading__project'>
                    <h3>ShpGenerator Plugin</h3>
                    <small className='text-light'>QGIS plugin</small>
                </div>
                <div className='body__project'>
                    <ul className='list__work__project'>
                    <li className='list_work_point'>
                            <FaHandPointRight className='hand__icon'/>
                            <small className='content_text'>It is a QGIS plugin to generate boundaries of a map in the form of a shape file.</small>
                            
                        </li>
                        <li className='list_work_point'>
                            <FaHandPointRight className='hand__icon'/>
                            <small className='content_text'>We used a machine learning model to segment the image and then found it's boundary.</small>
                            
                        </li>
                        <li className='list_work_point'>
                            <FaHandPointRight className='hand__icon'/>
                            <small className='content_text'>The input can be a map or a tiff file,output will be an shp file.</small>
                            
                        </li>

                    </ul>
                    <h4 className='heading_small'>Technology Used:</h4>
                    <div className='tech__used'>
                    <div className='thisTech'>
                            <SiQgis className='icon__tech'/>
                            <h5>QGIS</h5>
                        </div>
                        <div className='thisTech'>
                            <SiPython className='icon__tech'/>
                            <h5>Python</h5>
                        </div>
                    </div>
                    <div className='buttons'>
                        
                        <a href="https://github.com/m-vanshika/SHPFileGenerator" className='btn btn-primary'>GitHub</a>
                    </div>
                </div>


            </div>
            
            <div className={6 === slideIndex?'thisProject-active':'thisProject'} key={6}>
                <img src={qgis}/>
                <div className='heading__project'>
                    <h3>ShpCorrector Plugin</h3>
                    <small className='text-light'>QGIS plugin</small>
                </div>
                <div className='body__project'>
                    <ul className='list__work__project'>
                    <li className='list_work_point'>
                            <FaHandPointRight className='hand__icon'/>
                            <small className='content_text'>It is a QGIS plugin to correct the boundaries of an shp file.</small>
                            
                        </li>
                        <li className='list_work_point'>
                            <FaHandPointRight className='hand__icon'/>
                            <small className='content_text'>Input and output both are shape files containing any geometry type.</small>
                            
                        </li>
                        <li className='list_work_point'>
                            <FaHandPointRight className='hand__icon'/>
                            <small className='content_text'>It uses QGIS editing tools to edit the vector layer.</small>
                            
                        </li>

                    </ul>
                    <h4 className='heading_small'>Technology Used:</h4>
                    <div className='tech__used'>
                    <div className='thisTech'>
                            <SiQgis className='icon__tech'/>
                            <h5>QGIS</h5>
                        </div>
                        <div className='thisTech'>
                            <SiPython className='icon__tech'/>
                            <h5>Python</h5>
                        </div>
                    </div>
                    <div className='buttons'>
                        
                        <a href="https://github.com/m-vanshika/SHP-File-Corrector" className='btn btn-primary'>GitHub</a>
                    </div>
                </div>


            </div>
            </Slider>
      </div>
      <div className="container container__projects_mobile">
        <Slider {...settings_mobile}>
        
        <div className={0 === slideIndex?'thisProject-active':'thisProject'} key={0}>
                <img src={SHD}/>
                <div className='heading__project'>
                    <h3>Student Help Desk</h3>
                    <small className='text-light'>Android Application</small>
                </div>
                <div className='body__project'>
                    <ul className='list__work__project'>
                    <li className='list_work_point'>
                            <FaHandPointRight className='hand__icon'/>
                            <small className='content_text'>It is a placement management app that maintains records of all the students of a college</small>
                            
                        </li>
                        <li className='list_work_point'>
                            <FaHandPointRight className='hand__icon'/>
                            <small className='content_text'>It helps students to store and update all their data at one place and thus not having to reach out to college placement cell for a small change.</small>
                            
                        </li>
                        <li className='list_work_point'>
                            <FaHandPointRight className='hand__icon'/>
                            <small className='content_text'> But critical information like name, is still locked by the college and only a request to change it can be made by the student.</small>
                            
                        </li>
                        <li className='list_work_point'>
                            <FaHandPointRight className='hand__icon'/>
                            <small className='content_text'> A student also enjoys facility of direct push notification from college/company.</small>
                            
                        </li>
                        <li className='list_work_point'>
                            <FaHandPointRight className='hand__icon'/>
                            <small className='content_text'>FAQ is also provided to help student directly ask questions from faculty of their college and also read other's questions and their answers.</small>
                            
                        </li>
                        
                    </ul>
                    <h4 className='heading_small'>Technology Used:</h4>
                    <div className='tech__used'>
                    <div className='thisTech'>
                            <FaJava className='icon__tech'/>
                            <h5>Java</h5>
                        </div>
                        <div className='thisTech'>
                            <MdMobileScreenShare className='icon__tech'/>
                            <h5>XML</h5>
                        </div>
                        <div className='thisTech'>
                            <SiFirebase className='icon__tech'/>
                            <h5>Firebase</h5>
                        </div>
                    </div>
                    <div className='buttons'>
                        
                        <a href='https://drive.google.com/file/d/1rK9VU7oEMCRgihpoBmxBfhWbKXNh0fGt/view?usp=sharing'  className='btn'>Download</a>
                        <a href="https://github.com/m-vanshika/StudentHelpDesk" className='btn btn-primary'>GitHub</a>
                    </div>
                </div>


            </div>
            <div className={1=== slideIndex?'thisProject-active':'thisProject'} key={1}>
                
                <img src={BE}/>
                <div className='heading__project'>
                    <h3>Banasthali Eats</h3>
                    <small className='text-light'>Android Application</small>
                </div>
                <div className='body__project'>
                    <ul className='list__work__project'>
                    <li className='list_work_point'>
                            <FaHandPointRight className='hand__icon'/>
                            <small className='content_text'>It is a food delivery app to deliver food from the canteens of my college.</small>
                            
                        </li>
                        <li className='list_work_point'>
                            <FaHandPointRight className='hand__icon'/>
                            <small className='content_text'>It allows students to choose the canteens, the food they wanna eat and then place their order.</small>
                            
                        </li>
                        <li className='list_work_point'>
                            <FaHandPointRight className='hand__icon'/>
                            <small className='content_text'>The orders are then stored in firebase, which can be used to deliver the order later.</small>
                            
                        </li>

                    </ul>
                    <h4 className='heading_small'>Technology Used:</h4>
                    <div className='tech__used'>
                    <div className='thisTech'>
                            <FaJava className='icon__tech'/>
                            <h5>Java</h5>
                        </div>
                        <div className='thisTech'>
                            <MdMobileScreenShare className='icon__tech'/>
                            <h5>XML</h5>
                        </div>
                        <div className='thisTech'>
                            <SiFirebase className='icon__tech'/>
                            <h5>Firebase</h5>
                        </div>
                    </div>
                    <div className='buttons'>
                        
                        {/*<a href='' className='btn'>Download</a>*/}
                        <a href="https://github.com/m-vanshika/banasthalieats" className='btn btn-primary'>GitHub</a>
                    </div>
                </div>


            </div>
            <div className={2 === slideIndex?'thisProject-active':'thisProject'} key={2}>
                <img src={RunB} />
                <div className='heading__project'>
                    <h3>Run Bunny</h3>
                    <small className='text-light'>Unity2D Game</small>
                </div>
                <div className='body__project'>
                    <ul className='list__work__project'>
                    <li className='list_work_point'>
                            <FaHandPointRight className='hand__icon'/>
                            <small className='content_text'>It is a simple infinite game made in Unity2D</small>
                            
                        </li>
                        <li className='list_work_point'>
                            <FaHandPointRight className='hand__icon'/>
                            <small className='content_text'>In this game, bunny has to collect the coins and has to cover the maximum distance to make a high score.</small>
                            
                        </li>
                        <li className='list_work_point'>
                            <FaHandPointRight className='hand__icon'/>
                            <small className='content_text'>At the same time bunny also has to prevent itself from falling into the river below the land.</small>
                            
                        </li>

                    </ul>
                    <h4 className='heading_small'>Technology Used:</h4>
                    <div className='tech__used'>
                    <div className='thisTech'>
                            <SiCsharp className='icon__tech'/>
                            <h5>C#</h5>
                        </div>
                        <div className='thisTech'>
                            <FaUnity className='icon__tech'/>
                            <h5>Unity2D</h5>
                        </div>
                    </div>
                    <div className='buttons'>
                        
                        <a href='https://drive.google.com/file/d/1hspnX4FyvTl1R7tBeT-EDY5Jhz8b8QSH/view?usp=sharing'  className='btn'>Download</a>
                        <a href="https://github.com/m-vanshika/Bunny-game" className='btn btn-primary'>GitHub</a>
                    </div>
                </div>


            </div>
            <div className={3 === slideIndex?'thisProject-active':'thisProject'} key={3}>
                <img src={portfolio}/>
                <div className='heading__project'>
                    <h3>My Portfolio</h3>
                    <small className='text-light'>Web Application</small>
                </div>
                <div className='body__project'>
                    <ul className='list__work__project'>
                    <li className='list_work_point'>
                            <FaHandPointRight className='hand__icon'/>
                            <small className='content_text'>It is a website that describes everything about me(Vanshika).</small>
                            
                        </li>
                        <li className='list_work_point'>
                            <FaHandPointRight className='hand__icon'/>
                            <small className='content_text'>It is responsive and can be used on all screen sizes.</small>
                            
                        </li>

                    </ul>
                    <h4 className='heading_small'>Technology Used:</h4>
                    <div className='tech__used'>
                    <div className='thisTech'>
                            <FaReact className='icon__tech'/>
                            <h5>React</h5>
                        </div>
                        <div className='thisTech'>
                            <IoLogoCss3 className='icon__tech'/>
                            <h5>CSS</h5>
                        </div>
                        <div className='thisTech'>
                            <DiHtml5 className='icon__tech'/>
                            <h5>HTML</h5>
                        </div>
                    </div>
                    <div className='buttons'>
                        
                        <a href='#' className='btn'>Visit</a>
                        <a href="" className='btn btn-primary'>GitHub</a>
                    </div>
                </div>


            </div>
            
            <div className={4 === slideIndex?'thisProject-active':'thisProject'} key={4}>
                <img src={hackerHub}/>
                <div className='heading__project'>
                    <h3>HackerEarth Hub Website</h3>
                    <small className='text-light'>Website</small>
                </div>
                <div className='body__project'>
                    <ul className='list__work__project'>
                    <li className='list_work_point'>
                            <FaHandPointRight className='hand__icon'/>
                            <small className='content_text'>It is the official website of HackerEarth Hub Banasthali Vidyapith.</small>
                            
                        </li>
                        <li className='list_work_point'>
                            <FaHandPointRight className='hand__icon'/>
                            <small className='content_text'>It provides basic information about them, like their Aim, events and team members.</small>
                            
                        </li>
                    </ul>
                    <h4 className='heading_small'>Technology Used:</h4>
                    <div className='tech__used'>
                    <div className='thisTech'>
                            <DiJavascript1 className='icon__tech'/>
                            <h5>JavaScript</h5>
                        </div>
                        <div className='thisTech'>
                            <IoLogoCss3 className='icon__tech'/>
                            <h5>CSS</h5>
                        </div>
                        <div className='thisTech'>
                            <DiHtml5 className='icon__tech'/>
                            <h5>HTML</h5>
                        </div>
                    </div>
                    <div className='buttons'>
                        
                        <a href="https://hackerearth-bv.netlify.app/"  className='btn'>Visit</a>
                        <a href='https://github.com/m-vanshika/hackerearthbv' className='btn btn-primary'>GitHub</a>
                    </div>
                </div>


            </div>
            
            <div className={5 === slideIndex?'thisProject-active':'thisProject'} key={5}>
                <img src={qgis}/>
                <div className='heading__project'>
                    <h3>ShpGenerator Plugin</h3>
                    <small className='text-light'>QGIS plugin</small>
                </div>
                <div className='body__project'>
                    <ul className='list__work__project'>
                    <li className='list_work_point'>
                            <FaHandPointRight className='hand__icon'/>
                            <small className='content_text'>It is a QGIS plugin to generate boundaries of a map in the form of a shape file.</small>
                            
                        </li>
                        <li className='list_work_point'>
                            <FaHandPointRight className='hand__icon'/>
                            <small className='content_text'>We used a machine learning model to segment the image and then found it's boundary.</small>
                            
                        </li>
                        <li className='list_work_point'>
                            <FaHandPointRight className='hand__icon'/>
                            <small className='content_text'>The input can be a map or a tiff file,output will be an shp file.</small>
                            
                        </li>

                    </ul>
                    <h4 className='heading_small'>Technology Used:</h4>
                    <div className='tech__used'>
                    <div className='thisTech'>
                            <SiQgis className='icon__tech'/>
                            <h5>QGIS</h5>
                        </div>
                        <div className='thisTech'>
                            <SiPython className='icon__tech'/>
                            <h5>Python</h5>
                        </div>
                    </div>
                    <div className='buttons'>
                        
                        <a href="https://github.com/m-vanshika/SHPFileGenerator" className='btn btn-primary'>GitHub</a>
                    </div>
                </div>


            </div>
            
            <div className={6 === slideIndex?'thisProject-active':'thisProject'} key={6}>
                <img src={qgis}/>
                <div className='heading__project'>
                    <h3>ShpCorrector Plugin</h3>
                    <small className='text-light'>QGIS plugin</small>
                </div>
                <div className='body__project'>
                    <ul className='list__work__project'>
                    <li className='list_work_point'>
                            <FaHandPointRight className='hand__icon'/>
                            <small className='content_text'>It is a QGIS plugin to correct the boundaries of an shp file.</small>
                            
                        </li>
                        <li className='list_work_point'>
                            <FaHandPointRight className='hand__icon'/>
                            <small className='content_text'>Input and output both are shape files containing any geometry type.</small>
                            
                        </li>
                        <li className='list_work_point'>
                            <FaHandPointRight className='hand__icon'/>
                            <small className='content_text'>It uses QGIS editing tools to edit the vector layer.</small>
                            
                        </li>

                    </ul>
                    <h4 className='heading_small'>Technology Used:</h4>
                    <div className='tech__used'>
                    <div className='thisTech'>
                            <SiQgis className='icon__tech'/>
                            <h5>QGIS</h5>
                        </div>
                        <div className='thisTech'>
                            <SiPython className='icon__tech'/>
                            <h5>Python</h5>
                        </div>
                    </div>
                    <div className='buttons'>
                        
                        <a href="https://github.com/m-vanshika/SHP-File-Corrector" className='btn btn-primary'>GitHub</a>
                    </div>
                </div>


            </div>
            </Slider>
      </div>
    </section>
  )
}

export default Projects