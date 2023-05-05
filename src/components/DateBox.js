import React from 'react';
import './DateBox.css';
const DateBox = ({ day, month, year, onDateChange }) => {
    return (
        <div className='date-box tc'>
            <div>
                <span className='date-box__date'>{month}</span>      
            </div>

            <div>
                <span className='date-box__date'>{day}</span>
            </div>
            <div>
                <span className='date-box__date'>{year}</span>
            </div>
            <div className='datepicker-toggle'>
                <span className='datepicker-toggle-button'>
                    <input type="date" className='datepicker-input' onInput={onDateChange}></input>
                </span>
            </div>
          

        </div>
    )
}

export default DateBox;