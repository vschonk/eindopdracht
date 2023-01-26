import React from 'react';
import { NavLink } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
    return(
        <ul className="navbox">
            <span>Victor Schonk</span>
            <img className="avatar" src='/images/test.png' alt="huh?" />

            <li><NavLink to="/">Dashboard</NavLink></li>
            <li><NavLink to="/Tasks">Tasks</NavLink></li>
            <li><NavLink to="/Websites">Websites</NavLink></li>
            <li><NavLink to="/Spellbook">Spellbook</NavLink></li>
        </ul>
    );
}
export default Nav