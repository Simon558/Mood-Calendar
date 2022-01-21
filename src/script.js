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

let currentDate = new Date();

//Dsiplay current month name
const monthDisplay = document.getElementById('month');
let currentMonth = currentDate.getMonth();
monthDisplay.innerHTML = months[currentMonth];
