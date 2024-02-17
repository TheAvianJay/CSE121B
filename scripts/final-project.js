//Below is the link to the api
const superHeroFactsElement = document.getElementById('superHeroFacts');

const addSuperHeroListElement = () => {
    const superHeroList = document.createElement('div');
    superHeroList.id = 'superHeroList';
    superHeroFactsElement.appendChild(superHeroList);
}

const displayInputBox = () => {
    const input = document.createElement('input');
    input.id = 'numberOfSuperHeros';
    superHeroFactsElement.appendChild(input);
}

const displayButton = () => {
    const button = document.createElement('button');
    button.id = 'superHeroButton';
    button.textContent = 'Submit';
    superHeroFactsElement.appendChild(button);
}

const clearDisplay = () => {
    const superHeroList = document.getElementById('superHeroList');
    if (superHeroList) {
        if (superHeroList.hasChildNodes()) {
            superHeroList.innerHTML = '';
         }
    }
}

//This is to display the facts
const displaySuperHeroFacts = (superHeroFacts) => {
    clearDisplay();
    superHeroFacts.forEach((superHero) => {
        const article = document.createElement('article');
        const h1 = document.createElement('h1');
        const h4 = document.createElement('h4');
        h1.innerText = superHero.name;
        h4.innerText = 'Strength: ';
        h4.innerText += superHero.powerstats.strength;
        article.appendChild(h1);
        article.appendChild(h4);
        superHeroList.appendChild(article);
    });
}

const getSuperHeroData = async () => {
    const url = 'https://superhero-search.p.rapidapi.com/api/heroes';
    let result = '';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b243552f93msh69403edf7f6ff4ap16d023jsn57bf8fbf06ac',
            'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        result = await response.json();
    } catch (error) {
        console.error(error);
    }
    const inputNumber = Number(document.querySelector('#numberOfSuperHeros').value);

    const superHerosArray = result.slice(0, inputNumber);
    displaySuperHeroFacts(superHerosArray);
}

displayInputBox();
displayButton();
addSuperHeroListElement();

document.querySelector('#superHeroButton').addEventListener('click', getSuperHeroData);