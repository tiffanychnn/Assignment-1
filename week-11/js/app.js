// This constant is used to select the html element with the id 'pokemonList'
const pokemonList = document.querySelector('#pokemonList');

// This function creates the html card for a pokemon and appends it to the pokemonList
const displayPokemon = (pokemon) => {

    // Create a function to create an html card for a pokemon
    const pokemonCard = document.createElement("div");

    pokemonCard.classList.add (

        "pokemon-card",
        "border",
        "p-4",
        "rounded",
        "shadow"

    );

    pokemonCard.innerHTML =
        
    `<Img src="$pokemon.sprites.front_default)" alt="$(pokemon.name)">`

};


document.querySelector('#searchBtn').addEventListener('click', function() {

    // When the search button is clicked, get the value from the search input and make a request to the API
    const searchTerm = document.querySelector("#searchPokemon").value;

    fetch("https://pokeapi.co/api/v2/pokemon/${searchTerm}")

        .then ( (response) => {return response.json(); })
        .then( (data) => {

            clearAllPokemon();
            displayPokemon(data);

        });

});

// This event listener is used to fetch a random pokemon from the API
// NOTE: The pokemon will be from the first generation (Gen 1)
document.querySelector('#randomBtn').addEventListener('click', function() {
    
    // When the random button is clicked, fetch a random pokemon from the API
    const randomId = Math.floor( Math.random() * 151 ) + 1;

    fetch("https://pokeapi.co/api/v2/pokemon/${randomId}")
        
        .then( (response) => {return response.json(); } )
        .then((data) => {

            clearAllPokemon();
            displayPokemon(data);

        }).catch( (error) => { console.log(error)}) 

});

// Create a function to delete the content from the list of pokemon
const clearAllPokemon = () => {

    pokemonList.innerHTML = "";
    
}

// Function to fetch all 151 Pokemon
const fetchAllPokemon = () => {

    // Make a request to the API to get all the first 151 Pokemon
    // Then, for each pokemon, display the pokemon using the displayPokemon function
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")

        .then( (response) => {return response.json() } )
        .then( (data) => {

            const bestPokemonGen = data.results;

            const pokemonPromises = bestPokemonGen.map( (pokemon) => {

                return fetch(pokemon.url).then( () => { return response.json() } )

            });

        });

    return Promise.all(pokemonPromises);

}


// When the window loads, show all the first 151 Pokemon using the code above.
window.addEventListener('load', fetchAllPokemon);