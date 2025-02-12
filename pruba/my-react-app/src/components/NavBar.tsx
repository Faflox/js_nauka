import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/">Dodaj gracza</Link>
        </li>
        <li className="navbar-item">
          <Link to="/matches">Mecze</Link>
        </li>
        <li className="navbar-item">
          <Link to="/bracket">Drabinka</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
