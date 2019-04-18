import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import AddItem from './components/AddItem';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav text="Welcome to my app"/>
        <AddItem />
        <h4>Here is a list of things I need to do</h4>
        <ul>
          <li>
            Buy cough sweets
              <button>Done</button>
            <button>Delete</button>
          </li>
          <li>
            Do the washing
              <button>Done</button>
            <button>Delete</button>
          </li>
          <li>
            Buy an easter egg
              <button>Done</button>
            <button>Delete</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
