const express = require('express');
//create a web server
const app = express();

const PORT = 8000;
app.listen(PORT, () => {
    console.log('Server is running on port http://localhost:' + PORT);
});  