import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const currentTime = Date.now()
const picker = document.querySelector("#datetime-picker")
const startBtn = document.querySelector("[data-start]")
startBtn.disabled = true
let userSelectedDate
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0]);
      
      userSelectedDate = selectedDates[0]
      if (userSelectedDate <= currentTime) {
          startBtn.disabled = true 
          alert("Please choose a date in the future")
      } else {
          startBtn.disabled = false
          
      }
   },        
};

flatpickr(picker, options);
