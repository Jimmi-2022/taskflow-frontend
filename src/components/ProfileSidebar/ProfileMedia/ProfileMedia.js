import React from "react";
import "./ProfileMedia.scss";
import ProfileMediaFile from "../ProfileMediaFile/ProfileMediaFile";

const ProfileMedia = ({ mediaFiles }) => (
  <div className="profile-sidebar__media">
    <h3 className="profile-sidebar__section-title profile-sidebar__section-title--media">
      Shared Media
      <button className="profile-sidebar__see-all-button">See all</button>
    </h3>
    <ul className="profile-sidebar__media-list">
      {mediaFiles.map((file) => (
        <ProfileMediaFile key={file.id} file={file} />
      ))}
    </ul>
  </div>
);

export default ProfileMedia;
