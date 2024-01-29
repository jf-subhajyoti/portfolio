import React from 'react';

import './Toggle.css';

import { useThemeContext } from '../../ThemeContext';

import Sun from '@iconscout/react-unicons/icons/uil-sun';
import Moon from '@iconscout/react-unicons/icons/uil-moon';

const Toggle = () => {
    const { darkTheme, updateTheme } = useThemeContext();

    return (
        <div className='toggle'>
            <div title='Toggle Theme' className="t-button" style={darkTheme ? {left: '2px'} : {right : '2px'}} onClick={updateTheme}></div>
            <Moon className='toggle--icon' />
            <Sun className='toggle--icon' />
        </div>
    )
}

export default Toggle;
