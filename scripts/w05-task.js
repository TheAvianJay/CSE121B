/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById('temples');
const templeUrl = 'https://byui-cse.github.io/cse121b-ww-course/resources/temples.json'
let templeList = []

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        const article = document.createElement('article');
        const h3 = document.createElement('h3');
        h3.innerText = temple.templeName;
        const image = document.createElement('img')
        image.src = temple.imageUrl;
        image.alt = temple.location
        article.appendChild(h3);
        article.appendChild(image);
        templesElement.appendChild(article);
    })
}

function monthNameToInt(monthName) {
    const months = {
        "January": 0,
        "February": 1,
        "March": 2,
        "April": 3,
        "May": 4,
        "June": 5,
        "July": 6,
        "August": 7,
        "September": 8,
        "October": 9,
        "November": 10,
        "December": 11
    };

    return months[monthName];
}

const dateConverter = (date) => {
    const dateParts = date.split(",").map(part => part.trim());
    const year = parseInt(dateParts[0]);
    const month = monthNameToInt(dateParts[1]);
    const day = parseInt(dateParts[2]);

    return new Date(year, month, day);
}

/* filterTemples Function */
const filterTemples = (temples) => {
    reset();
    const filter = document.getElementById('filtered');
    switch(filter.value) {
        case 'utah':
            const utahTemples = temples.filter((temple) => temple.location.includes('Utah'));
            displayTemples(utahTemples);
            break;
        case 'notutah':
            const nonUtahTemples = temples.filter((temple) => !temple.location.includes('Utah'));
            displayTemples(nonUtahTemples);
            break;
        case 'older':
            const oldDate = new Date(1950, 0, 1);
            const oldTemples = temples.filter((temple) => dateConverter(temple.dedicated) < oldDate);
            displayTemples(oldTemples);
            break;
        case 'all':
            displayTemples(temples);
            break;
        default:
            displayTemples(temples);
    }
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch(templeUrl)
    .then(function(response) {
        return response.json();
    }).then(function(data) {
    filterTemples(data);
    return;
    })
}

/* reset Function */
const reset = () => {
    templesElement.innerHTML = '';
}

/* Event Listener */
document.getElementById('filtered').addEventListener('change', getTemples);

getTemples();
