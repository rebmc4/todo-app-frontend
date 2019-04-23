import React, {Component} from "react";

class AddItem extends Component {
    render() {
        return (
            <div>
                <form>
                    <label>Type tasks to be completed</label>
                    <input type="text" />
                    <button type="button" class="btn btn-light">Add</button>
                </form>
            </div>
        );
    }
}


export default AddItem; 