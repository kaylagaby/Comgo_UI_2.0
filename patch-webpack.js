const fs = require('fs');
const f = 'node_modules/@angular-devkit/build-angular/src/angular-cli-files/models/webpack-configs/browser.js';
 
fs.readFile(f, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  let result = data.replace(/node: false/g, "node: {crypto: true, stream: true}");
 
  fs.writeFile(f, result, 'utf8', function (err) {
    if (err) return console.log(err);
  });
});
// serve":{
// "options": {
//   "browserTarget": "fuse:build",
//   "ssl": true,
//   "sslKey": "/home/dell/Desktop/SCMDeploy/ssl.key",
//   "sslCert": "/home/dell/Desktop/SCMDeploy/ssl.crt"
// },
// }

// "later": "--ssl true --ssl-cert /home/dell/Desktop/SCMDeploy/ssl.crt --ssl-key /home/dell/Desktop/SCMDeploy/ssl.key",