import React from 'react';

import { sectionIds } from '../../constants';

import './Navbar.css';

const Navbar = () => {
    const scrollTo = (id) => {
        const elem = document.getElementById(id);
        if(elem) {
            elem.scrollIntoView({behavior: 'smooth', block: 'end'});
        }
    }

    const handleUlClick = (e) => {
        e.stopPropagation();
        if(e?.target?.nodeName === 'LI') {
            let value = e.target.getAttribute('value');
            scrollTo(sectionIds[value]);
        }
    }
    return (
        <>
            <div className='nav__wrapper'>
                <div className="nav__left">
                    <div className="nav__name">Subhajyoti</div>
                    <span>toggle</span>
                </div>
                <div className="nav__right">
                    <div className="nav__list">
                        <ul onClick={handleUlClick}>
                            <li value={'home'}>Home</li>
                            <li value={'experience'}>Experience</li>
                            <li value={'portfolio'}>Portfolio</li>
                        </ul>
                    </div>
                    <button className='button nav__btn' onClick={() => { scrollTo(sectionIds['contact'])}}>
                        Contact
                    </button>
                </div>
            </div>
        </>
    )
}

export default Navbar
