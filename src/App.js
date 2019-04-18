import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import AddItem from './components/AddItem';
import ListItem from './components/ListItem';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav text="Welcome to my app"/>
        <AddItem />
        <h4>Here is a list of things I need to do</h4>
        <ListItem task="Buy cough sweets"/>
        <ListItem task="Buy an easter egg"/>
        <ListItem task="Do washing"/>
      </div>
    );
  }
}

export default App;
