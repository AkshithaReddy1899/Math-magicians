import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/quote',
      text: 'Quote',
    },
  ];
  return (
    <header>
      <nav className="nav">
        <h1>Math Magicians</h1>
        <ul className="navlist">
          {links.map((link) => (
            <li className="navitem" key={link.id}>
              <NavLink
                to={link.path}
                className="navitem"
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
