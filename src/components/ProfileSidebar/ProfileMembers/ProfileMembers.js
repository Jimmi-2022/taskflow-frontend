import React from 'react';
import ProfileMember from '../ProfileMember/ProfileMember';

const ProfileMembers = ({ members }) => (
    <div className="profile-sidebar__members">
        <h3 className="profile-sidebar__section-title profile-sidebar__section-title--members">
            MEMBER
            <button className="profile-sidebar__add-button">+</button>
        </h3>
        <ul className="profile-sidebar__member-list">
            {members.map(member => (
                <ProfileMember key={member.id} member={member} />
            ))}
            <li className="profile-sidebar__more-members">12+ more</li>
        </ul>
    </div>
);

export default ProfileMembers;
