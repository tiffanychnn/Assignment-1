// Define the todos object including the methods and properties to manage the todos
const todos = {

    items: [],

    add: function(item_text) {

        const todo_obj = {

            id: Date.now(),
            content: item_text

        };

        this.items.push();

        console.log(this.items);

    };

    render: function() {
    // create the html for the todo

        const todo_list = document.querySelector("#todo-list");

        todo_list.innerHTML = "";

        this.items.forEach ( (todo_item) => {

            const todo_el = document.querySelector("li");

            todo_el.classList.add(
                
            )

            todo_el.innerHTML = '
                <span class="text-lg">${todo_item.content}</span>
            ';

            todo_list.appendChild(todo_el);

        });


};

// Export the todo object
export default todos;
