const  fs = require('fs');
const  chai = require('chai');
global.expect = chai.expect;

let rpc = fs.readFileSync('./src/js/rpc.js');
eval( rpc + `\nexports.Rpc = Rpc;`)