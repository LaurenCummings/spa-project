import '../css/BookNow.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function BookNow() {
    return (
        <div className="book-now">
            <div className="calendar">
                <Calendar />    
            </div>
            
        </div>
    )
}

export default BookNow;