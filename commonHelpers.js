import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as o}from"./assets/vendor-EyZmBGcZ.js";const a=Date.now(),n=document.querySelector("#datetime-picker"),e=document.querySelector("[data-start]");e.disabled=!0;let r;const i={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){console.log(t[0]),r=t[0],r<=a?(e.disabled=!0,alert("Please choose a date in the future")):e.disabled=!1}};o(n,i);
//# sourceMappingURL=commonHelpers.js.map