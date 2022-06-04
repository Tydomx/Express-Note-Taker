// importing express packages to give the server functionality
const express = require('express');
// sets up properties of the express server, instantiates the server
const app = express();
const { database } = require('./db/db.json');
// setting initial port to be used later
const PORT = process.env.PORT || 3001;

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// MIDDLEWARE
// parse incoming string or array data (built-in express method - taking incoming POST data and converts it to key/value pairings that can be accessed in req.body)
// extended:true - informs our server that there may be sub-array data nested in it as well, so it needs to look as deep into POST data as possible to parse all data correctly
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data - (takes incoming POST data in form of JSON and prases it into the req.body)
app.use(express.json());
// sets up express app to serve static files
app.use(express.static('public'));

// tells our server to route using these links
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


// LISTENER
app.listen(PORT, () => {
    console.log(`Express server now on port ${PORT}!`);
});