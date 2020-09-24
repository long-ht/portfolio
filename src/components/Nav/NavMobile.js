import React from 'react'
import { Link } from 'react-router-dom';

const NavMobile = () => {
    const onClick = () => {
        const e = document.getElementById("dropdown");
        if (e.className === "hidden") {
            e.className = "drop";
        } else {
            e.className = "hidden";
        }
    }
    return (
        <div className="mobile-nav">
            <p>Long Tran</p>
            <a className="drop-button" onClick={e => onClick()}><i className="las la-bars"></i></a>
            <div id="dropdown" className="hidden">
                <Link to="/">Profile</Link>
                <Link to="/education">Education</Link>
                <Link to="/notable-projects">Notable Projects</Link>
                <Link to="/other-projects">Other Projects</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div >
    )
}

export default NavMobile
