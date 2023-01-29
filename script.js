
const BASE_URL = "https://superheroapi.com/api.php/3355326938120861";
const heroImageDiv = document.getElementById("HeroImage");
const getRandomSuperHero = (id) => {
    fetch(`${BASE_URL}/${id}`)
        .then(response => response.json())
        .then(json => {
            const superHero = json;
            showInfo(superHero);
        }
        )
}
const stateToEmoji = {
    intelligence: '',
    strength: '',
    speed: '',
    durability: '',
    power: '',
    combat: ''

}

const getPowerStatHTML = (character) => {
    const stats = Object.keys(character.powerstats).map(stat => {
        return `<p> ${stateToEmoji[stat]}${stat.toUpperCase()} : ${character.powerstats[stat]}</p>`
    })
    return `<h2> Power Stats </h2>` + stats.join('');
}

const getAppearanceHTML = (character) => {
    const stats = Object.keys(character.appearance).map(stat => {
        return `<p>${stat.toUpperCase()} : ${character.appearance[stat]}</p>`
    })
    return `<h2> Appearance </h2>` + stats.join('');
}

const getWorkHTML = (character) => {
    const stats = Object.keys(character.work).map(stat => {
        return `<p>${stat.toUpperCase()} : ${character.work[stat]}</p>`
    })
    return `<h2> Work </h2>` + stats.join('');
}

const showInfo = (character) => {
    const name = `<h2> ${character.name} </h2>`
    const image = `<img src="${character.image.url}" alt="${character.name}" height=200 width=200/>`
    const powerstatHTML = getPowerStatHTML(character);
    const appearanceHTML = getAppearanceHTML(character);
    const workHTML = getWorkHTML(character);
    heroImageDiv.innerHTML = `${name} ${image} ${appearanceHTML} ${powerstatHTML} ${workHTML}`;
}

const getSearchedSuperHero = (name) => {
    fetch(`${BASE_URL}/search/${name}`)
        .then(response => response.json())
        .then(json => {
            const hero = json.results[0];
            showInfo(hero);
        }
        )
}


const searchButton = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');
searchButton.onclick = () => getSearchedSuperHero(searchInput.value);


