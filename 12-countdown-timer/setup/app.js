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
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const sec = document.getElementById("sec");
const min = document.getElementById("min");
const hour = document.getElementById("hour");
const day = document.getElementById("day");

function formatTime() {
  let newSec = parseInt(sec.innerText) - 1;
  sec.innerText = newSec == 0 ? 59 : newSec;

  if (newSec == 0) {
    let newMin = parseInt(min.innerText) - 1;
    min.innerText = newMin == 0 ? 59 : newMin;
    if (newMin == 0) {
      let newHour = parseInt(hour.innerText) - 1;
      hour.innerText = newHour == 0 ? 23 : newHour;
      if (newHour == 0) {
        let newDay = parseInt(day.innerText) - 1;
        day.innerText = newDay == 0 ? 0 : newDay;

        if (
          parseInt(sec.innerText) == 0 &&
          parseInt(min.innerText) == 0 &&
          parseInt(hour.innerText) == 0 &&
          parseInt(day.innerText) == 0
        ) {
          clearInterval(countdown);
        }
      }
    }
  }
}

let countdown = setInterval(formatTime, 1000);
