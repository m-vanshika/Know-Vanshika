import React from 'react'
import './Experience.css'
import NIC from '../../assets/nic.png'
import Barclays from '../../assets/Barclays.png'
import {BsCheckLg} from 'react-icons/bs'

import {SiPython} from 'react-icons/si'
import {SiQgis} from 'react-icons/si'
import {SiTensorflow} from 'react-icons/si'

import {IoLogoBitbucket} from 'react-icons/io'
import {SiJirasoftware} from 'react-icons/si'

import {SiSelenium} from 'react-icons/si'

import {FaJava} from 'react-icons/fa'
import { DiBitbucket } from 'react-icons/di'
import {SiCodeigniter} from 'react-icons/si'
import {AiOutlineDownload} from 'react-icons/ai'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>Where have I worked</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <article className='experience'>
          <div className='experiene__head'>
            <img src={NIC} alt='NIC logo'/>
            <div><h3>Project Intern-National Informatics Centre</h3>
            <small className='text-light'>August'22 to Present</small>
            </div>
            
          </div>
          <h4>Work Done:</h4>
          <ul className='work__done'>
          <li className='point__list'>
              <BsCheckLg className='check_mark'/>
              <p>Worked on geographical data, and images.</p>
            </li>
            <li className='point__list'>
              <BsCheckLg className='check_mark'/>
              <p>Developed a Machine Learning model to segment maps and satellite images.</p>
            </li>
            <li className='point__list'>
              <BsCheckLg className='check_mark'/>
              <p>Used that model to develop a QGIS plugin to generate boundaries of the image.(ShpGenerator Plugin)</p>
            </li>
            <li className='point__list'>
              <BsCheckLg className='check_mark'/>
              <p>Developed another QGIS plugin to manually correct any wrongly generated boundaries.(ShpCorrector Plugin)</p>
            </li>
          </ul>
          <h4>Technologies Used:</h4>
          <div className='tehs__used'>
            <div className='techs'>
              <SiPython className='icon__tech'/>
              <h5>Python</h5>
            </div>
            <div className='techs'>
              <SiQgis className='icon__tech'/>
              <h5>QGIS</h5>
            </div>
            <div className='techs'>
              <SiTensorflow className='icon__tech'/>
              <h5>TensorFlow</h5>
            </div>

          </div>
          <div className='links'>
            <h4>Links to Work:</h4>
            <div className='thisLink'>
              <AiOutlineDownload className='link_icon'/>
              <a href='https://github.com/m-vanshika/SHPFileGenerator' className='link'>ShpGenerator Plugin</a>
            </div>
            <div className='thisLink'>
              <AiOutlineDownload className='link_icon'/>
              <a href='https://github.com/m-vanshika/SHP-File-Corrector' className='link'>ShpCorrector Plugin</a>
            </div>
          </div>
        </article>
        <article className='experience'>
          <div className='experiene__head'>
            <img src={Barclays} alt='Barclays logo'/>
            <div><h3>BA3 Intern-Barclays PLC</h3>
            <small className='text-light'>June'22 to July'22</small>
            </div>
            
          </div>
          <h4>Work Done:</h4>
          <ul className='work__done'>
          <li className='point__list'>
              <BsCheckLg className='check_mark'/>
              <p>Worked as a Test Automation Developer Intern.</p>
            </li>
            <li className='point__list'>
              <BsCheckLg className='check_mark'/>
              <p>Designed and wrote programs that run automatic tests on new UI of one-reg team in Barclays.</p>
            </li>
            <li className='point__list'>
              <BsCheckLg className='check_mark'/>
              <p>Reduced the testing time exponentially as the manual testing would take hours for the task which is done in minutes by automation, which includes report generation.</p>
            </li>
          </ul>
          <h4>Technologies Used:</h4>
          <div className='tehs__used'>
            <div className='techs'>
              <SiSelenium className='icon__tech'/>
              <h5>Selenium</h5>
            </div>
            <div className='techs'>
              <FaJava className='icon__tech'/>
              <h5>Java</h5>
            </div>
            <div className='techs'>
              <SiCodeigniter className='icon__tech'/>
              <h5>Ignite Database</h5>
            </div>
            <div className='techs'>
              <DiBitbucket className='icon__tech'/>
              <h5>BitBucket</h5>
            </div>
            <div className='techs'>
              <SiJirasoftware className='icon__tech'/>
              <h5>Jira and Confluence</h5>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Experience