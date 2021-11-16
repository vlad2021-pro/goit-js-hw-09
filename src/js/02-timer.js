    import flatpickr from 'flatpickr';

    import 'flatpickr/dist/flatpickr.min.css';

    Number.prototype.padStart = function () {
    return this.toString().padStart(2, '0');
    };
    const refs = {
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
    startBtn: document.querySelector('[data-start]'),
    inputEl: document.querySelector('input[type="text"]'),
    };

    const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] < new Date().getTime()) {
        window.alert('Please choose a date in the future');
        refs.startBtn.disabled = true;

        return;
        }
        refs.startBtn.disabled = false;
        refs.startBtn.addEventListener('click', onStartTimer(selectedDates[0].getTime()));
    },
    };

    flatpickr(refs.inputEl, options);

    function onStartTimer(targetDate) {
    return () => {
        const intervalId = setInterval(() => {
        const currentDate = targetDate - Date.now();
        const { days, hours, minutes, seconds } = convertMs(currentDate);

        refs.days.textContent = days.padStart();
        refs.hours.textContent = hours.padStart();
        refs.minutes.textContent = minutes.padStart();
        refs.seconds.textContent = seconds.padStart();

        if (currentDate < 1000) {
            clearInterval(intervalId);
        }
        }, 1000);
    };
    }

    function convertMs(ms) {
    
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
        const day = hour * 24;
        const days = Math.floor(ms / day);
    
    const hours = Math.floor((ms % day) / hour);
    
    const minutes = Math.floor(((ms % day) % hour) / minute);
    
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
    }