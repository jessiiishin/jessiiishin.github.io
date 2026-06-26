import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './MenuBar.css';

const imgLogo = "https://www.figma.com/api/mcp/asset/604f8a5d-9c99-44c3-85f2-e4f777f45fb4";

interface NavItem {
  label: string;
  to: string;
}

const navItems: NavItem[] = [
  { label: 'home', to: '/' },
  { label: 'projects', to: '/projects' },
  { label: 'contact', to: '/contact' },
];

export default function MenuBar() {
  const { pathname } = useLocation();

  return (
    <nav className="menu-bar">
      <Link to="/" className="logo-link">
        <img src={imgLogo} alt="Jessi Shin logo" className="logo" />
      </Link>
      <ul className="nav-items">
        {navItems.map(({ label, to }) => (
          <li key={label}>
            <Link
              to={to}
              className={`nav-link ${pathname === to ? 'nav-link--active' : ''}`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
