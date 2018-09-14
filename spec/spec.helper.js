const  fs = require('fs');
const  chai = require('chai');
global.expect = chai.expect;

let rpc = fs.readFileSync('./src/js/rpc.js');
let player1 = fs.readFileSync('./src/js/player1.js');
let player2 = fs.readFileSync('./src/js/player2.js');
eval(rpc + player1 + player2 + `\nexports.Rpc = Rpc;\nexports.Player1 = Player1;\nexports.Player2 = Player2;`)