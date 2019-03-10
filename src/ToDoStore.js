import { observable, computed, action, decorate, autorun } from "mobx";
import Todo from "./ToDo";

class ToDoStore {
    todos = [];
    filter = "";
    get filteredTodos() {
        const matchesFilter = new RegExp(this.filter, "i");
        return this.todos.filter(
            todo => !this.filter || matchesFilter.test(todo.value)
        );
    }
    createToDo(value) {
        this.todos.push(new Todo(value));
    }
    clearComplete = () => {
        const incompleteTodos = this.todos.filter(todo => !todo.complete);
        this.todos.replace(incompleteTodos);
    };
}

decorate(ToDoStore, {
    todos: observable,
    filter: observable,
    filteredTodos: computed,
    createToDo: action
});

var store = (window.store = new ToDoStore());

export default store;

autorun(() => {
    console.log(store.filter);
    console.log(store.todos[0]);
});
