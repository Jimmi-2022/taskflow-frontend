import React from 'react';
import { FaPhone, FaCalendarAlt } from 'react-icons/fa';
import './Header.scss';

const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <FaPhone className="header__icon" />
            </div>
            <div className="header__right">
                <FaCalendarAlt className="header__icon" />
                <span className="header__date">Aug 20, 2023</span>
                <div className="header__profile">
                    <img
                        src="https://via.placeholder.com/40" // Путь к вашему аватару
                        alt="User"
                        className="header__avatar"
                    />
                    <span className="header__name">Rabada</span>
                    <span className="header__arrow">➔</span>
                </div>
            </div>
        </div>
    );
};

export default Header;
