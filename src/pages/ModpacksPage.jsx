import Modpacks from "../components/ModpacksSection/Modpacks";
import SectionHeading from "../components/SectionHeading/SectionHeading";

export default function ModpacksPage() {
  return (
    <section id="modpacks">
        <div className="content">
          <div className="info">
            <SectionHeading text={"OUR MODPACKS"} />
            <h4>Check all of our modpacks</h4>
            <Modpacks limit={50} />
          </div>
        </div>
    </section>
  )
}