import React, { Component } from "react";

import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import "./App.css";
import uuid from "uuid";

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: "Read Brothers Karamazov",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "Finish Portfolio",
        completed: true
      },
      {
        id: uuid.v4(),
        title: "Complete Blog and Blog Post",
        completed: false
      }
    ]
  };

  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  delTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  addTodo = title => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <div className="App">
        <AddTodo addTodo={this.addTodo} />
        <Todos
          todos={this.state.todos}
          markComplete={this.markComplete}
          delTodo={this.delTodo}
        />
      </div>
    );
  }
}

export default App;
