import { observable, computed, action, decorate, autorun } from "mobx";

class Todo {
    value;
    id;
    complete;

    constructor(value) {
        this.value = value;
        this.id = Date.now();
        this.complete = false;
    }

    updateComplete(value) {
        this.complete = value;
    }
}

decorate(Todo, {
    value: observable,
    id: observable,
    complete: observable,
    updateComplete: action
});

export default Todo;
