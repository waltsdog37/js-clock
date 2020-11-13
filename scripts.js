let secondHand = document.querySelector(".second-hand");
let minuteHand = document.querySelector(".minute-hand");
let hourHand = document.querySelector(".hour-hand");

function setDate() {
    let now = new Date();
    let seconds = now.getSeconds();
    let secondsDegrees = ((seconds / 60)* 360) + 90;

    let minutes = now.getMinutes();
    let minuteDegrees = ((minutes / 60)* 360) + 90;
    
    let hours = now.getHours();
    let hourDegrees = ((hours / 12)* 360) + 90;
    
    secondHand.style.transform = "rotate("+secondsDegrees+"deg)";
    minuteHand.style.transform = "rotate("+minuteDegrees+"deg)";
    hourHand.style.transform = "rotate("+hourDegrees+"deg)";
}

setInterval(setDate, 1000);