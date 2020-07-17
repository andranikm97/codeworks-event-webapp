import React from 'react';
import Event from '../../components/Event';
import NextEvent from '../../components/NextEvent';
import './EventList.css';
function EventList (props) {

  function sortEvents(events) {
    return events.sort((a,b) => {
      let dateA = new Date(a.date);
      let dateB = new Date(b.date);

      if(dateA < dateB) {
        return 1;
      } else if (dateA > dateB) {
        return -1;
      } else {
        return 0;
      }
    });
  }

  return (
    <div className = "event-list" id = "list">
      {sortEvents(props.events).map((event, index) => 
      { 
        if(new Date(event.date) > Date.now()) {
          if (index === 0) {
            return <NextEvent event = {event} />
          } else {
            return <Event event = {event} />
          }
        }
      }
      )}
    </div>
  )
}

export default EventList;
