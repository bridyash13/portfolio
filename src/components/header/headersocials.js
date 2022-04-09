/* eslint-disable */
import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiCodechef} from 'react-icons/si'
import '../header/header.css'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/yash-brid/' target="_blank"><BsLinkedin></BsLinkedin></a>
        <a href='https://github.com/bridyash13' target="_blank"><FaGithub></FaGithub></a>
    </div>
  )
}

export default HeaderSocials