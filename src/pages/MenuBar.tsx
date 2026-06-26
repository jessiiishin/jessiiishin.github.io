import React from 'react';
import { Link, useLocation } from 'react-router-dom';

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
    <nav className="flex items-center justify-between py-10">
      <Link to="/" className="block h-[30px]">
        <img src={imgLogo} alt="Jessi Shin logo" className="block h-[30px] w-auto" />
      </Link>
      <ul className="flex items-center gap-[76px]">
        {navItems.map(({ label, to }) => {
          const active = pathname === to;
          return (
            <li key={label}>
              <Link
                to={to}
                className={`font-sans text-sm font-medium no-underline ${
                  active
                    ? 'text-accent underline'
                    : 'text-primary hover:opacity-70'
                }`}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
