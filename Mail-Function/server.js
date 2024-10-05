// server.js
const express = require('express');
const bodyParser = require('body-parser');
const { sendEmailAndHandleRequest } = require('./emailFunction'); 

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// POST endpoint to send an email (using the email handling function)
app.post('/send-email', sendEmailAndHandleRequest);




// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
