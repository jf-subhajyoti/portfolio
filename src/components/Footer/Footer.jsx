import React from 'react';

import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin';
import Github from '@iconscout/react-unicons/icons/uil-github';

import Wave from '../../img/wave.png';

import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <img className='footer__img' src={Wave} alt="Wave" />
      <div className="footer__content">
        <span>subhajyoti3845@gmail.com</span>
        <div className="footer__content--icons">
            <a href="https://github.com/jf-subhajyoti" target='_blank' rel='noreferrer'>
                <Github color='white' size='3rem' />
            </a>
            <a href="https://www.linkedin.com/in/subhajyoti-naskar-0312941a1/" target='_blank' rel='noreferrer'>
                <Linkedin color='white' size='3rem' />
            </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
