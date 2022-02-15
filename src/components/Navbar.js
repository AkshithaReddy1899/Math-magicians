import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/App.module.css';

const Navbar = () => {
  console.log('HI');
  const links = [
    {
      id: 1,
      path: '/home',
      text: 'Home',
    },
    {
      id: 2,
      path: '/',
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
      <nav className={styles.nav}>
        <h1>Math Magicians</h1>
        <ul className={styles.navList}>
          {links.map((link) => (
            <li className={styles.navItem} key={link.id}>
              <NavLink
                to={link.path}
                className={styles.navItem}
                activeClassName="active-link"
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
