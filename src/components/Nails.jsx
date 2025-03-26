import '../css/Nails.css';
import { forwardRef } from 'react';

const Nails = forwardRef((props, ref) => {
    return (
        <div ref={ref} className="nails">
            <h1>Nails</h1>
            <div className="nail-treatments">
                <div className="nail-treatment">
                    <h2>Manicure</h2>
                    <p>Description of manicure</p>
                    <p>price</p>
                </div>
                <div className="nail-treatment">
                    <h2>Pedicure</h2>
                    <p>Description of pedicure</p>
                    <p>price</p>
                </div>
                <div className="nail-treatment">
                    <h2>Package Deal</h2>
                    <p>a manicure and pedicure combined</p>
                    <p>price</p>
                </div>
            </div>
        </div>
    )
});

Nails.displayName = 'Nails';
export default Nails;