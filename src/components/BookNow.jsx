import '../css/BookNow.css';
import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { oddAppointments, evenAppointments } from '../Data.js';

function BookNow() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [formattedDate, setFormattedDate] = useState();
    const [selectedTimeIndex, setSelectedTimeIndex] = useState(-1);
    const [chosenDate, setChosenDate] = useState();
    const [chosenTime, setChosenTime] = useState();
    const [chosenTech, setChosenTech] = useState();
    const [appointments, setAppointments] = useState([]);

    const handleSelectedTime = (index) => {
        setSelectedTimeIndex(index);
        setChosenDate(formattedDate);
        setChosenTime(appointments[index].time);
        setChosenTech(appointments[index].tech);
    }

    const handleSelectedDate = (selectedDate) => {
        setSelectedDate(selectedDate);
        setSelectedTimeIndex(-1);
    }

    const isEven = () => {
        const dayOfMonth = selectedDate.getDate();
        if (dayOfMonth % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }

    useEffect(() => {
        if (isEven(selectedDate)) {
            setAppointments(evenAppointments);
        } else {
            setAppointments(oddAppointments);    
        }
    }, [selectedDate]);

    useEffect(() => {
        setFormattedDate(selectedDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }));
    }, [selectedDate]);

    return (
        <div className="book-now">
            <div className="calendar">
                <Calendar onChange={handleSelectedDate} value={selectedDate} />    
            </div>
            <div className="appointment-info"> 
                <h3>Available Appointments</h3>
                <p>{formattedDate}</p>
                    {
                        appointments.map((appointment, index) => {
                            return (
                                <div key={appointment.id} className="appointment">
                                    <p>{appointment.time} with {appointment.tech}</p>
                                    <button 
                                        onClick={()=>handleSelectedTime(index)}
                                        className={selectedTimeIndex === index ? "active" : null}>
                                            {selectedTimeIndex === index ? "Selected" : "Select"}
                                    </button>
                                </div>                                
                            )
                        })
                    }
                
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
                { 
                    chosenTime && 
                    <div className="appt-details">
                        <h4>Appointment Details</h4>
                        <p>{chosenDate}</p>
                        <p>{chosenTime} with {chosenTech}</p>
                        <label htmlFor="service-select">Choose a service:</label>
                        <select id="service-select">
                            <option>Swedish Massage</option>
                            <option>Deep Tissue Massage</option>
                            <option>Foot Massage</option>
                            <option>Hot Stone Massage</option>
                            <option>Back and Shoulder Massage</option>
                            <option>Skincare Treatment</option>
                            <option>Manicure</option>
                            <option>Pedicure</option>
                            <option>Manicure & Pedicure</option>
                            <option>Body Scrub</option>
                            <option>Seaweed Wrap</option>
                        </select>
                        <button className="book-now-btn">Book Now</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default BookNow;