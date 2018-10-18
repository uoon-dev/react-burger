import React from 'react';

import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationTimes from '../NavigationItems/NavigationItems'; 

const toolbar = props => (
    <header className={classes.Toolbar}>
        <div>MENU</div>
        <div className={classes.Logo}>
            <Logo/>
        </div>
        <nav>
            <NavigationTimes/>
        </nav>
    </header>
);

export default toolbar;