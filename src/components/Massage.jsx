import '../css/Massage.css';
import { forwardRef } from 'react';

const Massage = forwardRef((props, ref) => {
    return (
        <div ref={ref} className="massage">
            <h1>Massage Services</h1>
            <div className="massage-services">
                <div className="massage-service">
                    <h2>Swedish Massage</h2>
                    <p>This massage uses a variety of strokes and techniques to promote relaxation, improve circulation, and relieve muscle tension</p>
                    <p>60 minutes $150</p>
                </div>
                <div className="massage-service">
                    <h2>Deep Tissue Massage</h2>
                    <p>This massage uses firm pressure and slow strokes to target and release tension in deeper layers of muscles and connective tissues, aiming to alleviate chronic pain and stiffness</p>
                    <p>60 minutes $150</p>
                </div>
                <div className="massage-service">
                    <h2>Foot Massage</h2>
                    <p>This massage focuses on the muscles, tendons, and ligaments of the feet to promote relaxation, relieve pain, and improve circulation</p>
                    <p>60 minutes $150</p>
                </div>
                <div className="massage-service">
                    <h2>Hot Stone Massage</h2>
                    <p>This massage uses smooth, heated stones combined with long strokes, circular movement, and kneading to relax muscles, improve circulation, and reduce stress</p>
                    <p>60 minutes $150</p>
                </div>
                <div className="massage-service">
                    <h2>Back and Shoulder Massage</h2>
                    <p>This massage focuses on the upper body and uses kneading, stretching, and pressure to relieve tension, improve circulation, and promote relaxation</p>
                    <p>60 minutes $150</p>
                </div>
            </div>
        </div>
    )
});

Massage.displayName = 'Massage';
export default Massage;