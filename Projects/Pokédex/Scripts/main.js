const allPokemonUrl = "https://pokeapi.co/api/v2/pokemon/?limit=10000";

let allPokemon = [];


async function fetchMasterList() {

    const response = await fetch(allPokemonUrl);

    const masterData = await response.json();

    return masterData["results"];

}

const searchInput = document.getElementById("name");
const suggestionsList = document.getElementById("suggestions");

searchInput.addEventListener("input", () => { 
    const matchArray = allPokemon.filter((pokemon) => pokemon["name"].includes(searchInput.value));
    displayMatches(matchArray);

});

async function init() {

    allPokemon = await fetchMasterList();
    console.log(allPokemon);
}

init();


function displayMatches(matches) {

    const html = matches.map((pokemon) => `<li>${pokemon["name"]}</li>`).join('');
    suggestionsList.innerHTML = html;
}