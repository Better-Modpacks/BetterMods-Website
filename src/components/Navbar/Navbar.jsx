import logo from '../../assets/images/logo.png'
import NavbarLinks from './NavbarLinks'

import './Navbar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

export default function Navbar() {
  const [active, setActive] = useState(false)

  function handleMobileMenu() {
    setActive(active ? false : true)
  }

  function NavbarMediaIcon() {
    return (
      <a aria-label='mobile-menu' onClick={() => handleMobileMenu()} id='mobile-menu' href="#"><FontAwesomeIcon icon={faBars} /></a>
    )
  }

  return (
    <nav className={active ? 'active' : ''}>
        <header><img src={logo} loading='lazy' alt='logo' /> <h1>Better Modpacks</h1></header>
        <NavbarLinks />
        <NavbarMediaIcon />
    </nav>
  )
}
