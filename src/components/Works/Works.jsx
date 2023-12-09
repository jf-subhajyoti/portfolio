import React from 'react';

import './Works.css';

const Works = () => {
    return (
        <div className='works__wrapper'>
            <div className="works__left">
                <div className="works__left--work">
                    <span>Been part of all these</span>
                    <span>Organisations & Brands</span>
                </div>
                <button className='button works__btn'>Download CV</button>
            </div>
            <div className="works__right">I'm the right side</div>
        </div>
    )
}

export default Works
