import React from "react";
import "./ProfileMediaFile.scss";

const ProfileMediaFile = ({ file }) => (
  <li className="profile-sidebar__media-item">
    <i className="fas fa-file-alt profile-sidebar__media-icon"></i>
    <div>
      <p className="profile-sidebar__media-name">{file.name}</p>
      <p className="profile-sidebar__media-size">{file.size}</p>
    </div>
  </li>
);

export default ProfileMediaFile;
