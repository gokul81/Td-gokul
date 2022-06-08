const form = document.getElementById("form");
const input = document.getElementById("input");
const list = document.getElementById("list");

let todos = [];

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const todoInput = input.value;
    const todoObj = {
        id: Math.random(),
        todoName: todoInput,
    };
    todos.push(todoObj);
    displayTodo();

    input.value = "";
});

function displayTodo() {
    const listItem = todos
        .map((todo) => {
            return `<li class="flex justify-between border-2 rounded-sm  bg-white py-1">
        ${todo.todoName}<button class="bg-red-200 rounded  text-red-700" onclick="deleteTodo(${todo.id})">Delete</button>
      </li>`;
        })
        .join("");

    list.innerHTML = listItem;
}

function deleteTodo(id) {
    todos = todos.filter((todo) => {
        return todo.id !== id;
    });
    displayTodo();
}