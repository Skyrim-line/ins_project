const fs = require('fs');

fs.readFile("./source.js", "utf8", (err, content) => {
    // index.js
    if (err) {
        console.error('Read file failed', err);
        return;
    }
    // write content from source.js to source2.jsf
    fs.writeFile("./source2.js", content, "utf8", (err) => {
        if (err) {
            console.error('Write file failed', err);
            return;
        } else {
            console.log('Write file successfully');
        }
    });
});