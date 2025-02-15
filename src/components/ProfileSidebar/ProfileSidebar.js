import React from "react";
import "./ProfileSidebar.scss";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import ProfileAbout from "./ProfileAbout/ProfileAbout";
import ProfileMembers from "./ProfileMembers/ProfileMembers";
import ProfileMedia from "./ProfileMedia/ProfileMedia";

const ProfileSidebar = () => {
  const members = [
    { id: 1, name: "Alfredo Carder", status: "Online", avatar: "/actor-1.png" },
    { id: 2, name: "Alfredo Carder", status: "Online", avatar: "/actor-2.png" },
    { id: 3, name: "Alfredo Carder", status: "Online", avatar: "/actor-3.png" },
    {
      id: 4,
      name: "Alfredo Carder",
      status: "Offline",
      avatar: "/actor-4.png",
    },
  ];

  const mediaFiles = [
    { id: 1, name: "Fix Scripps Pdf", size: "1.8 Mb" },
    { id: 2, name: "Fix Scripps Pdf", size: "1.8 Mb" },
    { id: 3, name: "Fix Scripps Pdf", size: "1.8 Mb" },
  ];

  return (
    <div className="profile-sidebar">
      <ProfileHeader
        avatar="/actor-1.png"
        name="Sergio Rabada"
        role="Business Owner"
      />
      <ProfileAbout about="Discussion and Creating design with Superb result!" />
      <ProfileMembers members={members} />
      <ProfileMedia mediaFiles={mediaFiles} />
    </div>
  );
};

export default ProfileSidebar;
