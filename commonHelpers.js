import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f,i as h}from"./assets/vendor-BbSUbo7J.js";let y=Date.now();const d=document.querySelector("#datetime-picker"),a=document.querySelector(".timer-section").firstElementChild,n=document.querySelector("[data-start]");n.disabled=!0;n.classList.add("start-btn");const p=document.querySelector("[data-days]"),S=document.querySelector("[data-hours]"),v=document.querySelector("[data-minutes]"),b=document.querySelector("[data-seconds]");let s,c=null;const q={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){console.log(t[0]),s=t[0],s<=y?(n.disabled=!0,h.error({message:"Please choose a date in the future",position:"topRight"})):n.disabled=!1}};f(d,q);n.addEventListener("click",()=>{n.disabled=!0,d.disabled=!0,a.addEventListener("click",t=>{t.preventDefault()}),a.addEventListener("focus",t=>{(void 0).blur()}),c=setInterval(()=>{const t=Date.now(),e=s-t;e<1e3&&clearInterval(c),p.textContent=r(o(e).days),S.textContent=r(o(e).hours),v.textContent=r(o(e).minutes),b.textContent=r(o(e).seconds)},1e3)});function o(t){const i=Math.floor(t/864e5),u=Math.floor(t%864e5/36e5),l=Math.floor(t%864e5%36e5/6e4),m=Math.floor(t%864e5%36e5%6e4/1e3);return{days:i,hours:u,minutes:l,seconds:m}}function r(t){return String(t).padStart(2,"0")}
//# sourceMappingURL=commonHelpers.js.map