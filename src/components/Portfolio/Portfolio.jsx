import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { personalProject } from '../../constants';

import './Portfolio.css';
import 'swiper/css';

const Portfolio = () => {
  return (
    <div className='portfolio__wrapper'>
      <span>Recent Projects</span>
      <span>Portfolio</span>

      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
      >
        {
          personalProject?.map((project, index) => {
            return (
              <SwiperSlide>
                <img src={project.thumbnail} alt={project.name} />
              </SwiperSlide>
            );
          })
        }
      </Swiper>

    </div>
  )
}

export default Portfolio
