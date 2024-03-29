import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";


import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

let initTime = Date.now()
const picker = document.querySelector("#datetime-picker")
const flatpickrInput = document.querySelector(".timer-section").firstElementChild
const startBtn = document.querySelector("[data-start]")
startBtn.disabled = true
startBtn.classList.add("start-btn")

const days = document.querySelector("[data-days]")
const hours = document.querySelector("[data-hours]")
const minutes = document.querySelector("[data-minutes]")
const seconds = document.querySelector("[data-seconds]")

let userSelectedDate
let intervalId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0]);
      
      userSelectedDate = selectedDates[0]
      if (userSelectedDate <= initTime) {
        startBtn.disabled = true 
        //   alert("Please choose a date in the future")
          iziToast.error({
              message: 'Please choose a date in the future',
              position: 'topRight'
});
      } else {
          startBtn.disabled = false
          
      }
   },        
};

flatpickr(picker, options);

startBtn.addEventListener("click", (() => {
    startBtn.disabled = true
    picker.disabled = true

  flatpickrInput.addEventListener("click", ((event) => {
      event.preventDefault()
  }))
  flatpickrInput.addEventListener("focus", ((event) => {
      this.blur();
  }))

    intervalId = setInterval(() => {
        const currentTime = Date.now();
        const diff = userSelectedDate - currentTime

      
        if (diff < 1000) clearInterval(intervalId);
        days.textContent = formater(convertMs(diff).days)
        hours.textContent = formater(convertMs(diff).hours)
        minutes.textContent = formater(convertMs(diff).minutes)
        seconds.textContent = formater(convertMs(diff).seconds)
    }, 1000)
     
    
    
}))

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
function formater (data) {
 return String(data).padStart(2, '0');
}
