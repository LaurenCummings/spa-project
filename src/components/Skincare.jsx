import '../css/Skincare.css';
import faceMask from '../assets/facemask.jpg';

function Skincare() {
    return (
        <div className="skincare">
            <div className="skincare-info">
                <h1>Skincare</h1>                
                <p>Our 1 hour facial treatment starts off with a facial cleansing mask and steam treatment, followed by dermaplaning and a jelly mask. We end the treatment with a face and neck massage.</p>
                <p>60 minutes $120</p>                
            </div>
            <img src={faceMask} alt="face mask" />
        </div>
    )
}

export default Skincare;