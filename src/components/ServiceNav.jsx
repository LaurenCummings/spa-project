import '../css/ServiceNav.css';
import massage from '../assets/massage.jpg';
import skincare from '../assets/skincare.png';
import nails from '../assets/nails2.jpg';
import stones from '../assets/stones.jpg';
import { useRef } from 'react';
import Massage from '../components/Massage';
import Skincare from '../components/Skincare.jsx';
import Nails from '../components/Nails.jsx';
import BodyTreatments from '../components/BodyTreatments.jsx';

function ServiceNav() {
    const massageRef = useRef(null);
    const skincareRef = useRef(null);
    const nailsRef = useRef(null);
    const bodyTreatmentsRef = useRef(null);

    const scrollToMassage = () => {
        massageRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToSkincare = () => {
        skincareRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToNails = () => {
        nailsRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToBodyTreatments = () => {
        bodyTreatmentsRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <div className="service-nav">
                <h1>Our Services</h1>
                <div className="services">
                    <div className="service">
                        <img src={massage} alt="massage" />
                        <h2>Massage</h2>
                        <button onClick={scrollToMassage}>Learn More</button>
                    </div>
                    <div className="service">
                        <img src={skincare} alt="skincare" />
                        <h2>Skincare</h2>
                        <button onClick={scrollToSkincare}>Learn More</button>
                    </div>
                    <div className="service">
                        <img src={nails} alt="manicure" />
                        <h2>Nails</h2>
                        <button onClick={scrollToNails}>Learn More</button>
                    </div>
                    <div className="service">
                        <img src={stones} alt="stack of stones" />
                        <h2>Body Treatments</h2>
                        <button onClick={scrollToBodyTreatments}>Learn More</button>
                    </div>
                </div>
            </div>
            <div className="service-components">
                <Massage ref={massageRef} />
                <Skincare ref={skincareRef} />
                <Nails ref={nailsRef} />
                <BodyTreatments ref={bodyTreatmentsRef} />
            </div>
        </>
    )
}

export default ServiceNav;