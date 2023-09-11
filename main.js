let dayOfWeek = document.getElementById("day")
let time = document.getElementById("time")
let date = new Date()
let numberOfTheWeek = date.getDay();
let hours = date.getHours();
let minutes = date.getMinutes();


// Get the current date
const currentDate = new Date();

// Define an array of days of the week
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Get the day of the week as a number (0-6)
const dayIndex = currentDate.getDay();

// Get the name of the day of the week
const dayName = daysOfWeek[dayIndex];

// Display the day of the week in the HTML element
const dayOfWeekElement = document.getElementById('dayOfWeek');
dayOfWeekElement.textContent = dayName;


function updateUTCTime() {
  const timeElement = document.getElementById("time");
  const currentTime = new Date();
  const utcTimeString = currentTime.toISOString().split("T")[1].split(".")[0]; // Extract the time part from the ISO string
  timeElement.textContent = utcTimeString;
}

// Call the function to initially set the UTC time
updateUTCTime();

// Update the UTC time every second
setInterval(updateUTCTime, 1000);




// let seconds = date.getSeconds();
// let dayOfTheWeek ;
// if (numberOfTheWeek == 1) {
//     dayOfTheWeek = 'Monday'
// } else if (numberOfTheWeek == 2) {
//     dayOfTheWeek = 'Tuesday'
// } else if (numberOfTheWeek == 3) {
//     dayOfTheWeek = 'Wednesday'
// } else if (numberOfTheWeek == 4) {
//     dayOfTheWeek = 'Thursday'
// } else if (numberOfTheWeek == 5) {
//     dayOfTheWeek = 'Friday'
// } else if (numberOfTheWeek == 6) {
//     dayOfTheWeek = 'Saturday'
// } else if (numberOfTheWeek == 7) {
//     dayOfTheWeek = 'Sunday'
// }
// dayy.innerHTML = dayOfTheWeek
// time.innerHTML = `${hours}:${minutes}`