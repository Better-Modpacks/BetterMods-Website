import SectionHeading from '../SectionHeading/SectionHeading';
import BoxesContainer from './BoxesContainer';
import './WhyUsSection.scss';

export default function WhyUsSection() {
  return (
    <section id='whyus'>
        <div className="content">
            <div className="info">
                <SectionHeading text={"WHY US"} />
                <h4>Why you should try our modpacks?</h4>
            </div>
            <BoxesContainer />
        </div>
    </section>
  )
}
