import React from 'react';
import './ProfileMember.scss';

const ProfileMember = ({ member }) => (
    <li className="profile-sidebar__member-item">
        <div className="profile-sidebar__member-info">
            <img src={member.avatar} alt={member.name} className="profile-sidebar__member-avatar" />
            <div>
                <p className="profile-sidebar__member-name">{member.name}</p>
                <p className={`profile-sidebar__member-status ${member.status === 'Online' ? 'profile-sidebar__member-status--online' : 'profile-sidebar__member-status--offline'}`}>{member.status}</p>
            </div>
        </div>
        <div className="profile-sidebar__member-icon">
            <i className="fas fa-user"></i>
        </div>
    </li>
);

export default ProfileMember;
