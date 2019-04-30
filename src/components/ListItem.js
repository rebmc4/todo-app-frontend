import React, { Component } from 'react';

class ListItem extends Component {
    render() {
        return (
            <li>
                {this.props.taskDescription}
                <button type="button" className="btn purpleButton">Done</button>
                <button type="button" className="btn purpleButton">Delete</button>
            </li>
        );
    }
}


export default ListItem; 