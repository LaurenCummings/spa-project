import '../css/Footer.css';

function Footer() { 
    return (
        <div className="footer">
            <div className="location">
                <p>We are located at:</p>
                <p>2800 Fake St</p>
                <p>Faketown, FakeState</p>
            </div>
            <div className="extra-info">
                <p><a target="_blank" href="https://icons8.com/icon/Vhgkr6lfmGL8/water">Water</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></p>
                <p>Service descriptions created with the help of Google AI Overview</p>
            </div>
        </div>
    )
}

export default Footer;