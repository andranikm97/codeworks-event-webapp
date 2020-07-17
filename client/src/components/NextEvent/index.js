import React from 'react';
import moment from 'moment';
import './NextEvent.css';

function NextEvent ({event}) {
  
  return (
    <div className = "next-event-item">
      <div className = "event-date">{moment(event.date).format('Do MMM YYYY')}</div>

      <div className = "event-info">
        <h1 className = "event-title">{event.title}</h1>
        <p className = "event-time">{moment(event.date).format('h:mm a - LL')}</p>
        <p className = "event-location">{event.venue}</p>
      </div>
      
    </div>
  )
}

export default NextEvent;
