import logo from '../../assets/images/logo.png'
import NavbarLinks from './NavbarLinks'

import './Navbar.scss'

export default function Navbar() {
  return (
    <nav>
        <header><img src={logo} loading='lazy' alt='logo' /> <h1>Better Modpacks</h1></header>
        <NavbarLinks />
    </nav>
  )
}
