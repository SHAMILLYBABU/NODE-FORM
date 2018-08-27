const crypto = require('crypto');  
var fs = require('fs');

var data ='KSR COLLEGE';

const cipher = crypto.createCipher('aes192', '123');   // crypto.createCipher(algorithm, password[, options])
var encrypted = cipher.update(data, 'utf8', 'hex');  

encrypted += cipher.final('hex');  


// writeFile function with filename, content and callback function


fs.writeFile('newfile.txt', encrypted, function (err) {
  if (err) throw err;
  console.log('File is created successfully.');
}); 