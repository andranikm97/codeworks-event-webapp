import React, {useState} from 'react';
import './EventForm.css';

function EventForm ({postEvent}) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [venue, setVenue] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Form submitted');
    const info = {title, date, venue};
    postEvent(info);
    setTitle('');
    setDate('');
    setVenue('');
  }

  function handleTitleChange (e) {
    setTitle(e.target.value);
  }

  function handleDateChange (e) {
    setDate(e.target.value);
  }

  function handleVenueChange (e) {
    setVenue(e.target.value);
  }

  return (
    <div className = "event-submit">
      <form className = "event-form" onSubmit = {handleSubmit}>

        <div className = "create-event">
          <h1>CREATE A NEW EVENT</h1>
        </div>

        <div>
          <p className = "title">TITLE</p>
          <input name = "title-input" value = {title} onChange = {handleTitleChange} type="text"/>
        </div>

        <div>
          <p className = "date">DATE</p>
          <input name = "date-input" value = {date}  onChange = {handleDateChange} type = "datetime-local" />
        </div>

        <div>
          <p className = "venue">VENUE</p>
          <input name = "venue-input" value = {venue} onChange = {handleVenueChange} type="text"/>
        </div>

      
        <button className = "submit-button" type = "submit"><span>Create</span></button>

      </form>
    </div>
  )
}

export default EventForm;
