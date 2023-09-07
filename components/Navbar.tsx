import React from 'react'
import styles from './Navbar.module.css' 
import { ActiveLink } from './ActiveLink'

export const Navbar = () => {
  return (
    <nav className={styles['menu-container']}>
        <ActiveLink text="Home" href="/"></ActiveLink>
        <ActiveLink text="People" href="/people"></ActiveLink>
        <ActiveLink text="Planets" href="/planets"></ActiveLink>
        <ActiveLink text="Films" href="/films"></ActiveLink>
        <ActiveLink text="Starships" href="/starships"></ActiveLink>
    </nav>
  )
}
