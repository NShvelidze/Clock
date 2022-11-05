setInterval(setClock, 1000)

var secondArrow = document.querySelector('[data-second-arrow]');
var minuteArrow = document.querySelector('[data-minute-arrow]');
var hourArrow = document.querySelector('[data-hour-arrow]');

function setClock() {
    var currentDate = new Date();
    var secondsRatio = currentDate.getSeconds() / 60;
    var minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    var hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
    
    secondArrow.style.setProperty('--rotation', secondsRatio * 360);
    minuteArrow.style.setProperty('--rotation', minutesRatio * 360);
    hourArrow.style.setProperty('--rotation', hoursRatio * 360);

}


setClock();