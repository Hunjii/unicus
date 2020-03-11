const fs = require('fs');
const path = require('path');
const os = require('os');

// fs.appendFile(path.join(__dirname, 'test.html'), 'hello 2', err => {
//   if (err) {
//     throw err;
//   }

//   console.log('Done!');
// });

console.log(os.freemem());
console.log(os.uptime());
console.log(os.totalmem());
