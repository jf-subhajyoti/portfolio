import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import ProjectCard from '../ProjectCard/ProjectCard';

import { personalProject, sectionIds } from '../../constants';

import './Portfolio.css';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

const Portfolio = () => {
  return (
    <div id={sectionIds['portfolio']} className='portfolio__wrapper'>
      <span className='portfolio__wrapper--subHeading'>Recent Projects</span>
      <span className='portfolio__wrapper--heading'>Portfolio</span>

      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
      >
        {
          personalProject?.map((project, index) => {
            return (
              <SwiperSlide key={index}>
                <ProjectCard project={project} />
              </SwiperSlide>
            );
          })
        }
      </Swiper>

    </div>
  )
}

export default Portfolio
