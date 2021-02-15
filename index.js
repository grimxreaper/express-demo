const express = require('express');
const app = express();

app.use(express.json()); //app.use is adding a piece of middleware, we call app.use to use the middleware that express.json is returning

const courses = [
    { id: 1, name: 'course1'},
    { id: 2, name: 'course2'},
    { id: 3, name: 'course3'},
];

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
    res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('The course with the given ID was not found.');
    res.send(course);
});

app.post('api/courses', (req, res) => {
    const course = {
        id: courses.length + 1,
        name: req.body.name //in order for this line to work we need to enable to parsing of JSON objects in the body of the request
    };
    courses.push(course); //push into array
    //when the server creates a new object or resource
    //it should return it in the body of the response
    res.send(course);
    //the reason for this is because we are assigning this ID on the server
    //so we need to return this course obj to the client bc chances are the client
    //needs to know the ID of this new obj/resource.
    
});


//We have this environmental variable called PORT
//an env. variable is a variable that is part of the environment
//on which a process runs
//its value is set outside the environment.z
//in this app we need to read the value of this PORT env. variable
//the way we do that is by using the process object
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

