import React from 'react'
import './CodingProfile.css'
import l1 from '../../assets/l1.png'
import l2 from '../../assets/l2.png'
import l3 from '../../assets/l3.png'
import l4 from '../../assets/l4.png'
const CodingProfile = () => {
  return (
  <section id='cp'>
  <h5>Where can I be found often</h5>
  <h2>Coding Profiles</h2>
  <div className="container container__cp">
      <div className='list1'>
      <div className='listItem1'>
      <p><a href='https://www.hackerrank.com/m_vanshika'><img src={l1}alt="Hackerrank" /></a>
      </p>
        </div>
        <div className='listItem1'>
        <p><a href='https://auth.geeksforgeeks.org/user/mvanshika'><img src={l2}alt="GFG" /></a></p>
        </div><div className='listItem1'>
        <p><a href='https://www.hackerearth.com/@vanshikav.kumar'><img src={l3}alt="HackerEarth" /></a></p>
        </div><div className='listItem1'>
        <p><a href='https://leetcode.com/m-vanshika/'><img src={l4}alt="LeetCode" /></a></p>
        </div>
      </div>
  </div>
  </section>
  )
}

export default CodingProfile