function attachEventsListeners() {
    document.getElementById('daysBtn').addEventListener('click', convertDays);
    document.getElementById('hoursBtn').addEventListener('click', convertHours);
    document.getElementById('minutesBtn').addEventListener('click', convertMinutes);
    document.getElementById('secondsBtn').addEventListener('click', convertSeconds);

    function convertDays() {
        let days = Number(document.getElementById('days').value)
        let hours = document.getElementById('hours').value = days * 24;
        let minutes = document.getElementById('minutes').value = hours * 60;
        let seconds = document.getElementById('seconds').value = minutes * 60;
    }

    function convertHours() {
        let hours = Number(document.getElementById('hours').value)
        let days = document.getElementById('days').value = hours / 24;
        let minutes = document.getElementById('minutes').value = hours * 60;
        let seconds = document.getElementById('seconds').value = minutes * 60;
    }

    function convertMinutes() {
        let minutes = Number(document.getElementById('minutes').value);
        let hours = document.getElementById('hours').value = minutes / 60;
        let days = document.getElementById('days').value = hours / 24;
        let seconds = document.getElementById('seconds').value = minutes * 60;
    }

    function convertSeconds() {
        let seconds = Number(document.getElementById('seconds').value);
        let minutes = document.getElementById('minutes').value = seconds / 60;
        let hours = document.getElementById('hours').value = minutes / 60;
        let days = document.getElementById('days').value = hours / 24;
    }
}