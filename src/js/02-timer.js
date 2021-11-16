import flatpickr from 'flatpickr'
import 'flatpickr/dist/flatpickr.min.css'

const refs = {
    inputEl: document.querySelector ('input[type="text"]'),
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
      if (selectedDates[0] < new Date().getTime())

      console.log(selectedDates[0]);
      
      
  },
};


flatpickr(refs.inputEl, options)