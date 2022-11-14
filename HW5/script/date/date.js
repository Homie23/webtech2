var date = new Date();
var day = new Array("Sunday", "Monday", "Tuesday",
    "Wednesday", "Thursday", "Friday", "Saturday");
var month = new Array("January", "February", "March", "April", "April", "June",
    "July", "August", "September", "October", "November", "December");
document.getElementById('current_date').innerHTML = day[date.getDay()] + ", " + month[date.getMonth()] + " " + date.getDate()
    + ", " + date.getFullYear();


let displayedHours;
let displayedMinutes;
let displayedSeconds;
function time_board() {
    const currentDate = new Date();
    const seconds = currentDate.getSeconds();
    const minutes = currentDate.getMinutes();
    const hours = currentDate.getHours();
    if (displayedHours !== hours) {
        setHours(hours);
    }
    if (displayedMinutes !== minutes) {
        setMinutes(minutes);
    }
    if (displayedSeconds !== seconds) {
        setSeconds(seconds);
    }
}
function setSeconds(seconds) {
    displayedSeconds = seconds;
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    document.getElementById('ctime_seconds').innerHTML = seconds;
}
function setMinutes(minutes) {
    displayedMinutes = minutes;
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    let min = document.getElementById('ctime_minutes').innerHTML = `${minutes}:`;

}
function setHours(hours) {
    displayedHours = hours;
    if (hours < 10) {
        hours = "0" + hours;
    }
    document.getElementById('ctime_hours').innerHTML = `${hours}:`;
}
setInterval(time_board, 1000);





