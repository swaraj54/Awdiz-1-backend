const fs = require('fs');

const content = 'Hi im Vibha, im expert in CSS...';
// Create a new file and write content to it
fs.writeFile('example.txt', content, (err) => {
  if (err) {
    console.error('Error writing file:', err);
  } else {
    console.log('File created and content written successfully.');
  }
});