const fs = require('fs');
// import fs from 'fs';

fs.readFile('./awdiz.txt', 'utf8' , (err, data) => {
    if (err) console.log(err)
    console.log(data)
})
