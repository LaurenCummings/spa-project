import '../css/Banner.css';
import skyImg from '../assets/banner-img.webp';

function Banner() {
    return (
        <div className="banner">
            <img src={skyImg} alt="clear sky" />
            <h1 className="welcome">welcome</h1>
            <h1 className="to">to</h1>
            <h1 className="relaxation">relaxation</h1>
        </div>
    )
}

export default Banner;