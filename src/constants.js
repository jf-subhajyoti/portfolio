import Nokia from './img/nokia.png';
import JF from './img/j&f.png';

export const employementDetails = {
    dateOfJoiningOfFirstJob : '2021-06-16',
    totalNoOfProjects : '3',
    workExperience: [
        {
            organisation: 'J&F India',
            startDate: '2022/0601',
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