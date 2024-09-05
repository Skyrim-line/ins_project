//npm init
//npm install express
//npm i nodemon -D
const express = require('express');
const router = require('./ router');
const weatherRouter = require('./weatherRouter');
const app = express();
app.use(express.json());

app.use(router);
app.use(weatherRouter);


const PORT = 3003;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
