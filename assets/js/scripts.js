// https://github.com/davidlucio/workdayscheduler-HW5

// READY!
var todaysschedule = {
    "date"      : moment(),
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


// AIM!
function init(){

    dateDisplay.html(currentDay);

    // https://stackoverflow.com/questions/21284312/moment-js-check-if-a-date-is-today-or-in-the-future

    // https://momentjs.com/

}


// FIRE!
init();