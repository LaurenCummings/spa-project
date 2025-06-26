import '../css/BookNow.css';
import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { oddAppointments, evenAppointments } from '../Data.js';

function BookNow() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [formattedDate, setFormattedDate] = useState();
    const [selectedTime, setSelectedTime] = useState(-1);

    const handleSelectedTime = (index) => {
        setSelectedTime(index);
    }

    useEffect(() => {
        setFormattedDate(selectedDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }));
    }, [selectedDate]);

    console.log(formattedDate);
    return (
        <div className="book-now">
            <div className="calendar">
                <Calendar />    
            </div>
            <div className="appointment-info"> 
                <h3>Available Appointments</h3>
                    {
                        oddAppointments.map((appointment, index) => {
                            return (
                                <div key={appointment.id} className="appointment">
                                    <p>{appointment.time}</p>
                                    <button 
                                        onClick={()=>handleSelectedTime(index)}
                                        className={selectedTime === index ? "active" : null}>
                                            {selectedTime === index? "Selected" : "Select"}
                                    </button>
                                </div>                                
                            )
                        })
                    }
                <button className="book-now-btn">Book Now</button>
            </div>
            <div className="user-info">
                <form>
                    <div>
                        <label>Name:</label>
                        <input type="text"></input>
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="text"></input>                       
                    </div>
                </form>
            </div>
        </div>
    )
}

export default BookNow;