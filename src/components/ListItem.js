import React, { Component } from 'react';

class ListItem extends Component {
    render() {
        return (
            <li>
                {this.props.task}
                <button type="button" class="btn btn-light">Done</button>
                <button type="button" class="btn btn-light">Delete</button>
            </li>
        );
    }
}


export default ListItem; 
