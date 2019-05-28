import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import AddTask from './components/AddTask';
import TaskCounter from './components/TaskCounter';
import ListItem from './components/ListItem';
import './components/AddTask.css';
import './components/ListItem.css';
import './components/Nav.css';
import './components/TaskCounter.css';
import moment from 'moment';
import uuid from 'uuid/v4';

class App extends Component {

  state = {
    tasks: [
      {task: "buy some milk", completed: false, date: moment("01-05-2019", "DD-MM-YYYY"), id: uuid()},
      {task: "walk the dog", completed: true, date: moment("05-05-2019", "DD-MM-YYYY"), id: uuid()},
      {task: "go for a walk", completed: false, date: moment("04-05-2019", "DD-MM-YYYY"), id: uuid()}
    ]
  }

  addTask = (newTask, date) => {
    // Needs to add the new task (which will be a string) to our task list
    // this.state.tasks.push(newTask) <-- cannot do this

    // Make a fresh copy of the tasks array with slice
    const newTasks = this.state.tasks.slice();
    const taskObject = {task: newTask, completed: false, date: date, id: uuid()};
    newTasks.push(taskObject);

    // Always use setState to update any part of the state which needs to change
    this.setState({
      tasks: newTasks
    });
  }

  deleteTask = (id) => {
    const filteredTasks = this.state.tasks.filter(item => {
      if (item.id !== id) {
        return true;
      } else {
        return false;
      }
      });
      this.setState({
        tasks: filteredTasks
    })
  };

  markTaskCompleted = id => {
    const updatedTasks = this.state.tasks.map(item => {
      if (item.id === id){
      item.completed = true; 
      }
    });
    this.setState({
      tasks: updatedTasks
    })
  }

  render() {

    return (
      <div className="container">


        <div className="row">
          <div className="col">
            <Nav text="Welcome to my app" />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="addItem">
              <AddTask addTaskFunction={this.addTask} />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <TaskCounter taskCount={this.state.tasks.length}/>
            </div>
          </div>
        </div>

        <h4><u>Here is a list of things I need to do:</u></h4>

        {
          this.state.tasks.map( (item, i) => {
            return <ListItem task={item} 
            key={i} 
            index={i} 
            deleteTask={this.deleteTask}
            markTaskCompleted={this.markTaskCompleted}
            date={item.date}
            completed={item.completed}
            id = {item.id}
            />
          })
        }
        
      </div>
    );
  }
}

export default App;
