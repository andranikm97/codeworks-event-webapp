import React, {useState, useEffect} from 'react';
import './App.css';
import EventForm from './containers/EventForm';
import EventList from './containers/EventList';
import ApiClient from './services/ApiClientService/index';
import dotenv from 'dotenv';
dotenv.config();

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    ApiClient.getEvents()
      .then(events => {
        // Filter out events coming from DB to only grab upcoming ones
        setEvents(events.filter(event => new Date(event.date) > Date.now()))
      })
  }, []);

  function postEvent(info) {
    ApiClient.postEvent(info)
      .then(response => {
        setEvents(currentEvents => {
          return [...currentEvents, response];
        })
    })
  }

  return (
    <div className="main-container">
      <EventList className = "list" events = {events}/>
      <EventForm className = "form" postEvent = {postEvent}/>
    </div>
  )
}

export default App;
