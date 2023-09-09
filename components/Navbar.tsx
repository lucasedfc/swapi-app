import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { ActiveLink } from './ActiveLink';
import MenuIcon from '@mui/icons-material/Menu';


const menuItems = [

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`${styles['menu-container']}`}>
      <button className={styles['menu-toggle']} onClick={toggleMenu}
      style={{color: 'black'}}>
        <MenuIcon />
      </button>
      <ul className={`${styles['menu']} ${isMenuOpen ? styles['open'] : ''}`}>
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
