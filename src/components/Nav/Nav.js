import React from 'react'
import { Link } from 'react-router-dom';
import { PROFILE } from '../../content/content';

const Nav = () => {
    const { name } = PROFILE;
    return (
        <nav className="sidenav">
            <h1 id="highlight">{name}</h1>
            <Link to={`/`}>
                <div className="nav-link">Profile</div >
            </Link>
            <Link to={`/education`}>
                <div className="nav-link">Education</div >
            </Link>
            <Link to={`/notable-projects`}>
                <div className="nav-link">Notable Projects</div >
            </Link>
            <Link to={`/other-projects`}>
                <div className="nav-link">Other Projects</div >
            </Link>
            <Link to={`/contact`}>
                <div className="nav-link">Contact Me</div >
            </Link>
            <a href="https://github.com/long-ht/my-portfolio" target="_blank" rel="noopener noreferrer" id="credit">
                <div className="nav-link">Code by Long Tran <i className="lab la-github" ></i></div >
            </a>
        </nav>
    )
}

export default Nav
