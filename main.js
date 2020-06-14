class TodoList {

    constructor() {
        this.todos = [];
    }

    addTodo(todo) {
        this.todos.push(todo);
        console.log(this.todos);
    }
}

const minhaLista = new TodoList();

document.getElementById('novoTodo').onclick = function() {
    minhaLista.addTodo(document.getElementById('todoItem').value);
    console.log(this.todos);
}

class Matematica {
    static soma(a, b) {
        return a + b;
    }
}

console.log(Matematica.soma(1,2));