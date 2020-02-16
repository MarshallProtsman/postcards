import React from 'react';
// import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import './NavMenu.css';

function NavMenu( {selected, onUpdateSection} ) {
    const sections = ['About', 'Projects', 'Contact']
    return (
        <ul className='flex-center'>
            {sections.map(section => (
                <li key={section}>
                    <button className = 'btn-clear nav-link'>
                        {section}
                        </button>
                </li>
            ))}
        </ul>

    )
}

export default NavMenu