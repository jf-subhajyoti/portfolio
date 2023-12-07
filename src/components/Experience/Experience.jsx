import React from 'react';

import { employementDetails } from '../../constants';
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
        <div className='experience__Wrapper'>
            <div className="achievement">
                <div className="circle">{calculateDifferenceInYears(employementDetailsCopy.dateOfJoiningOfFirstJob)}+</div>
                <span>years</span>
                <span>Experience</span>
            </div>
            <div className="achievement">
                <div className="circle">{employementDetailsCopy.totalNoOfProjects}+</div>
                <span>completed</span>
                <span>Projects</span>
            </div>
            <div className="achievement">
                <div className="circle">{employementDetailsCopy.workExperience.length}+</div>
                <span>companies</span>
                <span>Worked</span>
            </div>
        </div>
    )
}

export default Experience
