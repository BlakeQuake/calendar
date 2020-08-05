
// counter with current date and timer (moment.js)
// place cunter inside the jumbotron
// if statement - if .hour = currenttime, then present(red).
// else if .hour > currentime, then future (green).
// else if .hour < currentime time, then past (gray)







// Javascript vanilla way
var currentDay = document.querySelector("#currentDay");

// jQuery way
var momentTimer = moment().format('MMM do YYYY, h:mm:ss a');
var currentDay = $("#currentDay")
$("#currentDay").append(momentTimer)
console.log(momentTimer)

