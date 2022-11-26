import React from 'react'
import './Achievements.css'
import first from '../../assets/first.png'
import second from '../../assets/second.png'
import third from '../../assets/third.png'
import {GiAchievement} from 'react-icons/gi'
const Achievements = () => {
  return (
    <section id='achievements'>
      <h5>Where have I accomplished</h5>
      <h2>My Achievements</h2>
      <div className='container container__achievements'>
        <div className='achievements'>
          <img src={first}/>
          <div className='list'>
            <ul>
            <li className='listItem'>
              <GiAchievement/>
              <a className='listItemLink' href='https://drive.google.com/file/d/1snz5tmYJWjYdRq6a_k3BQzx2lKDXotQm/view?usp=sharing'>HackerEarth Coding Contest Campus Program</a>
              </li>
              <li className='listItem'>
              <GiAchievement/>
              <a className='listItemLink' href='https://drive.google.com/file/d/1V7u4J5ls3tNhX5u_2UKyo3y_WmkoEgJT/view?usp=sharing'>Idea Carnival 2022 by Atal Incubation Centre</a>
              </li>
              <li className='listItem'>
              <GiAchievement/>
              <a className='listItemLink' href='https://drive.google.com/file/d/16mNjo2ovz-tpiExVaobufWMpLyRSzeJZ/view?usp=sharing'>Best Debator- Let's Talk, Girl Up Abhiti</a>
              </li>
              <li className='listItem'>
              <GiAchievement/>
              <a className='listItemLink' href='https://drive.google.com/file/d/1Vb4YUrFCVzvOcSZGAAThXWvYCIjVcWBx/view?usp=sharing'>Winner-Miss Wings-2020, Innovacation Club, Banasthali Vidyapith</a>
              </li>
            </ul>
          </div>
        </div>
        <div className='achievements'>
          <img src={second}/>
          <div className='list'>
            <ul>
            <li className='listItem'>
              <GiAchievement/>
              <a className='listItemLink' href='https://www.linkedin.com/posts/m-vanshika_codeforgood-activity-6939264271214088192-WC3J?utm_source=share&utm_medium=member_desktop'>JPMC Code for Good(Team Event)</a>
              </li>
              <li className='listItem'>
              <GiAchievement/>
              <a className='listItemLink' href='https://drive.google.com/file/d/1VCAiXideScUJ6fvNVXdRn55LLiyoCFBm/view?usp=sharing'>Braniac's Spree(Team Event), Corona, Banasthali Vidyapith</a>
              </li>
              <li className='listItem'>
              <GiAchievement/>
              <a className='listItemLink' href='https://www.instagram.com/p/B86wSncBdF5/'>Matheletes, WAPpers, Banasthali Vidyapith</a>
              </li>
              
            </ul>
          </div>
        </div>
        <div className='achievements'>
          <img src={third}/>
          <div className='list'>
            <ul>
            <li className='listItem'>
              <GiAchievement/>
              <a className='listItemLink' className='listItemLink' href='https://drive.google.com/file/d/1nj4IPOknjOrzqz8itQe0WEo3zQrcpYzL/view?usp=sharing'>GATE Qualified(Score=359)</a>
              </li>
              
            </ul>
          </div>
        </div>
        
      </div>
      </section>
  )
}

export default Achievements