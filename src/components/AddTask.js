import React, { Component } from "react";

class AddTask extends Component {

    state = {
        taskDescription: ""
    }

    inputBoxChanged = (event) => {
        this.setState({taskDescription: event.target.value});
    }

    addTaskClicked = () => {
        // alert(`Will save the following task ${this.state.taskDescription}`);
        this.props.addTaskFunction();
    }

    render() {
        return (
            <div>
                <form>
                    <label>Type tasks to be completed</label>
                    <input type="text" onChange={this.inputBoxChanged}/>
                    <button type="button"
                        className="btn yellowButton" onClick={this.addTaskClicked}>
                        Add</button>
                </form>
            </div>
        );
    }
}


export default AddTask; 