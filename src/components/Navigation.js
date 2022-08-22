import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../planet.png';

const Navigation = () => (
  <nav>
    <div className="title">
      <img src={logo} className="nav-logo" alt="logo" />
      <h2>Space Travelers&apos; Hub</h2>
    </div>
    <ul className="links-items">
      <li>
        <NavLink activeClassName="active" className="link" to="/">
          Rockets
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" className="link" to="/missions">
          Missions
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" className="link" to="/my-profile">
          MyProfile
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
