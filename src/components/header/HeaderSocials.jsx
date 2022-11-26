import React from 'react'
import {FaLinkedin} from 'react-icons/fa';
import {FaGithubSquare} from 'react-icons/fa'
import {SiHackerrank} from 'react-icons/si'
const HeaderSocials = () => {
  return (
    <div className="header_socials">
    <a href="https://www.linkedin.com/in/m-vanshika/" target="_blank"><FaLinkedin/></a>
        <a href="https://github.com/m-vanshika" target="_blank"><FaGithubSquare/></a>
        <a href="https://www.hackerrank.com/m_vanshika" target="_blank"><SiHackerrank/></a>

    </div>
  )
}

export default HeaderSocials