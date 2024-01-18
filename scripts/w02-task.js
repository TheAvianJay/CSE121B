/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = 'Jack Peterson';
const currentYear = new Date().getFullYear();
const profilePicture = 'images/jrp.png'

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food')
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);


/* Step 5 - Array */
const food = ['Pizza', 'Apple', 'Chicken', 'Rice'];
const newFavFood = 'Rice Krispy Treat';
food.push(newFavFood);
foodElement.innerHTML += `<br>${food}`;
food.shift();
foodElement.innerHTML += `<br>${food}`;
food.pop();
foodElement.innerHTML += `<br>${food}`;
