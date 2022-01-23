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

//FIXME: Not working
//Moves days to right place
for (let i = 1; i <= currentDay; i++) {
    let p = document.createElement('p');
    p.innerHTML = ' ';
    days.appendChild(p);
}

for (let i = 1; i <= daysInMonth; i++) {
    let p = document.createElement('p');
    p.classList.add('day-number');
    p.innerHTML = i;
    days.appendChild(p);
}

// Get all colors
let allColors = document.querySelectorAll('.moods-palette__mood__color');
const colorsNames = ['colorPerfect', 'colorGood', 'colorSoSo', 'colorAwful'];

const allDays = document.querySelectorAll('.day-number');

allColors.forEach((element, index) =>
    element.addEventListener('click', function () {
        //Delete selected-color from not clicked elements
        let otherColors = document.querySelector('.selected-color');
        otherColors ? otherColors.classList.remove('selected-color') : '';

        //Add selected-color for clicked element
        element.classList.add('selected-color');

        allDays.forEach((element) =>
            element.addEventListener('click', function () {
                if (index === 0) {
                    element.classList.add('day-number--perfect');
                } else if (index === 1) {
                    element.classList.add('day-number--good');
                } else if (index === 2) {
                    element.classList.add('day-number--so-so');
                } else {
                    element.classList.add('day-number--awful');
                }
            })
        );
    })
);
