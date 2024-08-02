import React from 'react';
import './ProfileHeader.scss';

const ProfileHeader = ({ avatar, name, role }) => (
    <div className="profile-sidebar__header">
        <img src={avatar} alt="Profile" className="profile-sidebar__avatar" />
        <h2 className="profile-sidebar__name">{name}</h2>
        <p className="profile-sidebar__role">{role}</p>
    </div>
);

export default ProfileHeader;
