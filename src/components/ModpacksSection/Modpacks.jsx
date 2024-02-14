import { useState } from 'react'
import './Modpacks.scss'
import modpacksAPI from '../../api/modpacks.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Modpacks({ limit }) {
    const [modpacks] = useState(modpacksAPI)

    function handleOpenLink(link) {
        window.open(link, '_blank')
    }
    
    function Modpack({ modpack }) {
        const styles = {
            background: `url(${modpack.background}) center center / cover no-repeat`,
        }
        return (
            <>
                <div className="modpack" style={styles} onClick={() => handleOpenLink(modpack.url)}>
                    <div className="dark-effect"></div>
                    <span>{modpack.name}</span>
                    <div className="github"><FontAwesomeIcon icon={faGithub} /></div>
                </div>
            </>
        )
    }

    return (
        <div className="modpacks">
            {modpacks.reverse().slice(0, limit).map((modpack, index) => <Modpack key={index} modpack={modpack} />)}
        </div>
    )
}
