import './Modpacks.scss'

export default function Modpacks({ limit }) {
    const modpacks = [
        {
            name: 'Vanilla+',
            version: '1.20.1',
            loader: 'fabric',
            url: 'https://github.com/Better-Modpacks/Vanilla-Plus/releases/download/v1.0/Vanilla+.zip',
            background: 'https://wallpapers.com/images/hd/720p-minecraft-background-vm7wpn1tlci2k9o6.jpg'
        },
        {
            name: 'Vanilla+',
            version: '1.20.1',
            loader: 'fabric',
            url: 'https://github.com/Better-Modpacks/Vanilla-Plus/releases/download/v1.0/Vanilla+.zip',
            background: 'https://wallpapers.com/images/hd/720p-minecraft-background-vm7wpn1tlci2k9o6.jpg'
        },
        {
            name: 'Vanilla+',
            version: '1.20.1',
            loader: 'fabric',
            url: 'https://github.com/Better-Modpacks/Vanilla-Plus/releases/download/v1.0/Vanilla+.zip',
            background: 'https://wallpapers.com/images/hd/720p-minecraft-background-vm7wpn1tlci2k9o6.jpg'
        },
        {
            name: 'Vanilla+',
            version: '1.20.1',
            loader: 'fabric',
            url: 'https://github.com/Better-Modpacks/Vanilla-Plus/releases/download/v1.0/Vanilla+.zip',
            background: 'https://wallpapers.com/images/hd/720p-minecraft-background-vm7wpn1tlci2k9o6.jpg'
        },
        {
            name: 'Vanilla+',
            version: '1.20.1',
            loader: 'fabric',
            url: 'https://github.com/Better-Modpacks/Vanilla-Plus/releases/download/v1.0/Vanilla+.zip',
            background: 'https://wallpapers.com/images/hd/720p-minecraft-background-vm7wpn1tlci2k9o6.jpg'
        }
    ]

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
