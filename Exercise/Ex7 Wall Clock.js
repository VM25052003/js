function updateClock() {
    let currentTime = new Date()
    let currentHour = currentTime.getHours()
    let currentMin= currentTime.getMinutes()
    let currentSec = currentTime.getSeconds()

    //Padding 0 in front of Single Digit
    currentHour += (currentHour < 10 ? "0" : "")
    currentMin += (currentMin < 10 ? "0" : "")
    currentSec += (currentSec < 10 ? "0" : "")

    //Fixing AM/PM
    let timeofDay = (currentHour < 12) ? "AM" : "PM"

    //24-hour to 12-hour format
    currentHour = (currentHour > 12)? currentHour - 12: currentHour;
    currentHour = (currentHour == 0)? 12: currentHour;

    //Inserting Time String inside DOM
    let currentTimeStr = currentHour + ":" + currentMin + ":" + currentSec + " " + timeofDay
    document.getElementById('clock').innerHTML = currentTimeStr
}
