import React from 'react';
import './Event.css';
import moment from 'moment';

function Event  ({event}) {
  return (
    <div className = "event-item">
      <div className = "event-date">
        <p>{moment(event.date).format('Do')}</p>
        <p>{moment(event.date).format('MMM')}</p>
      </div>

      <div className = "event-info">
        <h1 className = "event-title">{event.title}</h1>
        <div className = "event-logistics">
          <p className = "event-time">{moment(event.date).format('h:mm a - LL')}</p>
          <p className = "event-location">@ {event.venue}</p>
        </div>
      </div>
      
    </div>
  )
}

export default Event;
