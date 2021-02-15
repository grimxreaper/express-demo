const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});
//implement a couple of end points that respond to http get request 
// "slash" / represents the root of the function
//second arg is a callback function, this is the callback that will be called
//when there's an http request to this end point
//the callback function is also called a route handler
