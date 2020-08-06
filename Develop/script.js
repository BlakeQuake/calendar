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

for (var i = 0; i < 18; i++) 
{
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

///////////// LOCAL STORAGE ///////////////////

$(".saveBtn").on("click", function() {
    var time = $(this).attr("data-time");
    var actualTime = $("#" + time).val();
    console.log(actualTime);
    localStorage.setItem(time, actualTime);
})

function text () {
    for (var i = 0; i < 18; i++){
        var savedTime = localStorage.getItem(i + "")
        if (savedTime !== null) {
            $("#" + i + "").val(savedTime)
        }
    }
}
text()