import '../css/ServiceNav.css';

function ServiceNav() {
    return (
        <div className="service-nav">
            <h1>Our Services</h1>
            <div className="services">
                <div className="service">
                    <h2>Massage</h2>
                    <button>Learn More</button>
                </div>
                <div className="service">
                    <h2>Skincare</h2>
                    <button>Learn More</button>
                </div>
                <div className="service">
                    <h2>Nails</h2>
                    <button>Learn More</button>
                </div>
                <div className="service">
                    <h2>Body Treatments</h2>
                    <button>Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default ServiceNav;