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
import {SiSelenium} from 'react-icons/si'
import {FaUnity} from 'react-icons/fa'
import {BsPenFill} from 'react-icons/bs'
/*import {} from 'react-icons/'*/
const Skills = () => {
  return (
    <section id='skills'>
      <h5>What am I good at</h5>
      <h2>My Skills</h2>
      <div className='container skills__container'>
        <div className="skills__development">
        <h3>Development</h3>
            <div className="skills__content">
            <article className='skills__details'>
                <DiAndroid className='skills__details-icon'/>
                <div>
                <h4>Android App Development</h4>
                <small className='text-light'>Intermediate</small>
              
                  </div> 
                </article>

              <article className='skills__details'>
                <HiOutlineDesktopComputer  className='skills__details-icon'/>
                <div>
                <h4>Web Development</h4>
                <small className='text-light'>Intermediate</small>
              
                  </div> 
                </article>

              <article className='skills__details'>
                <FaGamepad  className='skills__details-icon'/>
                <div>
                <h4>Game Development</h4>
                <small className='text-light'>Basic</small>
             
                  </div> 
                 </article>
            </div>
          </div>
        <div className="skills__databases">
        <h3>Database</h3>
            <div className="skills__content">
            <article className='skills__details'>
                <SiFirebase  className='skills__details-icon'/>
                <div>
                <h4>FireBase</h4>
                <small className='text-light'>Intermediate</small>
             
                  </div> 
                 </article>
              <article className='skills__details'>
                <SiMysql  className='skills__details-icon'/>
                <div>
                <h4>MySQL</h4>
                <small className='text-light'>Basic</small>
             
                  </div> 
                 </article>
              <article className='skills__details'>
                <SiSqlite  className='skills__details-icon'/>
                <div>
                <h4>SQLite</h4>
                <small className='text-light'>Basic</small>
             
                  </div> 
                 </article>

            </div>
        </div>
        <div className="skills__languages">
            <h3>Languages</h3>
            <div className="skills__content">
              
            <article className='skills__details'>
                <FaJava  className='skills__details-icon'/>
                <div>

                <h4>Java</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className='skills__details'>
                <SiPython  className='skills__details-icon'/>
                <div>
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
              
                  </div> 
                </article>
              
              <article className='skills__details'>
                <SiCplusplus  className='skills__details-icon'/>
                <div>
                <h4>C++</h4>
                <small className='text-light'>Intermediate</small>
              
                </div> 
                </article>

              <article className='skills__details'>
                <SiCodio  className='skills__details-icon'/>
                <div>
                <h4>C</h4>
                <small className='text-light'>Intermediate</small>
              
                </div> 
                </article>


              <article className='skills__details'>
                <AiOutlineConsoleSql  className='skills__details-icon'/>
                <div>
                <h4>SQL</h4>
                <small className='text-light'>Intermediate</small>
              
                </div> 
                </article>


              <article className='skills__details'>
                <AiFillHtml5 className='skills__details-icon'/>
                <div>
                <h4>HTML</h4>
                <small className='text-light'>Basic</small>
              
                </div> 
                </article>

              <article className='skills__details'>
                <IoLogoCss3  className='skills__details-icon'/>
                <div>
                <h4>CSS</h4>
                <small className='text-light'>Basic</small>
              
                </div> 
                </article>

              <article className='skills__details'>
                <DiJavascript1 className='skills__details-icon'/>
                <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Basic</small>
              
                </div> 
                </article>

              <article className='skills__details'>
                <TbCSharp className='skills__details-icon'/>
                <div>
                <h4>C#</h4>
                <small className='text-light'>Basic</small>
             
                </div> 
 </article>


            </div>
          </div>
        
        <div className="skills__others">
          <h3>Miscelaneous</h3>
          <div className="skills__content">
          <article className='skills__details'>
                <AiFillGithub className='skills__details-icon'/>
                <div>
                <h4>Git and GitHub</h4>
                <small className='text-light'>Experienced</small>
              
                </div> 
                </article>
              <article className='skills__details'>
                <IoLogoBitbucket className='skills__details-icon'/>
                <div>
                <h4>BitBucket</h4>
                <small className='text-light'>Experienced</small>
              
                </div> 
                </article>
              <article className='skills__details'>
                <SiJirasoftware className='skills__details-icon'/>
                <div>
                <h4>Jira and Confluence</h4>
                <small className='text-light'>Experienced</small>
              
                </div> 
                </article>
              <article className='skills__details'>
                <FaReact className='skills__details-icon'/>
                <div>
                <h4>React</h4>
                <small className='text-light'>Basic</small>
              
                </div> 
                </article>
              <article className='skills__details'>
                <SiSelenium className='skills__details-icon'/>
                <div>
                <h4>Selenium</h4>
                <small className='text-light'>Intermediate</small>
                  </div>
                </article>
              <article className='skills__details'>
                <FaUnity className='skills__details-icon'/>
                <div>
                <h4>Unity 2D</h4>
                <small className='text-light'>Basic</small>
              
                  </div> 
                </article>
              <article className='skills__details'>
                <BsPenFill className='skills__details-icon'/>
                <div>
                  
                <h4>English</h4>
                <small className='text-light'>Professional Proficiency</small>
              </div>
              </article>
              <article className='skills__details'>
                <BsPenFill className='skills__details-icon'/>
                <div>
                  <h4>Hindi</h4>
                  <small className='text-light'>Professional Proficiency</small>
                </div> 

              </article>
              <article className='skills__details'>
                <BsPenFill className='skills__details-icon'/>
                <div>
                  <h4>German</h4>
                  <small className='text-light'>Basic</small>
                </div>              
              </article>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Skills