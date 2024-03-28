const form = document.querySelector(".feedback-form");
const STORAGE_KEY = "feedback-form-state";

document.addEventListener("DOMContentLoaded", () => {
    const storedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (storedData) {
        const emailInput = document.querySelector(".email-input");
        const textArea = document.querySelector(".textarea");
        emailInput.value = storedData.email || "";
        textArea.value = storedData.message || "";
    }
});

form.addEventListener("input", (event) => {
    if (event.target.matches(".email-input, .textarea")) {
        const emailInput = document.querySelector(".email-input");
        const textArea = document.querySelector(".textarea");
        
        const storedData = {
            email: emailInput.value.trim(),
            message: textArea.value.trim()
        };

        localStorage.setItem(STORAGE_KEY, JSON.stringify(storedData));
    }
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const emailInput = document.querySelector(".email-input");
    const textArea = document.querySelector(".textarea");

    const storedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (emailInput.value.trim() === '' || textArea.value.trim() === '') {
        alert('All form fields must be filled in')
        return
    } 
    console.log({
        email: emailInput.value.trim(),
        message: textArea.value.trim()
    });

    localStorage.removeItem(STORAGE_KEY);
    form.reset();
});