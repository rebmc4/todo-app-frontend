import React, {Component} from 'react';

class TaskCounter extends Component {
    render() {
        return (
        <p>You have {this.props.taskCount} tasks remaining</p>
        );
    }
}

export default TaskCounter; 
