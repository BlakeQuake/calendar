
// counter with current date and timer (moment.js)
// place cunter inside the jumbotron
// if statement - if .hour = currenttime, then present(red).
// else if .hour > currentime, then future (green).
// else if .hour < currentime time, then past (gray)

// // Javascript vanilla way
// var currentDay = document.querySelector("#currentDay");

/////////// MOMENT TIMER ///////////////////////

var momentTimer = moment().format('MMM do YYYY, h:mm A');
var currentDay = $("#currentDay")
$("#currentDay").append(momentTimer)
console.log(momentTimer)

///////////// LIVE CLOCK ///////////////////////

var currentHour = moment().hour()
console.log(moment().hour())

for (var i = 0; i < 18; i++) {
    if (i < currentHour )
    {
        $("#" + i).addClass("past")
    }
    else if (i === currentHour){
        $("#" + i).addClass("present")
    }
    else {
        $("#" + i).addClass("future")
    }
}


var nine 
var ten
var eleven
var twelve = ".twelve"
var one
var two
var three
var four
var five 

///////////// LOCAL STORAGE ///////////////////

localStorage.setItem(".twelve", twelve)
console.log(twelve)

$(".saveBtn").on("click", function() {
    
})