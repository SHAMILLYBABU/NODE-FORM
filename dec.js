const crypto = require('crypto');  
var fs = require('fs');

var data = fs.readFileSync('newfile.txt'); 
data=data.toString();

const decipher = crypto.createDecipher('aes192', '123');  


var decrypted = decipher.update(data, 'hex', 'utf8');  

decrypted += decipher.final('utf8');  
console.log(decrypted); 