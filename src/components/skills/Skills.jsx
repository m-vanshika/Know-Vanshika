import React from 'react'
import './Skills.css'
import {FaJava} from 'react-icons/fa'
import {SiPython} from 'react-icons/si'
import {SiCplusplus} from 'react-icons/si'
import {SiCodio} from 'react-icons/si'
import {AiOutlineConsoleSql} from 'react-icons/ai'
import {AiFillHtml5} from 'react-icons/ai'
import {DiJavascript1} from 'react-icons/di'
import {IoLogoCss3} from 'react-icons/io'
import {TbCSharp} from 'react-icons/tb'
import {AiFillAndroid} from 'react-icons/ai'
import {HiOutlineDesktopComputer} from 'react-icons/hi'
import {FaGamepad} from 'react-icons/fa'
import {SiFirebase} from 'react-icons/si'
import {SiMysql} from 'react-icons/si'
import {SiSqlite} from 'react-icons/si'
/*import {} from 'react-icons/'*/
const Skills = () => {
  return (
    <section id='skills'>
      <h5>What am I good at</h5>
      <h2>My Skills</h2>
      <div className='container skills__container'>
        <div className="skills__languages">
            <h3>Languages</h3>
            <div className="skills__content">
              
            <article className='skills__details'>
                <FaJava/>
                <h4>Java</h4>
                <small className='text-light'>Experienced</small>
              </article>

              <article className='skills__details'>
                <SiPython/>
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
              </article>
              
              <article className='skills__details'>
                <SiCplusplus/>
                <h4>C++</h4>
                <small className='text-light'>Intermediate</small>
              </article>

              <article className='skills__details'>
                <SiCodio/>
                <h4>C</h4>
                <small className='text-light'>Intermediate</small>
              </article>


              <article className='skills__details'>
                <AiOutlineConsoleSql/>
                <h4>SQL</h4>
                <small className='text-light'>Intermediate</small>
              </article>


              <article className='skills__details'>
                <AiFillHtml5/>
                <h4>HTML</h4>
                <small className='text-light'>Basic</small>
              </article>

              <article className='skills__details'>
                <IoLogoCss3/>
                <h4>CSS</h4>
                <small className='text-light'>Basic</small>
              </article>

              <article className='skills__details'>
                <DiJavascript1/>
                <h4>JavaScript</h4>
                <small className='text-light'>Basic</small>
              </article>

              <article className='skills__details'>
                <TbCSharp/>
                <h4>C#</h4>
                <small className='text-light'>Basic</small>
              </article>


            </div>
          </div>
        <div className="skills__development">
        <h3>Development</h3>
            <div className="skills__content">
            <article className='skills__details'>
                <AiFillAndroid/>
                <h4>Android App Development</h4>
                <small className='text-light'>Intermediate</small>
              </article>

              <article className='skills__details'>
                <HiOutlineDesktopComputer/>
                <h4>Web Development</h4>
                <small className='text-light'>Intermediate</small>
              </article>

              <article className='skills__details'>
                <FaGamepad/>
                <h4>Game Development</h4>
                <small className='text-light'>Basic</small>
              </article>
            </div>
          </div>
        <div className="skills__databases">
        <h3>Database</h3>
            <div className="skills__content">
            <article className='skills__details'>
                <SiFirebase/>
                <h4>FireBase</h4>
                <small className='text-light'>Intermediate</small>
              </article>
              <article className='skills__details'>
                <SiMysql/>
                <h4>MySQL</h4>
                <small className='text-light'>Basic</small>
              </article>
              <article className='skills__details'>
                <SiSqlite/>
                <h4>SQLite</h4>
                <small className='text-light'>Basic</small>
              </article>

            </div>
        </div>
        <div className="skills__others">
          <h3>Miscelaneous</h3>
          <div className="skills__content">
          <article className='skills__details'>
                <SiSqlite/>
                <h4>Git and GitHub</h4>
                <small className='text-light'>Experienced</small>
              </article>
              <article className='skills__details'>
                <SiSqlite/>
                <h4>BitBucket</h4>
                <small className='text-light'>Experienced</small>
              </article>
              <article className='skills__details'>
                <SiSqlite/>
                <h4>Jira and Confluence</h4>
                <small className='text-light'>Experienced</small>
              </article>
              <article className='skills__details'>
                <SiSqlite/>
                <h4>React</h4>
                <small className='text-light'>Basic</small>
              </article>
              <article className='skills__details'>
                <SiSqlite/>
                <h4>Selenium</h4>
                <small className='text-light'>Intermediate</small>
              </article>
              <article className='skills__details'>
                <SiSqlite/>
                <h4>Unity 2D</h4>
                <small className='text-light'>Basic</small>
              </article>
              <article className='skills__details'>
                <SiSqlite/>
                <h4>English and Hindi Languages</h4>
                <small className='text-light'>Professional Proficiency</small>
              </article>
              <article className='skills__details'>
                <SiSqlite/>
                <h4>German</h4>
                <small className='text-light'>Basic</small>
              </article>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Skills