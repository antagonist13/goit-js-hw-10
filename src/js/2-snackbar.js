import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const delayLabel = document.querySelector(".form").firstElementChild
delayLabel.classList.add('delay')
const delayInput = delayLabel.lastElementChild
delayInput.classList.add('delayInput')

const createbtn = document.querySelector("button")
createbtn.classList.add("create-btn")

const fulfilledInput = document.querySelector('input[value="fulfilled"]');
const rejectedInput = document.querySelector('input[value="rejected"]');


createbtn.addEventListener("click", ((event) => {
    event.preventDefault()
    let status
    setTimeout(() => {
        if (fulfilledInput.checked) { status = true };
        if (rejectedInput.checked) { status = false };

        promiseCreator(status).then(smile => {
        iziToast.success({
            message: `${smile} Fulfilled promise in ${delayInput.value}ms`,
            position: 'topRight'
        });
            console.log(`${smile} Fulfilled promise in ${delayInput.value}ms`);
        })
        promiseCreator(status).catch(smile => {
        iziToast.error({
            message: `${smile} Rejected promise in ${delayInput.value}ms`,
            position: 'topRight'
        });
            console.log(`${smile} Rejected promise in ${delayInput.value}ms`);
        });
    }, delayInput.value)
}))

function promiseCreator (status) {
            const promise = new Promise((resolve, reject) => {
      if (status) {
        resolve('✅');
      } else {
        reject('❌');
      }
    });
  ;
  return promise;
}