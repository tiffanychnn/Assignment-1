// This constant is used to select the html element with the id 'pokemonList'
const pokemonList = document.querySelector('#pokemonList');

// This function creates the html card for a pokemon and appends it to the pokemonList
const displayPokemon = (pokemon) => {

    // Create a function to create an html card for a pokemon

}


document.querySelector('#searchBtn').addEventListener('click', function() {

    // When the search button is clicked, get the value from the search input and make a request to the API

});

// This event listener is used to fetch a random pokemon from the API
// NOTE: The pokemon will be from the first generation (Gen 1)
document.querySelector('#randomBtn').addEventListener('click', function() {
    
    // When the random button is clicked, fetch a random pokemon from the API
});

// Create a function to delete the content from the list of pokemon
const clearAllPokemon = () => {
    
}

// Function to fetch all 151 Pokemon
const fetchAllPokemon = () => {

    // Make a request to the API to get all the first 151 Pokemon
    // Then, for each pokemon, display the pokemon using the displayPokemon function

}

// When the window loads, show all the first 151 Pokemon using the code above.
window.addEventListener('load', fetchAllPokemon);