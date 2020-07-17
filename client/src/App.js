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
        setEvents(events)
      })
  }, []);

  function getEvents() {
    ApiClient.getEvents()
      .then(events => {
        setEvents(events)
    })
  }

  function postEvent(info) {
    console.log('Received info:',info);
    ApiClient.postEvent(info)
      .then(response => {
        console.log(response);
        setEvents(currentEvents => {
          return [...currentEvents, response];
        })
    })
  }

  return (
    <div className="container">
      <EventList className = "list" events = {events}/>
      <EventForm className = "form" postEvent = {postEvent}/>
    </div>
  )
}

export default App;