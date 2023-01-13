const express = require('express'); //import the express package 
const app = express(); // create an express app

const port = process.env.PORT || 3001; 

//this is a route handler -> listen for incoming request and send back a response
// this is root route -> express to render an index page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/contact.html');
  });


// set up the server to listen for incoming connections at this part
app.listen(port, () => {
  console.log('listening on ${port}');
});
