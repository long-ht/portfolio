import React from 'react'
import profile from './profile.png';
import { PROFILE } from '../../content/content';

const Profile = () => {
    const { name, msg, img, skills } = PROFILE;
    return (
        <div className="container">
            <div className="profile">
                <div className="text-content">
                    <h1>Hi my name is {name}</h1>
                    <p>{msg}</p>
                    <p><b>Some technologies I'm proficent at:</b></p>
                    {skills.map(skill => (
                        <div id="tool">{skill}</div>
                    ))}
                </div>
                <div className="profile-pic">
                    <img id="profile-pic" src={profile} alt="profile" />
                </div>
            </div>
        </div>
    )
}

export default Profile
