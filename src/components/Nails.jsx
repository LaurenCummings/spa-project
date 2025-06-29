import '../css/Nails.css';
import { forwardRef } from 'react';
import { nailsServices } from '../Services.js';

const Nails = forwardRef((props, ref) => {
    return (
        <div ref={ref} className="nails">
            <h1>Nails</h1>
            <div className="nail-treatments">
                <div className="nail-treatment">
                    <h2>Manicure</h2>
                    <p>This treatment involves shaping and filing the nails and caring for the cuticles. Afterwards, the nails and buffed and your choice of polish and patterns will be applied.</p>
                    <p>60 minutes $60</p>
                </div>
                <div className="nail-treatment">
                    <h2>Pedicure</h2>
                    <p>We will remove old polish and soak your feet in warm water before applying new polish. Afterwards, your feet will be moisturized and the procedure will finish with a foot massage.</p>
                    <p>60 minutes $70</p>
                </div>
                <div className="nail-treatment">
                    <h2>Package Deal</h2>
                    <p>Relax while you are pampered with both a manicure and pedicure</p>
                    <p>60 minutes $100</p>
                </div>
            </div>
        </div>
    )
});

Nails.displayName = 'Nails';
export default Nails;