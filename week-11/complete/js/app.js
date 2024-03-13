// This constant is used to select the html element with the id 'pokemonList'
const pokemonList = document.querySelector('#pokemonList');

// This function creates the html card for a pokemon and appends it to the pokemonList
const displayPokemon = (pokemon) => {

    // Create a new div element
    const pokemonCard = document.createElement('div');

    // Constants for conversion
    const hectogram_kg_multiplier = 0.1;
    const decimeter_inch_multiplier = 3.937008;

    // Adds tailwind classes to the pokemonCard
    pokemonCard.classList.add('pokemon-card', 'border', 'p-4', 'rounded', 'shadow');

    // Sets the innerHTML of the pokemonCard with the pokemon data returned from the API
    // The pokemon data is an object with the following properties:
    // - name: The name of the pokemon
    // - height: The height of the pokemon
    // - weight: The weight of the pokemon
    // - sprites: An object containing the front and back images of the pokemon
    // A template string is used to set the innerHTML of the pokemonCard
    pokemonCard.innerHTML = `
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        <h2 class="text-xl font-bold">${pokemon.name}</h2>
        <p>Height: ${(Math.round(pokemon.height * decimeter_inch_multiplier))} inches </p>
        <p>Weight: ${(Math.round(pokemon.weight * hectogram_kg_multiplier))} kgs</p>
    `;

    // This will add the pokemonCard to the end of the pokemonList
    pokemonList.appendChild(pokemonCard);

}

// This event listener is used to fetch a pokemon by name. 
// NOTE: The name must be an exact match to the name of a pokemon
document.querySelector('#searchBtn').addEventListener('click', function() {

    // Get the value of the input with the id 'searchPokemon'
    const searchTerm = document.getElementById('searchPokemon').value;

    // Fetch the pokemon data from the API
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`)
        // Convert the response to JSON
        .then(response => response.json())
        // Pass the JSON data to the displayPokemon function
        .then(data => {
            // Clear the pokemonList of the old cards
            clearAllPokemon();
            // Display the new pokemon card
            displayPokemon(data);
        }).catch(error => {
            // Log the error to the console
            console.log(error);
            // Display an error message to the user
            document.querySelector('#pokemonList').innerHTML = `<div class="col-span-3 text-center">Sorry no pokemon match your query</div>`;
        });
});

// This event listener is used to fetch a random pokemon from the API
// NOTE: The pokemon will be from the first generation (Gen 1)
document.querySelector('#randomBtn').addEventListener('click', function() {
    
    // Assuming there are 151 Pokemon (Gen 1)
    // Generate a random number between 1 and 151
    // This will be the id of the random pokemon
    const randomId = Math.floor(Math.random() * 151) + 1; 
    
    // Fetch the pokemon data from the API
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
        // Convert the response to JSON
        .then(response => response.json())
        // Pass the JSON data to the displayPokemon function after clearing the pokemonList
        .then(data => {
            clearAllPokemon();
            displayPokemon(data);
        // Log any errors to the console
        }).catch(error => console.log(error));
});

// This function is used to clear all the pokemon cards from the pokemonList
const clearAllPokemon = () => {
    pokemonList.innerHTML = "";
}

// Function to fetch all 151 Pokemon
const fetchAllPokemon = () => {
    // Fetch the list of all 151 Pokemon
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        // Convert the response to JSON
        .then(response => response.json())
        // 
        .then(data => {
            // Get the results from the JSON data
            let results = data.results;
            // Create an array of promises
            //  - Each promise will fetch the data for a single pokemon
            //  - The Promise.all method will wait for all the promises to resolve
            // .map() is used to create an array of promises
            //      - The .map() method will iterate over the results array
            //      - For each result, a promise is created using the fetch method
            //      - The fetch method returns a promise that resolves to a response object
            //      - The .json() method is called on the response object to convert the response to JSON
            let promisesArray = results.map(result => {
                // Fetch the data for a single pokemon
                return fetch(result.url).then(response => response.json());
            });

            // Wait for all the promises to resolve, then continue.
            return Promise.all(promisesArray);
        })
        // Pass the array of pokemon data to the displayPokemon function from the .then() method above
        .then(pokemonData => {
            // Iterate over the array of pokemon data and display each pokemon using the displayPokemon function
            // Remember, the displayPokemon function creates a card for each pokemon and appends it to the pokemonList
            pokemonData.forEach(pokemon => displayPokemon(pokemon));
        })
        // Log any errors to the console
        .catch(error => console.log(error));
}

// When the window loads, show all the first 151 Pokemon using the code above.
window.addEventListener('load', fetchAllPokemon);