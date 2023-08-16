// COUNT ANIMATION

//  1 METHOD 

let displayValue = document.querySelectorAll(".num");
let interval=500;
console.log("displayValue");

displayValue.forEach((displayValue) => {
    let startVal =0;
    let endVal= parseInt(displayValue.getAttribute("data-val"));
    let duration=Math.floor(interval / endVal);
    let counter = setInterval(function() {
     startVal +=1;
     displayValue.textContent=startVal;
     if(startVal==endVal){
    clearInterval(counter);
   }
    }, duration);
}
);