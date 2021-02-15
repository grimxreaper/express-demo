const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!!');
});
//implement a couple of end points that respond to http get request 
// "slash" / represents the root of the function
//second arg is a callback function, this is the callback that will be called
//when there's an http request to this end point
//the callback function is also called a route handler

//here when we get an http get request to the root of our website, we are going to
//send a hello world message! 
//Finally, we need to listen on a specific port...

app.get('/api/courses', (reg, res) => {
    res.send([1, 2, 3]);
});


//We have this environmental variable called PORT
//an env. variable is a variable that is part of the environment
//on which a process runs
//its value is set outside the environment.z
//in this app we need to read the value of this PORT env. variable
//the way we do that is by using the process object
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
