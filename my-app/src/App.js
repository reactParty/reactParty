import React, { Component } from 'react';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
<<<<<<< HEAD
import PickupLines from './components/PickupLines';
=======
import Main from './components/Main';
>>>>>>> f73acb6befed8fcb56863719fae826b846888fbd
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { render } from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          title: 'Take out the trash',
          completed: false
        },
        {
          id: 2,
          title: 'Dinner with wife',
          completed: true
        },
        {
          id: 3,
          title: 'Dinner with mistress',
          completed: false
        }
      ],
      pickupLines: []
    }
  }

  componentDidMount() {
    fetch('http://pebble-pickup.herokuapp.com/tweets')
      .then(response => response.json())
      .then(data => this.setState( { pickupLines: data } ))
  }

  markComplete = (id) => {
    this.setState( {todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    })
  }

  delTodo = (id) => {
    this.setState( {todos: [...this.state.todos.filter(todo => todo.id !== id)]})
  }

  addTodo = (title) => {
    const newTodo = {
      id: this.state.todos[this.state.todos.length - 1].id + 1,
      title,
      completed: false
    }
    console.log(newTodo.id);
    this.setState( {todos: [...this.state.todos, newTodo] })
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <PickupLines pickupLines={this.state.pickupLines}/>
          <Main />
          <AddTodo addTodo={this.addTodo}/>
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
        </div>
      </div>
    );
  }
}

export default App;
