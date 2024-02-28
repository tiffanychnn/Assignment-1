// Import the calculator object from the `calculator.js` module
import calculator from './calculator.js';

// Select the calculator form and result container
const form = document.querySelector('#calculator-form');
const results = document.querySelector('#result-container');

// Add an event listener to the calculator form
form.addEventListener('submit', (event) => {

    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the form input values
    const number_1 = Number.parseFloat(document.querySelector('#number-1').value);
    const number_2 = Number.parseFloat(document.querySelector('#number-2').value);
    const operation = document.querySelector('#operation').value;

    // Check that both numbers are valid
    if (isNaN(number_1) || isNaN(number_2)) {
        results.innerText = 'Please enter valid numbers.';
        return;
    }

    // Check that an operation has been selected
    if (!operation) {
        results.innerText = 'Please select an operation.';
        return;
    }

    // Use the calculator object to perform the selected operation
    const result = calculator[operation](number_1, number_2);

    // Display the result on the page
    results.innerText = `The result is ${result}.`;

});
