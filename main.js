// getting the current Date

const today = new Date();
const dayOfMonth = today.getDate();

document.getElementById("day").textContent = dayOfMonth;

//console.log(dayOfMonth);

const monthOfYear = today.getMonth() + 1;
document.getElementById("month").textContent = monthOfYear;

const year = today.getFullYear();
document.getElementById("year").textContent = year;

// Calculating the milliseconds per day times 90 to have 90 days in milliseconds

const millisecondsPerDay = 1000 * 60 * 60 * 24;
const ninetyDays = millisecondsPerDay * 90;

// Adding the 90 days on the current Date and saving it in futureDate
const futureDate = new Date(today.getTime() + ninetyDays);

// Saving the future Day, Month and year in variables
const futureDay = futureDate.getDate();
const futureMonth = futureDate.getMonth() + 1;
const futureYear = futureDate.getFullYear();

// Setting the future Day, Month and year in the optionDate label
document.getElementById("optionDate").textContent = (`${futureDay} ${futureMonth} ${futureYear}`);

const elevenMonth = millisecondsPerDay * 334.584;

const futureflightDates = new Date(today.getTime() + elevenMonth);

const futureflightDay = futureflightDates.getDate();
const futureflightMonth = futureflightDates.getMonth() + 1;
const futureflightYear = futureflightDates.getFullYear();

document.getElementById("flightDates").textContent = (`${futureflightDay} ${futureflightMonth} ${futureflightYear}`);