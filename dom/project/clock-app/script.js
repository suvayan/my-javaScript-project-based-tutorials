// Titles for footer app buttons
const appIconBtnsTitle = ["Clock", "Alarm", "Stopwatch", "Timer"];

// Day and month names for date formatting
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

// Day and month names for date formatting
const body = document.querySelector("body");
const headerText = document.querySelector(".header-text");
const main = document.querySelector("main");
const appIconBtns = document.querySelector("footer").children;
const themeIcon = document.querySelector("#theam-icon");


// Handle footer button clicks (Clock, Alarm, Stopwatch, Timer)
const btnClickHandler = (event) => {
    const title = event.target.attributes.title.value; // get button title
    headerText.textContent = title; // update header

    // Show the selected section, hide others
    const children = Array.from(main.children);
    children.forEach((child)=>{
        if(child.getAttribute("class").includes(title.toLowerCase())){
            child.classList.remove("main-hidden"); // show active section
        }else{
            child.classList.add("main-hidden"); // hide inactive sections
        }
    })
}

// Assign titles and add click event listeners to footer buttons
Array.from(appIconBtns).forEach((btn, i) => {
    btn.title = appIconBtnsTitle[i];
    btn.addEventListener("click", btnClickHandler);
});



// Toggle dark/light theme on theme icon click
themeIcon.addEventListener("click", function(){
    body.classList.toggle("dark-theme"); // switch theme class on body
    themeIcon.classList.toggle("fa-sun"); // toggle sun icon
    themeIcon.classList.toggle("fa-moon"); // toggle moon icon
})



// Add leading zero for single-digit numbers
const addZero = (num) => {
    return num >=10 ? num : `0${num}`
}




