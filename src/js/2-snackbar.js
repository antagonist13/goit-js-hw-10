import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const delayLabel = document.querySelector(".form").firstElementChild
delayLabel.classList.add('delay')
const delayInput = delayLabel.lastElementChild
delayInput.classList.add('delayInput')

const createbtn = document.querySelector("button")
createbtn.classList.add("create-btn")
const form = document.querySelector(".form")
const fulfilledInput = document.querySelector('input[value="fulfilled"]');
const rejectedInput = document.querySelector('input[value="rejected"]');


form.addEventListener("submit", ((event) => {
    event.preventDefault()
    let status
    const delay = delayInput.value
  
        if (fulfilledInput.checked) { status = true };
        if (rejectedInput.checked) { status = false };
  
      const newPromise = promiseCreator(status, delay)
  
        newPromise.then(() => {
        iziToast.success({
            message: `✅ Fulfilled promise in ${delay}ms`,
            position: 'topRight'
        });
            console.log(`✅ Fulfilled promise in ${delay}ms`);
        })
        newPromise.catch(() => {
        iziToast.error({
            message: `❌ Rejected promise in ${delay}ms`,
            position: 'topRight'
        });
            console.log(`❌ Rejected promise in ${delay}ms`);
        });
    }
))

function promiseCreator (status, delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status) {
        resolve();
      } else {
        reject();
      }
    }, delay)
  })
    return promise;
  }