/* LESSON 3 - Programming Tasks */

/* Profile Object  */
const myProfile = {
    name: "Jack Peterson",
    photo: "images/jrp.png",
    favoriteFoods: [
        'Pizza',
        'Apple',
        'Rice',
        'Chicken'
    ],
    hobbies: [
        'Videogames',
        'Drawing and art',
        'Anysport my friends invite me to',
        'novice cooker'
    ],// commas are my greatest folly
    placesLived:[],
};//and these semicolons

myProfile.placesLived.push(
    {
        place: 'St. George UT',
        length: '2 years'
    }//note this is a lie
);

myProfile.placesLived.push(
    {
        place: 'San Diego CA',
        length: '16 Years'
    }// This is also a lie
);

document.querySelector('#name').textContent = myProfile.name;
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#name').alt = myProfile.photo;

myProfile.favoriteFoods.forEach(food => {
    const li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

myProfile.hobbies.forEach(hobby => {
    const li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

myProfile.placesLived.forEach(place => {
    const dt = document.createElement('dt');
    const dd = document.createElement('dd');
    dt.textContent = place.place;
    dd.textContent = place.length;
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
});

