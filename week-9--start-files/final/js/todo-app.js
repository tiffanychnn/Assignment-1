// Import the todo object from the `todo.js` module
import todos from './todos.js';

// Select the todo form and list container
const todo_form = document.querySelector('#todo-form');

// Add an event listener to the todo form
todo_form.addEventListener('submit', (event) => {
  
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the form input value
  const todo_input =  document.querySelector('#todo-input');
  const todo_value = todo_input.value;

  // Check that the input is not empty
  if (!todo_value) return;

  // Add the new item to the todo list and render the list
  todos.add(todo_value);
  todos.render();

  // Clear the form input
  todo_input.value = '';

});

// Render the initial todo list
todos.render();
