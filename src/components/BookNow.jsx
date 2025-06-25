import '../css/BookNow.css';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { oddAppointments, evenAppointments } from '../Data.js';

function BookNow() {
    const [selected, setSelected] = useState(-1);

    const handleSelected = (index) => {
        setSelected(index);
        console.log(selected);
    }

    console.log(oddAppointments);
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
                                        onClick={()=>handleSelected(index)}
                                        className={selected === index ? "active" : null}>
                                            {selected === index? "Selected" : "Select"}
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