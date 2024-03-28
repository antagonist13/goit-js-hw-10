import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const delayLabel = document.querySelector(".form").firstElementChild
delayLabel.classList.add('delay')
delayLabel.lastElementChild.classList.add('delayInput')
const createbtn = document.querySelector("button")
createbtn.classList.add("create-btn")

createbtn.addEventListener("click", (() => {

}))

function createPromise(delay, isActive, value) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isActive) {
        resolve(value);
      } else {
        reject(value);
      }
    }, delay);
  });

  return promise;
}
