/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// This constant is used to select the html element with the id 'pokemonList'\nconst pokemonList = document.querySelector('#pokemonList');\n\n// This function creates the html card for a pokemon and appends it to the pokemonList\nconst displayPokemon = pokemon => {\n  // Create a new div element\n  const pokemonCard = document.createElement('div');\n\n  // Constants for conversion\n  const hectogram_kg_multiplier = 0.1;\n  const decimeter_inch_multiplier = 3.937008;\n\n  // Adds tailwind classes to the pokemonCard\n  pokemonCard.classList.add('pokemon-card', 'border', 'p-4', 'rounded', 'shadow');\n\n  // Sets the innerHTML of the pokemonCard with the pokemon data returned from the API\n  // The pokemon data is an object with the following properties:\n  // - name: The name of the pokemon\n  // - height: The height of the pokemon\n  // - weight: The weight of the pokemon\n  // - sprites: An object containing the front and back images of the pokemon\n  // A template string is used to set the innerHTML of the pokemonCard\n  pokemonCard.innerHTML = `\n        <img src=\"${pokemon.sprites.front_default}\" alt=\"${pokemon.name}\">\n        <h2 class=\"text-xl font-bold\">${pokemon.name}</h2>\n        <p>Height: ${Math.round(pokemon.height * decimeter_inch_multiplier)} inches </p>\n        <p>Weight: ${Math.round(pokemon.weight * hectogram_kg_multiplier)} kgs</p>\n    `;\n\n  // This will add the pokemonCard to the end of the pokemonList\n  pokemonList.appendChild(pokemonCard);\n};\n\n// This function is used to clear all the pokemon cards from the pokemonList\nconst clearAllPokemon = () => {\n  pokemonList.innerHTML = \"\";\n};\n\n// This event listener is used to fetch a pokemon by name. \n// NOTE: The name must be an exact match to the name of a pokemon\ndocument.querySelector('#searchBtn').addEventListener('click', function () {\n  // Get the value of the input with the id 'searchPokemon'\n  const searchTerm = document.getElementById('searchPokemon').value;\n\n  // Fetch the pokemon data from the API\n  fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`)\n  // Convert the response to JSON\n  .then(response => response.json())\n  // Pass the JSON data to the displayPokemon function\n  .then(data => {\n    // Clear the pokemonList of the old cards\n    clearAllPokemon();\n    // Display the new pokemon card\n    displayPokemon(data);\n  }).catch(error => {\n    // Log the error to the console\n    console.log(error);\n    // Display an error message to the user\n    document.querySelector('#pokemonList').innerHTML = `<div class=\"col-span-3 text-center\">Sorry no pokemon match your query</div>`;\n  });\n});\n\n// This event listener is used to fetch a random pokemon from the API\n// NOTE: The pokemon will be from the first generation (Gen 1)\ndocument.querySelector('#randomBtn').addEventListener('click', function () {\n  // Assuming there are 151 Pokemon (Gen 1)\n  // Generate a random number between 1 and 151\n  // This will be the id of the random pokemon\n  const randomId = Math.floor(Math.random() * 151) + 1;\n\n  // Fetch the pokemon data from the API\n  fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)\n  // Convert the response to JSON\n  .then(response => response.json())\n  // Pass the JSON data to the displayPokemon function after clearing the pokemonList\n  .then(data => {\n    clearAllPokemon();\n    displayPokemon(data);\n  }).catch(error => console.log(error));\n});\n// Function to fetch all 151 Pokemon\nconst fetchAllPokemon = () => {\n  // Fetch the list of all 151 Pokemon\n  fetch('https://pokeapi.co/api/v2/pokemon?limit=151')\n  // Convert the response to JSON\n  .then(response => response.json())\n  // \n  .then(data => {\n    // Get the results from the JSON data\n    let results = data.results;\n    // Create an array of promises`\n    //  - Each promise will fetch the data for a single pokemon\n    //  - The Promise.all method will wait for all the promises to resolve\n    // .map() is used to create an array of promises\n    //      - The .map() method will iterate over the results array\n    //      - For each result, a promise is created using the fetch method\n    //      - The fetch method returns a promise that resolves to a response object\n    //      - The .json() method is called on the response object to convert the response to JSON\n    let promisesArray = results.map(result => {\n      // Fetch the data for a single pokemon\n      return fetch(result.url).then(response => response.json());\n    });\n\n    // Wait for all the promises to resolve, then continue.\n    return Promise.all(promisesArray);\n  })\n  // Pass the array of pokemon data to the displayPokemon function from the .then() method above\n  .then(pokemonData => {\n    // Iterate over the array of pokemon data and display each pokemon using the displayPokemon function\n    // Remember, the displayPokemon function creates a card for each pokemon and appends it to the pokemonList\n    pokemonData.forEach(pokemon => displayPokemon(pokemon));\n  })\n  // Log any errors to the console\n  .catch(error => console.log(error));\n};\n\n// When the window loads, show all the first 151 Pokemon using the code above.\nwindow.addEventListener('load', fetchAllPokemon);\n\n//# sourceURL=webpack://api-example/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;