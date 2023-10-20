// Imposta un intervallo per chiamare la funzione displayTime ogni secondo.
setInterval(displayTime, 1000);

// La funzione displayTime viene chiamata all'inizio e poi a intervalli regolari.
function displayTime() {
    // Ottieni la data corrente.
    const date = new Date();

    // Formatta l'ora in un formato orario 12 ore.
    const h = formatHour(date.getHours());

    // Formatta i minuti e i secondi aggiungendo uno zero iniziale se necessario.
    const m = formatTimeUnit(date.getMinutes());
    const s = formatTimeUnit(date.getSeconds());

    
    const today = getDayOfWeek(date);
    const mm = getMonthName(date);
    const yy = date.getFullYear();


    const period = getPeriod(date);

    const time = `${h}:${m}:${s}`;


    const formattedDate = `${date.getDate()} ${mm} ${yy}`;

    
    const digitalClock = document.getElementById('Digital_Clock');
    digitalClock.innerHTML = `${time} ${period}`;

    const hourClock = document.getElementById('Hour_Clock');
    hourClock.innerHTML = `${today} ${formattedDate}`;
}

// Questa funzione formatta l'ora in un formato orario 12 ore.
function formatHour(hour) {
    if (hour > 12) {
        hour -= 12;
    }
    if (hour === 0) {
        hour = 12;
    }
    return formatTimeUnit(hour);
}

// Questa funzione aggiunge uno zero iniziale se l'unità è inferiore a 10.
function formatTimeUnit(unit) {
    return unit < 10 ? "0" + unit : unit;
}


function getDayOfWeek(date) {
    const weekDays = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];
    return weekDays[date.getDay()];
}


function getMonthName(date) {
    return date.toLocaleString("default", { month: "long" });
}


function getPeriod(date) {
    return date.getHours() >= 12 ? "PM" : "AM";
}


displayTime();