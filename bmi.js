let heightEl = document.getElementById("height");
let weightEl = document.getElementById("weight");

let bmidisplayEl = document.getElementById("bmi-value");

let bmisubmitEl = document.getElementById("bmi-submit");

bmisubmitEl.addEventListener("click",bmiCalc);

export default function bmiCalc(){
    let heightSquare =Math.pow(Number(heightEl.value), 2);
    let bmiResult = Math.floor(Number(weightEl.value)*703/heightSquare);
    let bmiStatus = document.querySelector("#bmistatus");
    //if no bmiStatus element is found, then we create a new p
        bmiStatus = document.createElement("p");
        bmiStatus.setAttribute("id","bmistatus");
        let bmiBody = document.getElementById("bmi");
        bmiBody.appendChild(bmiStatus);
    
    bmidisplayEl.innerHTML =`Your bmi is ${bmiResult}`;
    
    if (bmiResult <= 18.5){
        bmiStatus.textContent = `Underweight`;
    }else if(bmiResult => 25){
        bmiStatus.textContent = `Overweight`;
    }
    else{
        bmiStatus.textContent =` Healthy`;
    }
    

}
