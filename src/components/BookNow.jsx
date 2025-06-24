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
                <p>10am</p>
                <p>1pm</p>
                <p>2pm</p>
                <p>3pm</p>
                <button>Book Now</button>
            </div>
        </div>
    )
}

export default BookNow;