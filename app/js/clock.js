// Clock functionality
// Use the setInterval function to call the specified function
// every second
setInterval(setClock, 1000);

// Grab elements from the DOM
const secondHand = document.querySelector("[data-second-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const hourHand = document.querySelector("[data-hour-hand]");
const dayEl = document.querySelector(".day");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");

// Create lists to hold the days in a week and months in a year
const days = [
   "Sunday",
   "Monday",
   "Tuesday",
   "Wednesday",
   "Thursday",
   "Friday",
   "Saturday",
];

const months = [
   "January",
   "February",
   "March",
   "April",
   "May",
   "June",
   "July",
   "August",
   "September",
   "October",
   "November",
   "December",
];

// Define a function to handle the clock's functionality
function setClock() {
   // Get the current date using the Date() constructor
   const currentDate = new Date();
   const month = currentDate.getMonth();
   const day = currentDate.getDay();
   const date = currentDate.getDate();
   const hours = currentDate.getHours();
   const minutes = currentDate.getMinutes();
   const year = currentDate.getFullYear();

   const secondsRatio = currentDate.getSeconds() / 60;
   const minutesRatio = (secondsRatio + minutes) / 60;
   const hoursRatio = (minutesRatio + hours) / 12;

   // Call the setRotation function and pass in the values that set the hand positions
   setRotation(secondHand, secondsRatio);
   setRotation(minuteHand, minutesRatio);
   setRotation(hourHand, hoursRatio);

   // Set the time for the digital clock
   dayEl.innerHTML = `${days[day]}`;
   // timeEl.innerHTML = `${hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
   timeEl.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${
      minutes < 10 ? `0${minutes}` : minutes
   }`;
   dateEl.innerHTML = `${months[month]} <span class="circle-bg">${
      date < 10 ? `0${date}` : date
   }</span> ${year}`;
}

function setRotation(element, rotationRatio) {
   element.style.setProperty("--rotation", rotationRatio * 360);
}

// Call setClock() function as soon as the page loads
setClock();
