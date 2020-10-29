import React, {Component} from 'react';

class TaskItems extends Component{
    render(){
        const { tasks } = this.props;
        return (
            <div>
                {tasks}
            </div>
        )
    }
}

export default TaskItems;