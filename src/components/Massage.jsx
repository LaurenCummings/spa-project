import '../css/Massage.css';
import { forwardRef } from 'react';
import { massageServices } from '../Services.js';

const Massage = forwardRef((props, ref) => {
    return (
        <div ref={ref} className="massage">
            <h1>Massage Services</h1>
            <div className="massage-services">
                {
                    massageServices.map((service) => {
                        return (
                            <div key={service.id} className="massage-service">
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

Massage.displayName = 'Massage';
export default Massage;