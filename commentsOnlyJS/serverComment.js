/*const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('/website'));

const port = 8000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// GET Route to retrieve data (replace with actual logic)
app.get('/all', (req, res) => {
  // Logic to retrieve weather data and user response from storage
  // Send retrieved data as response
  res.send({ message: 'Data retrieved successfully!' });
});

// POST Route to add weather data (replace with actual logic)
app.post('/addWeatherData', (req, res) => {
  const { temperature, date, user_response } = req.body;
  // Logic to store the received data (temperature, date, user_response)
  // Send confirmation response
  res.send({ message: 'Data added successfully!' });
});*/

// Setup empty JS object to act as endpoint for all routes
// Express to run server and routes
console.log('test');
const express = require('express');
// Start up an instance of app
const app = express();
/* Dependencies */
const bodyParser = require('body-parser');
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('/website'));

const port = 8000;
// Spin up the server
const server = app.listen(port, listening);
// Callback to debug
function listening(){
    console.log('server running');
    console.log(`running on localhost: ${port}`);
};
// Initialize all route with a callback function

// Callback function to complete GET '/all'

// Post Route
