import React from 'react';
import './Event.css';
import moment from 'moment';

function Event  ({event}) {
  return (
    <div className = "event-item">
      <div className = "event-date">{moment(event.date).format('Do MMM YYYY')}</div>

      <div className = "event-info">
        <h1 className = "event-title">{event.title}</h1>
        <p className = "event-time">{moment(event.date).format('h:mm a - LL')}</p>
        <p className = "event-location">{event.venue}</p>
      </div>
      
    </div>
  )
}

export default Event;
