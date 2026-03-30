import React from 'react';
import './MenuBar.css';

const imgLogo = "https://www.figma.com/api/mcp/asset/604f8a5d-9c99-44c3-85f2-e4f777f45fb4";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'home', href: '/' },
  { label: 'projects', href: '/projects' },
  { label: 'contact', href: '/contact' },
];

export default function MenuBar() {
  const currentPath = window.location.pathname;

  return (
    <nav className="menu-bar">
      <a href="/" className="logo-link">
        <img src={imgLogo} alt="Jessi Shin logo" className="logo" />
      </a>
      <ul className="nav-items">
        {navItems.map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              className={`nav-link ${currentPath === href ? 'nav-link--active' : ''}`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
