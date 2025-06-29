import '../css/Skincare.css';
import faceMask from '../assets/facemask.jpg';
import { forwardRef } from 'react';
import { skincareServices } from '../Services.js';

const Skincare = forwardRef((props, ref) => {
    return (
        <div ref={ref} className="skincare">
            {
                skincareServices.map((service) => {
                    return (
                        <div className="skincare-service">
                            <h1>{service.name}</h1>
                            <p>{service.description}</p>
                            <p>{service.duration} {service.price}</p>
                        </div>
                    )
                })
            }
            <img src={faceMask} alt="face mask" />
        </div>
    )
});

Skincare.displayName = 'Skincare';
export default Skincare;