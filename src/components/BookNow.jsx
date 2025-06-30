import '../css/BookNow.css';
import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { monAppts, tueAppts, wedAppts, thuAppts, friAppts } from '../Appointments.js';

function BookNow() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [formattedDate, setFormattedDate] = useState();
    const [selectedTimeIndex, setSelectedTimeIndex] = useState(-1);
    const [chosenDate, setChosenDate] = useState();
    const [chosenTime, setChosenTime] = useState();
    const [chosenTech, setChosenTech] = useState();
    const [appointments, setAppointments] = useState([]);
    const [formSubmitted, setFormSubmitted] = useState(false);

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

    const handleFormSubmit = () => {
        const form = document.getElementById('apptForm');
        const requiredFields = form.querySelectorAll('[required]');
        let allFieldsFilled = true;
        requiredFields.forEach(field => {
            if (field.value.trim() === '') {
                allFieldsFilled = false;
            }             
        });
        if (allFieldsFilled) {
            setFormSubmitted(true);
        }
        form.addEventListener('submit', function(event) {
            event.preventDefault();
        })
    }

    const getWeekday = () => {
        const dayOfWeek = selectedDate.getDay();
        return dayOfWeek;
    }

    useEffect(() => {
        const today = new Date();
        if (selectedDate < today) {
            setAppointments(null);
        } else if (getWeekday(selectedDate) === 1) {
            setAppointments(monAppts);
        } else if (getWeekday(selectedDate) === 2) {
            setAppointments(tueAppts);    
        } else if (getWeekday(selectedDate) === 3) {
            setAppointments(wedAppts);
        } else if (getWeekday(selectedDate) === 4) {
            setAppointments(thuAppts);
        } else if (getWeekday(selectedDate) === 5) {
            setAppointments(friAppts);
        } else {
            setAppointments(null);
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
        <div className="appointment-section">
            <div className={formSubmitted ? "book-now submitted" : "book-now"}>
                <div className="calendar">
                    <Calendar onChange={handleSelectedDate} value={selectedDate} />    
                </div>
                <div className="appointment-info"> 
                    <h3>Available Appointments</h3>
                    <p>{formattedDate}</p>
                        {
                            appointments ? (appointments.map((appointment, index) => {
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
                            ) : (
                            <div>No Appointments Available</div>
                            )
                        } 
                </div>
                <div className="user-info">
                    <form id="apptForm">
                        <div className="user-entry">
                            <label>Name:</label>
                            <input id="name" type="text" required></input>
                        </div>
                        <div className="user-entry">
                            <label>Email:</label>
                            <input id="email" type="text" required></input>                       
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
                                <option value="Swedish Massage">Swedish Massage</option>
                                <option value="Deep Tissue Massage">Deep Tissue Massage</option>
                                <option value="Foot Massage">Foot Massage</option>
                                <option value="Hot Stone Massage">Hot Stone Massage</option>
                                <option value="Back and Shoulder Massage">Back and Shoulder Massage</option>
                                <option value="Skincare Treatment">Skincare Treatment</option>
                                <option value="Manicure">Manicure</option>
                                <option value="Pedicure">Pedicure</option>
                                <option value="Manicure & Pedicure">Manicure & Pedicure</option>
                                <option value="Body Scrub">Body Scrub</option>
                                <option value="Seaweed Wrap">Seaweed Wrap</option>
                            </select>
                            <button type="submit" form="apptForm" className="book-now-btn" onClick={handleFormSubmit}>Book Now</button>
                        </div>
                    }
                </div>
            </div>
            {
                formSubmitted && 
                    <div className="submitted-info">
                        <p>You have scheduled an appointment</p>
                        <p>Name: {document.getElementById("name").value}</p>
                        <p>Email: {document.getElementById("email").value}</p>
                        <p>Appointment Info:</p>
                        <p>{chosenDate}</p>
                        <p>{chosenTime} with {chosenTech}</p>
                        <p>Service: {document.getElementById("service-select").value}</p>
                        <p>Thank you for trying out the simulation</p>
                    </div>                
            }
        </div>
    )
}

export default BookNow;