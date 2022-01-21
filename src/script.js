const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

//Get current date
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth();
let currentDay = currentDate.getDay();

//Display current month name
const monthDisplay = document.getElementById('month');
monthDisplay.innerHTML = months[currentMonth];

//Get number of days in month
const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

//Display days
const days = document.getElementById('days');

//Moves days to right place
for (let i = 1; i <= currentDay; i++) {
    let p = document.createElement('p');
    p.innerHTML = '';
    days.appendChild(p);
}

for (let i = 1; i <= daysInMonth; i++) {
    let p = document.createElement('p');
    p.innerHTML = i;

    days.appendChild(p);
}
