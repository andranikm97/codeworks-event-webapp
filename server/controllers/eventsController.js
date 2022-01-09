const Event = require('../models');

exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    console.error('Failed to get events with error:', error);
    res.sendStatus(500);
  }
};

exports.postEvent = async (req, res) => {
  try {
    const postedEvent = await Event.create(req.body);
    res.status(201).json(postedEvent);
  } catch (error) {
    console.error('Failed to post event with error:', error);
    res.sendStatus(500);
  }
};

exports.deleteEvent = async (req, res) => {
  try {
    await Event.findByIdAndRemove(req.body.id);
    const updatedEvents = await Event.find();
    res.status(201).json(updatedEvents);
  } catch (error) {
    console.error('Failed to delete event with error:', error);
    res.sendStatus(500);
  }
};
