import React from 'react';

import './Navbar.css';

const Navbar = () => {
    return (
        <div className='nav__wrapper'>
            <div className="nav__left">
                <div className="nav__name">Subhajyoti</div>
                <span>toggle</span>
            </div>
            <div className="nav__right">
                <div className="nav__list">
                    <ul>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Portfolio</li>
                        <li>Testimonials</li>
                    </ul>
                </div>
                <button className='button nav__btn'>
                    Contact
                </button>
            </div>
        </div>
    )
}

export default Navbar
