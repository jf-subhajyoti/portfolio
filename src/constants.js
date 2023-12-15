import Nokia from './img/nokia.png';
import JF from './img/j&f.png';
import MovixThumbnail from './img/movix.png';
import SketchboardThumbnail from './img/sketchboard.png';

export const employementDetails = {
    dateOfJoiningOfFirstJob : '2021-06-16',
    totalNoOfProjects : '3',
    workExperience: [
        {
            organisation: 'J&F India',
            startDate: '2022/06/01',
            lastDate: 'Present',
            stillWorking: true,
            jobTitle: 'SDE-1',
            location: 'Noida',
            logo: JF,
        },
        {
            organisation: 'Nokia Solutions and Networks',
            startDate: '2021/06/16',
            lastDate: '2022/05/30',
            stillWorking: false,
            jobTitle: 'Graduate Engineer Trainee',
            location: 'Noida',
            logo: Nokia,
        },
    ]
}

export const personalProject = [
    {
        name: 'Sketchboard',
        thumbnail: SketchboardThumbnail,
        techstack: {
            'front-end': ['React', 'Redux', 'HTML', 'SCSS'],
        }
    },
    {
        name: 'Movix',
        thumbnail: MovixThumbnail,
        techstack: {
            'front-end' : ['React', 'Redux', 'HTML', 'SCSS'],
        }
    }
]