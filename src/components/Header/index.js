import React from 'react'
import Link from 'gatsby-link'
import styles from './header.module.css'
import whiteLogo from '../../assets/reactathon-logo-white.svg'

const Header = () => (
  <header className={styles.header}>
    <img src={whiteLogo} alt="Reactathon logo" />
    <nav className={styles.nav}>
      <Link to="/#">Home</Link>
      <Link to="/#conference">Conference</Link>
      <Link to="/#additional-events">Workshops</Link>
      <Link to="/#additional-events">Hackathon</Link>
      <Link to="/#additional-events">Hiring Mixer</Link>
    </nav>
  </header>
)

export default Header
