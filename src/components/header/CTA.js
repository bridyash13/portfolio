import React from 'react'
import cv from '../../images/Yash_Brid_Resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
    <a href={cv} download className='btn'>Download CV</a>
    </div>
  )
}

export default CTA