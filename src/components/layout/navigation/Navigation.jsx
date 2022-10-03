import React, { useState } from "react";
import "./navigation.scss";
import { NavLink, Link } from "react-router-dom";

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navigation_con">
      <div className="navigation_top">
        <div className="navigation_top_left">
          <div
            className={showMenu ? "toggle change" : "toggle"}
            onClick={() => setShowMenu(!showMenu)}
          >
            <span className="line lineOne"></span>
            <span className="line lineTwo"></span>
            <span className="line lineThree"></span>
          </div>
          <div className="navigation_top_center">
            <Link to="/">
              <img src="" alt="" />
            </Link>
          </div>
          <div className="navigation_top_right">
            <div className="navigation_dot_con">
              <span class="dot"></span>
              <span class="dot"></span>
              <span class="dot"></span>
            </div>
          </div>
        </div>
      </div>
      <div className="navigation_bottom">
        <div
          className={showMenu ? "navigation_links active" : "navigation_links"}
        >
          <ul>
            <li>
              <NavLink to="/">Hjem</NavLink>
            </li>
            <li>
              <NavLink to="/shuttle">Rumfærgen</NavLink>
            </li>
            <li>
              <NavLink to="/trips">Ture</NavLink>
            </li>
            <li>
              <NavLink to="/gallery">Galleri</NavLink>
            </li>
            <li>
              <NavLink to="/safety">Sikkerhed</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Kontakt</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
