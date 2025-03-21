import '../css/Topbar.css';
import logo from '../assets/logo.png';

function Topbar() {
    return(
        <div className="topbar">
            <div className="logo">
                <img src={logo} alt="logo" />
                <h1>The Spa</h1>
            </div>
        </div>
    )
}

export default Topbar;