function attachEventsListeners() {
    const daysBtn = document.getElementById('daysBtn');
    const hoursBtn = document.getElementById('hoursBtn');
    const minutesBtn = document.getElementById('minutesBtn');
    const secondsBtn = document.getElementById('secondsBtn');

    const daysInput = document.getElementById('days');
    const hoursInput = document.getElementById('hours');
    const minutesInput = document.getElementById('minutes');
    const secondInput = document.getElementById('seconds');

    daysBtn.addEventListener('click', function() {
        let days = daysInput.value;
        hoursInput.value = days * 24;
        minutesInput.value = days * 1440;
        secondInput.value = days * 86400;
    });

    hoursBtn.addEventListener('click', function() {
        let hours = hoursInput.value;
        daysInput.value = hours / 24;
        minutesInput.value = hours * 1440;
        secondInput.value = hours * 86400;
    });

    minutesBtn.addEventListener('click', function() {
        let minutes = minutesInput.value;
        hoursInput.value = minutes / 60;
        daysInput.value = minutes / 60 / 24;
        secondInput.value = minutes * 60;
    });

    secondsBtn.addEventListener('click', function() {
        let seconds = secondInput.value;
        minutesInput.value = seconds / 60;
        hoursInput.value = seconds / 60 / 60;
        daysInput.value = seconds / 60 / 60 / 24;
    });
}