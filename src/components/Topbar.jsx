import '../css/Topbar.css';
import logo from '../assets/logo.png';

function Topbar() {

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    function scrollToBottom() {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
        })
    }

    return(
        <div className="topbar">
            <div className="logo">
                <img src={logo} alt="logo" />
                <h1>The Spa</h1>
            </div>
            <button className="book-appt" onClick={scrollToBottom}>Book an Appointment</button>
            <button className="scroll-top" onClick={scrollToTop}>Scroll to Top</button>
        </div>
    )
}

export default Topbar;