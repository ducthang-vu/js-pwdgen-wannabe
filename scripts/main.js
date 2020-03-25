/* A script promping user to enter name, surname and favourite colour, and returning a string: namesurnamecolour20.
*/

console.log('main.js script is working')

var name = prompt("What's your name?")
var surname = prompt("What's your surname?")
var colour = prompt("What's favourite colour?")

console.log(name)
console.log(surname)
console.log(colour)

document.getElementById('new-password').innerHTML = name + surname + colour + '20'
