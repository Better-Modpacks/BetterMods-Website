import { faBolt, faNewspaper, faWeightHanging } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function BoxesContainer() {
    const boxes = [
        {
            icon: faBolt,
            title: "Good Performance",
            text: "Each our modpack has a lot of performance mods to mods working on most computers"
        },
        {
            icon: faWeightHanging,
            title: "Light Weight",
            text: "We try to make the mod packs we create as light as possible and do not burden the computer"
        },
        {
            icon: faNewspaper,
            title: "Latest Versions",
            text: "We creating modpacks for latest minecraft versions to have all newest features"
        }
    ]

    function Box({ box }) {
        return (
            <div className="box">
                <div className="icon">
                    <FontAwesomeIcon icon={box.icon} />
                </div>
                <span>{box.title}</span>
                <p>{box.text}</p>
            </div>
        )
    }

    return (
        <div className="boxes">
            {boxes.map((box, index) => <Box key={index} box={box} />)}
        </div>
    )
}
