import React from 'react';
import { CONTACT } from '../../content/content';

const Contact = () => {
    const { msg, git, email, linkedin } = CONTACT;
    return (
        <div className="container">
            <div className="profile">
                <div className="text-content">
                    <h1 style={{ fontSize: "2em" }}>Contact Me</h1>
                    <p>{msg}</p>
                    {git && <a href={git} target="_blank" rel="noopener noreferrer"><i class="lab la-github social" ></i></a>}
                    {email && <a href={"mailto:" + email} target="_blank" rel="noopener noreferrer"><i class="las la-envelope social" ></i></a>}
                    {linkedin && <a href={linkedin} target="_blank" rel="noopener noreferrer"><i class="lab la-linkedin social" ></i></a>}
                </div>
            </div >
        </div >
    )
}

export default Contact;
