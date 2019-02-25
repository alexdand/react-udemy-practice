import React from "react";
import "./header.css";

const Header = ({ options, showForm }) => {
  return (
    <header className="header">
      <span>Recipe App</span>
      <ul>
        {options.map((menu, idx) => (
          <li key={idx}>
            <a onClick={showForm}>{menu}</a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
