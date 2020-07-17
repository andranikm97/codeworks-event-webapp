const mongoose = require('mongoose');
const EventSchema = require('./event');
const dotenv = require('dotenv');
dotenv.config();

(async () => {
  await mongoose.connect(process.env.DB_PATH, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  }, function (error) {
    if (error) {
      console.error(`Error in connection to ${process.env.DB_PATH}:`, error);
    } else {
      console.log(`Connected to ${process.env.DB_PATH} successful`);
    }
  })
})();

EventModel = mongoose.model('Events', EventSchema);


module.exports = EventModel;
