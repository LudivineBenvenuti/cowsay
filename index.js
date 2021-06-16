const myInfo = require('./information.js');

let cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hi, my name is ${myInfo.myName}, my campus is ${myInfo.campus}.`,
    e : "oO",
    T : "U "
}));