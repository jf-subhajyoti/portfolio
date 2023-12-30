import React from 'react';

import Github from '@iconscout/react-unicons/icons/uil-github';

import './ProjectCard.css';

const ProjectCard = ({project}) => {
    const { thumbnail, name, techstack, githubLink, websiteLink } = project;
  return (
    <div className='card project_card'>
        <div className="card__img">
            <img src={thumbnail} alt={name} />
        </div>
        <a className="card__content" href={websiteLink} target='_blank' rel='noreferrer'>
            <div className="card__content--title">
                <span>
                    {name}
                </span>
                <a href={githubLink} target='_blank' rel='noreferrer'>
                    <Github color='white' size='1.5rem' />
                </a>
            </div>
            <div className="technology__container">
                {
                    techstack && Object.keys(techstack)?.map((tech, index) => {
                        return (
                            <div className='technology' key={index}>
                                <div className="technology--title">{tech}</div>
                                <div className="technology--content">
                                    {
                                        techstack[tech]?.map((ele, index) => {
                                            return(
                                                <div className="technology__item">
                                                    <img key={index} src={ele.logo} alt={ele.name} />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </a>
    </div>
  )
}

export default ProjectCard
