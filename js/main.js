// Imposta un intervallo per chiamare la funzione displayTime ogni secondo (1000 millisecondi).
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

    // Ottieni il giorno della settimana, il nome del mese e l'anno corrente.
    const today = getDayOfWeek(date);
    const mm = getMonthName(date);
    const yy = date.getFullYear();

    // Ottieni il periodo (AM o PM).
    const period = getPeriod(date);

    // Componi l'orario completo in un'unica stringa.
    const time = `${h}:${m}:${s}`;

    // Ottieni il formato della data "oggi data mese anno".
    const formattedDate = `${date.getDate()} ${mm} ${yy}`;

    // Ottieni l'elemento HTML con l'ID 'Digital_Clock' e aggiorna il suo contenuto.
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

// Questa funzione restituisce il nome del giorno della settimana.
function getDayOfWeek(date) {
    const weekDays = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];
    return weekDays[date.getDay()];
}

// Questa funzione restituisce il nome del mese.
function getMonthName(date) {
    return date.toLocaleString("default", { month: "long" });
}

// Questa funzione restituisce il periodo (AM o PM) in base all'ora corrente.
function getPeriod(date) {
    return date.getHours() >= 12 ? "PM" : "AM";
}

// Chiamiamo la funzione displayTime all'avvio per mostrare l'orario corrente.
displayTime();