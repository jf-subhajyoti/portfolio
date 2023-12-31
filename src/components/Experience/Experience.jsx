import React from 'react';

import { employementDetails, sectionIds } from '../../constants';
import './Experience.css';

const Experience = () => {

    const employementDetailsCopy = JSON.parse(JSON.stringify(employementDetails));

    const calculateDifferenceInYears = (inputDate) => {
        const currentDate = new Date();
        const inputDateObj = new Date(inputDate);
        const timeDifference = currentDate - inputDateObj;
        return (Math.floor(timeDifference / (365.25 * 24 * 60 * 60 * 1000)));
    }

    return (
        <div id={sectionIds['experience']} className='experience__wrapper'>
            <div className="achievement">
                <div className="circle-outline">
                    <div className="circle">{calculateDifferenceInYears(employementDetailsCopy.dateOfJoiningOfFirstJob)}+</div>
                </div>
                <span>years</span>
                <span>Experience</span>
            </div>
            <div className="achievement">
                <div className="circle-outline">
                    <div className="circle">{employementDetailsCopy.totalNoOfProjects}+</div>
                </div>
                <span>completed</span>
                <span>Projects</span>
            </div>
            <div className="achievement">
                <div className="circle-outline">
                    <div className="circle">{employementDetailsCopy.workExperience.length}+</div>
                </div>
                <span>companies</span>
                <span>Worked</span>
            </div>
        </div>
    )
}

export default Experience
