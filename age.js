let monthEl = document.getElementById("month");
let dayEl = document.getElementById("day");
let yearEl = document.getElementById("year");

let agedisplayEl = document.getElementById("age-value")

let agesubmitEl = document.getElementById("age-submit");


agesubmitEl.addEventListener("click", ageCalc);

export default function ageCalc(){
    
    let d = new Date();
    let currentDate = d.getDate();
    let currentMonth = d.getMonth()+1;
    let currentYear=d.getFullYear();

    let currentAgeinYear= currentYear - Number(yearEl.value);
    let currentAgeinMonth= currentMonth - Number(monthEl.value);


    agedisplayEl.innerHTML =`Your age is: ${currentAgeinYear} years ${currentAgeinMonth} month(s)`;
}
