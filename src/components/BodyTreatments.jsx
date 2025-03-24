import '../css/BodyTreatments.css';
import bodyscrub from '../assets/bodyscrub.jpg';
import seaweedwrap from '../assets/seaweedwrap.jpg';

function BodyTreatments() {
    return (
        <div className="body-treatments">
            <h1>Body Treatments</h1>
            <div className="body-treatment-services">
                <div className="body-treatment-service">
                    <img src={bodyscrub} alt="jar of body scrub" />
                    <div>
                        <h2>Body Scrub</h2>
                        <p>A soothing sugar scrub massage for soft skin</p>
                        <p>60 minutes $150</p>                        
                    </div>
                </div>
                <div className="body-treatment-service">
                    <img src={seaweedwrap} alt="seaweed wrap" />
                    <div>
                        <h2>Seaweed Wrap</h2>
                        <p>A seaweed paste is applied to the body followed by being wrapped up in a soft blanket.</p>
                        <p>60 minutes $150</p>                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BodyTreatments;