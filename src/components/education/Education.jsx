import React from 'react'
import './Education.css'

import {FaSchool} from 'react-icons/fa'
import {BiTimer} from 'react-icons/bi'
import {GrScorecard} from 'react-icons/gr'
import {SiFuturelearn} from 'react-icons/si'
import {GrMapLocation} from 'react-icons/gr'
/*import {} from 'react-icons/'*/

const Education = () => {
  return (
    <section id='education'>
      <h5>Where have I studied</h5>
      <h2>My Education</h2>
      <div className="container education__container">
      <div className='thisEdu'>
            <div className='degName'>
              <h3>B.Tech in Computer Science Engineering</h3>
            </div>
            <div className='degInfo'>
            <div className='degPoint'>
                <FaSchool className='degIcon'/>
                <h4>Banasthali Vidyapith</h4>
              </div>
            <div className='degPoint'>
                <GrMapLocation className='degIcon'/>
                <h4>Tonk, Rajasthan, India</h4>
              </div>
              <div className='degPoint'>
                <BiTimer className='degIcon'/>
                <h4>2019-2023</h4>
              </div>
              <div className='degPoint'>
                <GrScorecard className='degIcon'/>
                <h4>9.51/10</h4>
              </div>
              <div className='degPoint'>
                <SiFuturelearn className='degIcon'/>
                <p>Coursework included Data Structure and Algorithm (DSA), Database Management System(DBMS), Design and Analysis of Algorithms(DAA), Systems Programming, Object Oriented Programming(OOPs), Software Engineering, Java Programming, Artificial Intelligence and Machine Learning(AI and ML), Theory of Computation, etc to name a few</p>
              </div>
              
            </div>
          </div>
          <div className='thisEdu'>
            <div className='degName'>
              <h3>Senior Secondary</h3>
            </div>
            
            <div className='degInfo'>
            <div className='degPoint'>
                <FaSchool className='degIcon'/>
                <h4>St Mary's School</h4>
              </div>
              <div className='degPoint'>
                <GrMapLocation className='degIcon'/>
                <h4>Bijnor, Uttar Pradesh, India</h4>
              </div>
              <div className='degPoint'>
                <BiTimer className='degIcon'/>
                <h4>2018-2019</h4>
              </div>
              <div className='degPoint'>
                <GrScorecard className='degIcon'/>
                <h4>94.8%</h4>
              </div>
              <div className='degPoint'>
                <SiFuturelearn className='degIcon'/>
                <p>Coursework included standard ISC board syllabus for subjects Physics, Chemistry, Maths, English and Computer Applications</p>
              </div>
              
            </div>
          </div>
          <div className='thisEdu'>
            <div className='degName'>
              <h3>Higher Secondary</h3>
            </div>
            
            <div className='degInfo'>
            <div className='degPoint'>
                <FaSchool className='degIcon'/>
                <h4>St Mary's School</h4>
              </div>
              <div className='degPoint'>
                <GrMapLocation className='degIcon'/>
                <h4>Bijnor, Uttar Pradesh, India</h4>
              </div>
              <div className='degPoint'>
                <BiTimer className='degIcon'/>
                <h4>2016-2017</h4>
              </div>
              <div className='degPoint'>
                <GrScorecard className='degIcon'/>
                <h4>94.5%</h4>
              </div>
              <div className='degPoint'>
                <SiFuturelearn className='degIcon'/>
                <p>Coursework included standard ICSE board syllabus for subjects Science, English, Computer Applications, Geography, Maths and Hindi</p>
              </div>
              
            </div>
          </div>
          <div className='thisEdu'>
            <div className='degName'>
              <h3>Certificate in Android App Development</h3>
            </div>
            <div className='degInfo'>
            <div className='degPoint'>
                <FaSchool className='degIcon'/>
                <h4>Banasthali Vidyapith</h4>
              </div>
              <div className='degPoint'>
                <BiTimer className='degIcon'/>
                <h4>2019-2020</h4>
              </div>
              <div className='degPoint'>
                <GrScorecard className='degIcon'/>
                <h4>81.5%</h4>
              </div>
              
            </div>
          </div>
          <div className='thisEdu'>
            <div className='degName'>
              <h3>Certificate in German Language</h3>
            </div>
            <div className='degInfo'>
            <div className='degPoint'>
                <FaSchool className='degIcon'/>
                <h4>Banasthali Vidyapith</h4>
              </div>
              <div className='degPoint'>
                <BiTimer className='degIcon'/>
                <h4>2020-2021</h4>
              </div>
              <div className='degPoint'>
                <GrScorecard className='degIcon'/>
                <h4>82%</h4>
              </div>
              
            </div>
          </div>
          <div className='thisEdu'>
            <div className='degName'>
              <h3>Game Development Using python</h3>
            </div>
            <div className='degInfo'>
            <div className='degPoint'>
                <FaSchool className='degIcon'/>
                <h4>Guvi</h4>
              </div>
              <div className='degPoint'>
                <BiTimer className='degIcon'/>
                <h4>2021</h4>
              </div>
              
            </div>
          </div>
      </div>
    </section>
  )
}

export default Education
