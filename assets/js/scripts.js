// https://github.com/davidlucio/workdayscheduler-HW5

// READY!
var todaysSchedule = {
    "date"      : moment().format(`YYYYDDDD`),
    "events"    : {
        0900 : "",
        1000 : "",
        1100 : "",
        1200 : "",
        1300 : "",
        1400 : "",
        1500 : "",
        1600 : "",
        1700 : ""
    }
};

let dateDisplay = $('#currentDay'),
    currentDay = moment().format('LL');

var buttonList = $('button');


// AIM!
$('button').on("click", function(event){
    event.preventDefault();

    var buttonID = $(this).attr('for'),
        eventContent = $(this).prev().val();

    saveEventList( buttonID, eventContent );
});


function saveEventList(hourBlock, textContent){
    // If the save button is clicked, the corresponding textarea is parsed and saved
    todaysSchedule.events[hourBlock] = textContent;
    localStorage.setItem('bootcampHW-schedule', JSON.stringify(todaysSchedule) );
}


function loadEventList(){
    
    var loadToday = moment().format(`YYYYDDDD`);
    var currentHour = moment().format(`kk[00]`);
    var reloadedList = JSON.parse( localStorage.getItem('bootcampHW-schedule') );

    // "What's with today today?"
    if( loadToday === reloadedList.date ){
        // Populate based on stuff in the event list...
        console.log("It's still today today!");

        $("section.time-block").each( function(index){

            var eventTextArea = $(this).children('textarea');

            // Load the event for this hour
            var hourID = $(this).attr('id');
            var eventText = reloadedList.events[hourID];
            eventTextArea.html(eventText);

            // Determine if previous, current, or future hour
            if( currentHour > hourID ){
                eventTextArea.addClass("past");
            }
            else if ( currentHour == hourID ){
                eventTextArea.addClass("present");
            }
            else{
                eventTextArea.addClass("future");
            }
            
        });

    }
    else{
        console.log("It's a new day!");
    }

}

function init(){
    dateDisplay.html(currentDay);
    loadEventList();
}


// FIRE!
init();