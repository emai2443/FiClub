/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Header.css";
import Logo from "../../assets/FiClub.png";

const Header = () => {
  return (
    <div className="header">
      <img src={Logo} className="logo" />
      <ul className="header_menu">
        <li>Home</li>
        <li>Programs</li>
        <li>About Us</li>
        <li>Plans</li>
        <li>Testimonials</li>
      </ul>
    </div>
  );
};

export default Header;
