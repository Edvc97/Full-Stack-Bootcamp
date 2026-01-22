const allPokemonUrl = "https://pokeapi.co/api/v2/pokemon/?limit=10000";

let allPokemon = [];


async function fetchMasterList() {

    const response = await fetch(allPokemonUrl);

    const masterData = await response.json();

    return masterData["results"];

}

async function fetchOnePokemon(url) {

    const response = await fetch(url);

    const data = await response.json();

    return data;

}

const searchInput = document.getElementById("name");
const suggestionsList = document.getElementById("suggestions");

searchInput.addEventListener("input", async () => {

    if (searchInput.value.length < 2) {

        suggestionsList.innerHTML = "";

    } else {

        const searchTerm = searchInput.value.toLowerCase();
        const matchArray = allPokemon.filter((pokemon) => pokemon["name"].includes(searchTerm)).sort((a, b) => {
            // If 'a' starts with the search text and 'b' doesn't, 'a' comes first
            if (a.name.startsWith(searchTerm) && !b.name.startsWith(searchTerm)) {
                return -1;
            }
            // If 'b' starts with the search text and 'a' doesn't, 'b' comes first
            if (!a.name.startsWith(searchTerm) && b.name.startsWith(searchTerm)) {
                return 1;
            }
            // Otherwise, keep them in their original order
            return 0;
        }).slice(0, 5);

        const promises = matchArray.map(pokemon => fetchOnePokemon(pokemon["url"]));
        const detailedMatches = await Promise.all(promises);

        console.log(detailedMatches);
        displayMatches(detailedMatches);

    }

});

async function init() {

    allPokemon = await fetchMasterList();
    console.log(allPokemon);
}

init();


function displayMatches(matches) {
    const html = matches.map((pokemon) => {
        // 1. DIRECT ID
        const id = pokemon["id"];

        // 2. IMAGE LOGIC
        // If ID is 649 or less, use the Animated GIF.
        // Otherwise, use the Static PNG.
        const imageSrc = id <= 649
            ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`
            : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

        // 3. TYPES

        const typeBadges = pokemon["types"].map(typeInfo => { return `<span class="type-badge ${typeInfo["type"]["name"]}">${typeInfo["type"]["name"]}</span>`; }).join('');
        return `
            <li onclick="openProfile(${pokemon.id})">
                <div class="card-info">
                    <span class="pokemon-name">${pokemon.name}</span>
                    <div class="types">${typeBadges}</div> 
                </div>
                <span class="pokemon-id">#${id}</span>
                <img 
                    src="${imageSrc}" 
                    alt="${pokemon.name}" 
                    onerror="this.src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png'"
                >
            </li>
        `;
    }).join('');

    suggestionsList.innerHTML = html;
}


// Make it global so the HTML can see it
window.openProfile = async function(id) {
    // 1. Trigger the CSS transition
    document.body.classList.add('search-active');
    
    // 2. Fetch the full data (we need stats now!)
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const data = await fetchOnePokemon(url);
    
    // 1. Get the Species URL
    const speciesUrl = data.species.url;

    // 2. Fetch the Species Data
    const speciesData = await fetchOnePokemon(speciesUrl);

    const englishEntry = speciesData.flavor_text_entries.find((entry) => {
        // We want to return true if the language name is 'en'
        return entry.language.name === 'en';
    });

    // Clean up the text: Replace newlines (\n) AND form feeds (\f) with a space
    const cleanText = englishEntry.flavor_text.replace(/[\n\f]/g, ' ');

    document.querySelector('.description').innerText = cleanText;


    console.log(speciesData); // Let's peek at what we found!

    // 3. Populate the UI (We will fill this in next!)
    console.log("Loaded profile for:", data.name);

    // Fill the Image (High Res)
    document.getElementById('p-img').src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

    //Setting Pokemon type
    const typeBadges = data["types"].map(typeInfo => { return `<span class="type-badge ${typeInfo["type"]["name"]}">${typeInfo["type"]["name"]}</span>`; }).join('');
    document.getElementById('p-types').innerHTML = typeBadges;

    
    // Setting Pokemon Name, ID, Height, Weight
    document.getElementById('p-name').innerText = data.name;
    
    document.getElementById('p-id').innerText = `#${data.id}`;

    document.getElementById('p-height').innerText = `${(data.height*0.3281).toFixed(1)}ft`;

    document.getElementById('p-weight').innerText = `${(data.weight*0.2205).toFixed(1)}lbs`;

    //The Stats
    document.getElementById('s-hp').innerText = data.stats[0].base_stat;
    document.getElementById('s-atk').innerText = data.stats[1].base_stat;
    document.getElementById('s-def').innerText = data.stats[2].base_stat;
    document.getElementById('s-spa').innerText = data.stats[3].base_stat;
    document.getElementById('s-spd').innerText = data.stats[4].base_stat;
    document.getElementById('s-speed').innerText = data.stats[5].base_stat;
    
    
}