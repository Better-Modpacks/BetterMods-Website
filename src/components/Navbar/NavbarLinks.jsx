import { faGear, faHome, faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function NavbarLinks() {
    const links = [
        {
            name: "Home",
            path: "/",
            icon: faHome
        },
        {
            name: "About",
            path: "/about",
            icon: faInfoCircle
        },
        {
            name: "Modpacks",
            path: "/modpacks",
            icon: faGear
        },
    ]

    function NavbarLink({ link }) {
        return (
            <li className="nav-item">
                <a className="nav-link" href={link.path} aria-label={link.name}><FontAwesomeIcon icon={link.icon} />{link.name}</a>
            </li>
        )
    }

    return (
        <ul>
            {links.map((link, index) => <NavbarLink key={index} link={link} />)}
        </ul>
    )
}
