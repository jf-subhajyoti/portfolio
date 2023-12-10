import React from 'react';

import { employementDetails } from '../../constants';

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
            <div className="works__right">
                {
                    employementDetails.workExperience.map((exp, index) => (
                        <div key={exp.startDate} className="works__logoWrapper">
                            <div className="works__logo">
                                <img src={exp.logo} alt="J&F" />
                            </div>
                            <div className="works__details">
                                <div className="works__details--organisation">
                                    <span className='title'>Organisation : </span><span className='description'>{exp.organisation}</span>
                                </div>
                                <div className='works__details--title'>
                                    <span className='title'>Job Title : </span><span className='description'>{exp.jobTitle}</span>
                                </div>
                                <div className='works__details--duration'>
                                    <span className='title'>From : </span><span className='description'>{exp.startDate} to {exp.lastDate}</span>
                                </div>
                            </div>
                        </div>

                    ))
                }
            </div>
        </div>
    )
}

export default Works
