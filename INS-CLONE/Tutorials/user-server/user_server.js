//npm i 
//npm i express
//npm i nodemon -D
const express = require('express');
const app = express();

const PORT = 5001;

const users = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Tom', age: 35 },
    { id: 4, name: 'Sam', age: 40 },
    { id: 5, name: 'Tim', age: 45 }
];


app.get('/', (req, res) => {
    res.send('Hello World from Express');
});

// Get all users by typing http://localhost:5001/api/users in postman
app.get('/api/users', (req, res) => {
    res.json(users);
});

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);

});
