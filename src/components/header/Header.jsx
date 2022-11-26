import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/myPic.jpg'
import ME2 from '../../assets/mypic2.png'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Vanshika .</h1>
        <h5 className="text-light">Student B.Tech CSE</h5>
      <CTA/>
      <HeaderSocials/>
      <div className="me">
        <img src={ME2} alt='MyImage'/>
      </div>
      <a href='#contact' className='scroll__down'>Scroll Down</a>

      </div>
      

    </header>
    
  )
}

export default Header