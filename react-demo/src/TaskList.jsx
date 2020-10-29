import React, {Component} from 'react';
import TaskItems from './TaskItems';

class TaskList extends Component{
    render(){
        const {title, buttonText, tasks, buttonFunction} = this.props;
        return (
            <div>
                {title}
                Title of task
                <TaskItems tasks={tasks}/>
                <button onClick={() => buttonFunction}>{buttonText}</button>
            </div>
        )
    }
}

export default TaskList;