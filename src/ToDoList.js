import React from "react";
import ReactDOM from "react-dom";
import { observer } from "mobx-react";
import DevTools from "mobx-react-devtools";

class ToDoList extends React.Component {
    createNew(e) {
        if (e.which === 13) {
            this.props.store.createToDo(e.target.value);
            e.target.value = "";
        }
    }

    filter(e) {
        this.props.store.filter = e.target.value;
    }

    toggleComplete(todo) {
        //mutation way to change state directly
        //todo.complete = !todo.complete;

        //immutation way to change state directly
        todo.updateComplete(!todo.complete);
    }

    render() {
        const {
            todos,
            filter,
            filteredTodos,
            clearComplete
        } = this.props.store;
        const todoLis = filteredTodos.map((todo, index) => (
            <li key={index}>
                <input
                    type="checkbox"
                    value={todo.complete}
                    checked={todo.complete}
                    onChange={this.toggleComplete.bind(this, todo)}
                />
                {todo.value}
            </li>
        ));
        return (
            <div>
                <DevTools />
                <h1>To Do List</h1>
                <p>Create: </p>
                <input onKeyPress={this.createNew.bind(this)} />
                <br />
                <p>Filter: </p>
                <input value={filter} onChange={this.filter.bind(this)} />
                <h1>{todoLis}</h1>
                <a href="#" onClick={clearComplete}>
                    Clear Complete
                </a>
            </div>
        );
    }
}

export default observer(ToDoList);
