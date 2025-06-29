import '../css/Nails.css';
import { forwardRef } from 'react';
import { nailsServices } from '../Services.js';

const Nails = forwardRef((props, ref) => {
    return (
        <div ref={ref} className="nails">
            <h1>Nails</h1>
            <div className="nail-treatments">
                {
                    nailsServices.map((service) => {
                        return (
                            <div key={service.id} className="nail-treatment">
                                <h2>{service.name}</h2>
                                <p>{service.description}</p>
                                <p>{service.duration} {service.price}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
});

Nails.displayName = 'Nails';
export default Nails;