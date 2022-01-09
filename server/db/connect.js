const mongoose = require('mongoose');

const connectToDB = (uri) => {
  return mongoose.connect(
    uri,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    },
    function (error) {
      console.log('Connected to DB successful!');
      if (error) {
        console.error(`Error in connection to ${process.env.DB_PATH}:`, error);
      }
    },
  );
};

module.exports = connectToDB;
