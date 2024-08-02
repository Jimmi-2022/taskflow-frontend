import React from 'react';
import './ProfileAbout.scss';

const ProfileAbout = ({ about }) => (
    <div className="profile-sidebar__about">
        <h3 className="profile-sidebar__section-title">ABOUT</h3>
        <p className="profile-sidebar__section-content">{about}</p>
    </div>
);

export default ProfileAbout;
