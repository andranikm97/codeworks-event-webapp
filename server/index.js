const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const router = require('./router');

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(router);

const port = process.env.PORT || 4000;
(async () => {
  
  // Make sure db connects before server boots
  await require('./models/index');;
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port} 👌`);
  })
})();
