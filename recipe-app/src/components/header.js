import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = ({ options }) => {
  return (
    <header className="header">
      <span>Recipe App</span>
      <ul>
        {options.map((menu, idx) => (
          <li key={idx}>
            {/* <Link to="/" /> */}
            {menu}
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
