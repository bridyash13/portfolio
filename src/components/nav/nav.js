/* eslint-disable */
import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {HiCode} from 'react-icons/hi'
import {BiBook} from 'react-icons/bi'
// import {RiServiceLine} from 'react-icons/ri'
import {AiTwotoneTrophy} from 'react-icons/ai'
import {BsGearWideConnected} from 'react-icons/bs'
import { useState } from 'react'

const Nav = () => {

  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}> <AiOutlineHome></AiOutlineHome> </a>
      <a href="#education" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}> <BiBook></BiBook> </a>
      <a href="#project" onClick={() => setActiveNav('#project')} className={activeNav === '#project' ? 'active' : ''}> <BsGearWideConnected/> </a>
      <a href="#tstack" onClick={() => setActiveNav('#tstack')} className={activeNav === '#tstack' ? 'active' : ''}> <HiCode></HiCode> </a>
    </nav>
  )
}

export default Nav