const toggleClock = document.querySelector("#toggleClock");
const toggleHour = document.querySelector("#toggleHour");
const clockTime = document.querySelector(".clock-time");



const hourFormater = (val) => {
    let hour = val % 12;
    hour = hour ? hour : 12;
    return hour;
}


// Clock handler: updates time and date
const clockHandler = () => {
    const now = new Date();

    // Current time
    const hour = toggleHour.checked? hourFormater(now.getHours()) : now.getHours();
    const munite = now.getMinutes();
    const second = now.getSeconds();

    // Current date
    const day = now.getDay();
    const month = now.getMonth();
    const date = now.getDate();
    const year = now.getFullYear();

    // Determine AM/PM
    const ampm = now.getHours() >= 12 ? "PM" : "AM";

    // Time element references
    const hourEl = document.querySelector("#hour");
    const muniteEl = document.querySelector("#munite");
    const secondEl = document.querySelector("#second");
    const dateText = document.querySelector("#date-text");
    const ampmEL = document.querySelector("#ampm");
    ampmEL.style.display = toggleHour.checked? "block" : "none";

    // Format full date string
    const today = `${days[day]}, ${date} ${months[month]} ${year}`;
    dateText.textContent = today;

    // Update clock digits with leading zeros
    hourEl.textContent = addZero(hour);
    muniteEl.textContent = addZero(munite);
    secondEl.textContent = addZero(second);
    ampmEL.textContent = ampm;

}



// Run clockHandler every second to update clock
setInterval(clockHandler, 1000);





toggleClock.addEventListener("change",function(e){
    const isChecked = e.target.checked;
    const children  = Array.from(clockTime.children);
    if(isChecked){
        children.forEach((child)=>{
            child.classList.add("time-text-small");
        })
    }else{
        children.forEach((child)=>{
            child.classList.remove("time-text-small");
        })
    }
})


// toggleHour.addEventListener("change",function(e){
//     const isChecked = e.target.checked;
//     toggleClock.disabled = isChecked;
// })