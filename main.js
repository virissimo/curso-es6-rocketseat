class TodoList {

    constructor(){
        this.todos = [];
    }

    addTodo(todo) {
        this.todos.push(todo);
        console.log(this.todos)
    }
}

const minhaLista = new TodoList();

document.getElementById('novoTodo').onclick = function() {
    minhaLista.addTodo()
}