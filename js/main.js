setInterval(displayTime, 1000);

function displayTime() {

    const date = new Date();

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let today = weekDay[date.getDay()];
    let mm = date.toLocaleString("default", {
        month: "long"
    });
    let yy = date.getFullYear();
    let period = "AM";

    if (h > 12) {
        h-= 12;
        period = "PM";
    }

    if (h === 0) {
        h = 12;
        period = "AM";
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    let time = h + ":" + m + ":" + s + period;

    document.getElementById('Digital_Clock').innerHTML = time + " " + today + " " + mm + " " + yy;

}
displayTime();