import '../css/ServiceNav.css';
import massage from '../assets/massage.jpg';
import skincare from '../assets/skincare.png';
import nails from '../assets/nails.png';
import stones from '../assets/stones.jpg';

function ServiceNav() {
    return (
        <div className="service-nav">
            <h1>Our Services</h1>
            <div className="services">
                <div className="service">
                    <img src={massage} alt="massage" />
                    <h2>Massage</h2>
                    <button>Learn More</button>
                </div>
                <div className="service">
                    <img src={skincare} alt="skincare" />
                    <h2>Skincare</h2>
                    <button>Learn More</button>
                </div>
                <div className="service">
                    <img src={nails} alt="manicure" />
                    <h2>Nails</h2>
                    <button>Learn More</button>
                </div>
                <div className="service">
                    <img src={stones} alt="stack of stones" />
                    <h2>Body Treatments</h2>
                    <button>Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default ServiceNav;