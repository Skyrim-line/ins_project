const fs = require('fs');

// path,utf8,callback
fs.readFile("./files/1.txt", "utf8", (err, data) => {
    // read file if error return 
    if (err) {
        console.log("Error:", err);
        return;
    }
    else {
        console.log("Data:", data);
    }
});
