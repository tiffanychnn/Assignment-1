// Define the todos object
const todos = {

  items: [],

  add: function (item) {
    this.items.push({ id: Date.now(), text: item });
  },

  remove: function (id) {
    this.items = this.items.filter((item) => item.id !== id);
  },
  
  render: function () {
    const todo_list = document.querySelector("#todo-list");
    todo_list.innerHTML = "";

    this.items.forEach(({ id, text }) => {
      
      const todo = document.createElement("li");
      
      todo.classList.add(
        "flex",
        "items-center",
        "justify-between",
        "py-2",
        "border-b-2",
        "border-gray-100"
      );

      todo.innerHTML = `
        <span class="text-lg">${text}</span>
        <span>
          <button class="bg-red-500 text-white px-2 py-1 rounded" type="button" data-action="delete" data-id="${id}">Delete</button>
        </span>
      `;

      todo.querySelector('[data-action="delete"]').addEventListener("click", () => {
        this.remove(id);
        this.render();
      });

      todo_list.appendChild(todo);

    });
  },
};

// Export the todo object
export default todos;
