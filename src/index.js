import React from "react";
import ReactDOM from "react-dom";
import ToDoList from "./ToDoList";
import store from "./ToDoStore";

ReactDOM.render(<ToDoList store={store} />, document.getElementById("root"));
