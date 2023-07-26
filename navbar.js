import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  const [activeLink, setActiveLink] = useState('');

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <NavLink exact to="/" activeClassName="active-link" onClick={() => handleNavLinkClick('/')}>
          NjutaAvLivet
        </NavLink>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink
            to="/"
            activeClassName={activeLink === '/' ? 'active-link' : ''}
            onClick={() => handleNavLinkClick('/')}
          >
            Hem
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Om-oss"
            activeClassName={activeLink === '/Om-oss' ? 'active-link' : ''}
            onClick={() => handleNavLinkClick('/Om-oss')}
          >
            Om oss
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tjänster"
            activeClassName={activeLink === '/tjänster' ? 'active-link' : ''}
            onClick={() => handleNavLinkClick('/tjänster')}
          >
            Tjänster
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/kontakt"
            activeClassName={activeLink === '/kontakt' ? 'active-link' : ''}
            onClick={() => handleNavLinkClick('/kontakt')}
          >
            Kontakt
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
