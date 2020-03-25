/* A script prompting user to enter name, surname and favourite colour, and returning a string: name + surname + color + '20' + random number from 0 to 99
*/

console.log('main.js is working');

var name = prompt("What's your name?");
var surname = prompt("What's your surname?");
var colour = prompt("What's favourite colour?");
var ramdonNumber = Math.floor(Math.random() * 100);

console.log(name);
console.log(surname);
console.log(colour);

document.getElementById('new-password').innerHTML = name + surname + colour + '20' + ramdonNumber;
