import React, {  } from 'react';
import styles from './Navbar.module.css';
import { ActiveLink } from './ActiveLink';

const menuItems = [
  {
    text: 'Home',
    href: '/',
  },
  {
    text: 'People',
    href: '/people',
  },
  {
    text: 'Films',
    href: '/films',
  },
  {
    text: 'Planets',
    href: '/planets',
  },
  {
    text: 'Starships',
    href: '/starships',
  },
];

export const Navbar = () => {

  return (
    <nav className={`${styles['menu-container']}`}>
      <div className={styles['menu-toggle']}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={styles['menu']}>
        {menuItems.map((item) => (
          <li key={item.href}>
            <ActiveLink text={item.text} href={item.href} />
          </li>
        ))}
      </ul>
      <section>
    <div className="background stars"></div>
    <div className="overlay"></div>
  </section>
    </nav>
  );
};
