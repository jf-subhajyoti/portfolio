import React from 'react';

import LinkedIn from '../../img/linkedin.png';
import Github from '../../img/github.png';
import Instagram from '../../img/instagram.png';

import Paint from '../../img/paint.png';
import Boy from '../../img/boy.webp';
import Crown from '../../img/crown.png';
import GlassesEmoji from '../../img/glassesimoji.png';

import FloatingDiv from '../FloatingDiv/FloatingDiv';

import './Intro.css';

const Intro = () => {
  return (
    <div className='intro'>
      <div className="intro__left">
        <div className="intro__left--name">
          <span>Hey! I Am</span>
          <span>Subhajyoti Naskar</span>
          <span>Front-end developer transforming ideas into captivating web interfaces with code, creativity, and user-centric design expertise.</span>
        </div>
        <button className='button intro__btn'>Hire Me</button>
        <div className="intro__left--icon">
          <img src={Github} alt="Github" />
          <img src={LinkedIn} alt="LinkedIn" />
          <img src={Instagram} alt="Instagram" />
        </div>
      </div>
      <div className="intro__right">
        <img src={Paint} alt="Paint" />
        <img src={Boy} alt="Boy" />
        <img src={GlassesEmoji} alt="glasses emoji" />
        <div className='floatingdiv__wrapper floatingdiv__wrapper--crown'>
          <FloatingDiv image={Crown} text1="Web" text2="Developer" />
        </div>
        <div className="blur" style={{background: "rgba(238, 210, 255)"}}></div>
        <div className="blur" style={{
          background: "#C1F5FF",
          top: '-2rem',
          width: '21rem',
          height: '11rem',
          left: '-11rem',
        }}></div>
      </div>
    </div>
  )
}

export default Intro;
