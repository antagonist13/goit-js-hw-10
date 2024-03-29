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
    
        if (fulfilledInput.checked) { status = true };
        if (rejectedInput.checked) { status = false };
  
      const newPromise = promiseCreator(status, delayInput.value)
  
        newPromise.then(smile => {
        iziToast.success({
            message: `${smile} Fulfilled promise in ${delayInput.value}ms`,
            position: 'topRight'
        });
            console.log(`${smile} Fulfilled promise in ${delayInput.value}ms`);
        })
        newPromise.catch(smile => {
        iziToast.error({
            message: `${smile} Rejected promise in ${delayInput.value}ms`,
            position: 'topRight'
        });
            console.log(`${smile} Rejected promise in ${delayInput.value}ms`);
        });
    }
))

function promiseCreator (status, delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status) {
        resolve('✅');
      } else {
        reject('❌');
      }
    }, delay)
  })
    return promise;
  }