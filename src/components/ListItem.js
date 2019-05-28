import React, { Component } from 'react';
import moment from "moment";
class ListItem extends Component {


    deleteTask = () => { 
        this.props.deleteTask(this.props.id);

    }

    handleCompleteClick = () => {
        this.props.markTaskCompleted(this.props.id);

    };

    render() {
        const today = moment();
        const isOverdue = this.props.date.isBefore(today);
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        {this.props.completed ? (
                            <p className="completed">{this.props.taskText}</p>
                        ) : (
                                <p>{this.props.taskText}</p>
                            )}
                    </div>
                    <div className="col-2">
                        <p className={isOverdue ? "overdue" : ""}>
                            {this.props.date.format("Do MMM YYYY")}
                        </p>
                    </div>
                    <div className="col-2">
                        {this.props.completed ? <p>Completed</p> : <p>Not completed</p>}
                    </div>
                    <div className="col-2">
                        <button type="button" className="btn purpleButton" onClick={this.deleteTask}>Delete</button>
                    </div>
                    <div className="col-2">
                        {!this.props.completed && (
                            <button type="button" className="btn purpleButton" onClick={this.handCompleteClick}>Mark completed</button>
                        )}
                    </div>
                    {this.props.task.task}
                </div>
            </div>
        );
    }
}


export default ListItem; 