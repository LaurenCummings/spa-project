import '../css/BookNow.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function BookNow() {
    return (
        <div className="book-now">
            <div className="calendar">
                <Calendar />    
            </div>
            <div className="appointment-info">
                <h3>Available Appointments</h3>
                <div className="appointment">
                    <p>10am</p>
                    <button>Select</button>
                </div>
                <div className="appointment">
                    <p>1pm</p>
                    <button>Select</button>
                </div>
                <div className="appointment">
                    <p>2pm</p>
                    <button>Select</button>
                </div>
                <div className="appointment">
                    <p>3pm</p>
                    <button>Select</button>
                </div>
                <button className="book-now-btn">Book Now</button>
            </div>
            <div className="user-info">
                <form>
                    <div>
                        <label for="name">Name:</label>
                        <input type="text" name="name"></input>
                    </div>
                    <div>
                        <label for="email">Email:</label>
                        <input type="text" name="email"></input>                       
                    </div>
                </form>
            </div>
        </div>
    )
}

export default BookNow;