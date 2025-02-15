import React from "react";
import { FaPhone, FaCalendarAlt } from "react-icons/fa";
import "./Header.scss";

const Header = ({ title }) => {
  return (
    <div className="header">
      <div className="header__left">
        {title && <span className="header__title">{title}</span>}
      </div>
      <div className="header__right">
        <FaPhone className="header__icon" />
        <FaCalendarAlt className="header__icon" />
        <span className="header__date">Aug 20, 2023</span>
        <div className="header__profile">
          <img src="/actor-2.png" alt="User" className="header__avatar" />
          <span className="header__name">Rabada</span>
          <span className="header__arrow">➔</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
