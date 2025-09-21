// Clock handler: updates time and date
const clockHandler = () => {
    const now = new Date();

    // Current time
    const hour = now.getHours();
    const munite = now.getMinutes();
    const second = now.getSeconds();

    // Current date
    const day = now.getDay();
    const month = now.getMonth();
    const date = now.getDate();
    const year = now.getFullYear();

    // Time element references
    const hourEl = document.querySelector("#hour");
    const muniteEl = document.querySelector("#munite");
    const secondEl = document.querySelector("#second");
    const dateText = document.querySelector("#date-text");

    // Format full date string
    const today = `${days[day]}, ${date} ${months[month]} ${year}`;
    dateText.textContent = today;

    // Update clock digits with leading zeros
    hourEl.textContent = addZero(hour);
    muniteEl.textContent = addZero(munite);
    secondEl.textContent = addZero(second);


}

// Run clockHandler every second to update clock
setInterval(clockHandler, 1000);