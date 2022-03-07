let userName = prompt("Hi, your name?")
document.querySelector('#userName').innerText = userName



function DayAndTime() {
    let date = new Date()
    let [hour, minute, second, day] = [date.getHours(), date.getMinutes(), date.getSeconds(), date.getDay()]
    
    
    switch (new Data().getDay) {
        case 0:
            day = "Monday";
            break;
        case 1:
            day = "Tuesday";
            break;
        case 2:
            day = "Wednesday";
            break;
        case 3:
            day = "Thursday";
            break;
        case 4:
            day = "Friday";
            break;
        case 5:
            day = "Saturday";
            break;
        case 6:
            day = "Saturday";
            break;    
    }
    
    function checkTime(i){
        if (i < 10) {i = '0' + i};
        return i;
    };

    hour = checkTime(hour);
    minute = checkTime(minute);
    second = checkTime(second);

    // hour = hour < 10 ? "0" + hour : hour
    // minute = minute < 10 ? "0" + minute : minute
    // second = second < 10 ? "0" + second : second

   

    let infoTimer = `${hour}:${minute}:${second}-${dayName}`
    document.querySelector("#myClock").innerText = infoTimer
}


setInterval(DayAndTime, 1000);
