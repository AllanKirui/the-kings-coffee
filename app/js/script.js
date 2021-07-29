// Use the setInterval function to call the specified function
// every second
setInterval(setClock, 1000);

// Grab elements from the DOM
const secondHand = document.querySelector("[data-second-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const hourHand = document.querySelector("[data-hour-hand]");

// Define a function to handle the clock's functionality
function setClock() {
   // Get the current date using the Date() constructor
   const currentDate = new Date();
   const secondsRatio = currentDate.getSeconds() / 60;
   const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
   const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

   //    Call the setRotation function and pass in the values that set the hand positions
   setRotation(secondHand, secondsRatio);
   setRotation(minuteHand, minutesRatio);
   setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio) {
   element.style.setProperty("--rotation", rotationRatio * 360);
}

// Call setClock() function as soon as the page loads
setClock();
