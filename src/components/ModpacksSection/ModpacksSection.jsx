import SectionHeading from '../SectionHeading/SectionHeading'
import Modpacks from './Modpacks'
import './ModpacksSection.scss'

export default function ModpacksSection() {
  return (
    <section id="modpacks">
        <div className="content">
            <div className="info">
                <SectionHeading text={"LATEST MODPACKS"} />
                <h4>Check our 3 latest modpacks</h4>
            </div>
            <Modpacks limit={3} />
        </div>
    </section>
  )
}
