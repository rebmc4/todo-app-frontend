import React, { Component } from "react";
import moment from "moment";

class AddTask extends Component {

    state = {
        taskDescription: "",
        date: ""
    }

    handleChange = (event) => {
        this.setState({
            taskDescription: event.target.value
        });
    }

    handleClick = () => {

        const newTask = this.state.taskDescription;
        const newDate = moment(this.state.date, "YYYY-MM-DD");

        if (newTask.length > 0) {
            this.props.addTaskFunction(newTask, newDate);
            this.setState({
                taskDescription: ""
            });
        }
    }

    handleDateChange = (event) => {
        const date = event.target.value;
        this.setState({
            date: date
        });
    }

    render() {
        return (
            <div>
                <form>
                    <label htmlFor="inputNewToDo">Type your new task here:</label>
                    <input placeholder="Add task" type="text" id="inputNewToDo" value={this.state.text} onChange={this.handleChange} />
                    <label htmlFor="dateInput">Due by date:</label>
                    <input id="dateInput" type="date" onChange={this.handleDateChange} value={this.state.date}/>
                    <button type="button"
                        className="btn yellowButton" onClick={this.handleClick}>
                        Add</button>
                </form>
            </div>
        );
    }
}


export default AddTask; 