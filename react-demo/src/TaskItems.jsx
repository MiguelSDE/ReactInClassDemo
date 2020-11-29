import React, {Component} from 'react';

class TaskItems extends Component{
    render(){
        const { tasks, buttonFunction }= this.props;
        return (
            <div onClick={() => buttonFunction(tasks)}>
                <div class="row justify-content-center">
                    <div id="navigation">
                        <ul class="list-group">
                            <li class="list-group-item list-group-item-success">{tasks}</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default TaskItems;