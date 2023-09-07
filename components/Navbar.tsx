import React from 'react';
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
    <nav className={styles['menu-container']}>
      {
      menuItems.map((item) => (
        <ActiveLink key={item.href} text={item.text} href={item.href}></ActiveLink>
      ))
      }
    </nav>
  );
};
