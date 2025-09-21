
const appIconBtnsTitle = ["Clock", "Alarm", "Stopwatch", "Timer"];
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];


const headerText = document.querySelector(".header-text");
const main = document.querySelector("main");
const appIconBtns = document.querySelectorAll(".fa-solid");
const dateText = document.querySelector("#date-text");

const btnClickHandler = (event) => {
    const title = event.target.attributes.title.value;
    headerText.textContent = title;

    const children = Array.from(main.children);

    children.forEach((child)=>{
        if(child.getAttribute("class").includes(title.toLowerCase())){
            child.classList.remove("main-hidden");
        }else{
            child.classList.add("main-hidden");
        }
    })
}

appIconBtns.forEach((btn, i) => {
    btn.title = appIconBtnsTitle[i];
    btn.addEventListener("click", btnClickHandler);
});




const addZero = (num) => {
    return num >=10 ? num : `0${num}`
}



const clockHandler = () => {
    const now = new Date();
    const hour = now.getHours();
    const munite = now.getMinutes();
    const second = now.getSeconds();

    const day = now.getDay();
    const month = now.getMonth();
    const date = now.getDate();
    const year = now.getFullYear();

    const hourEl = document.querySelector("#hour");
    const muniteEl = document.querySelector("#munite");
    const secondEl = document.querySelector("#second");

    const today = `${days[day]}, ${date} ${months[month]} ${year}`;

    dateText.textContent = today;


    hourEl.textContent = addZero(hour);
    muniteEl.textContent = addZero(munite);
    secondEl.textContent = addZero(second);


}


setInterval(clockHandler, 1000);

