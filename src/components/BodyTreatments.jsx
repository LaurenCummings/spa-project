import '../css/BodyTreatments.css';
import bodyscrub from '../assets/bodyscrub.jpg';
import seaweedwrap from '../assets/seaweedwrap.jpg';
import { forwardRef } from 'react';
import { bodyServices } from '../Services.js';

const BodyTreatments = forwardRef((props, ref) => {
    return (
        <div ref={ref} className="body-treatments">
            <h1>Body Treatments</h1>
            <div className="body-treatment-services">
                {
                    bodyServices.map((service) => {
                        return (
                            <div key={service.id} className="body-treatment-service">
                                <img src={service.id == 1 ? bodyscrub : seaweedwrap} alt={service.name} />
                                <div>
                                    <h2>{service.name}</h2>
                                    <p>{service.description}</p>
                                    <p>{service.duration} {service.price}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
});

BodyTreatments.displayName = 'BodyTreatments';
export default BodyTreatments;