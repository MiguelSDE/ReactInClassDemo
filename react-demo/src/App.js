import React, { Component }  from 'react';
import './App.css';
import TaskList from './TaskList';

class App extends Component {
    constructor(){
        super()
        this.state = {
            todoList: [],
            todoCompleted: [],
            task: ''
        }
    }
    render(){
        return (
            <div className="App">
                <h1><strong>To-do List</strong></h1>
                <div class="row justify-content-center">
                    <form class="form-inline my-2 my-lg-0" onSubmit={(e) => this.addTodo(e)}>
                        <input 
                            type='text'
                            class="form-control mr-sm-2"
                            placeholder='Enter Todo Item'
                            value={this.state.task}
                            onChange={(e) => this.setState({task: e.target.value})}
                        />
                        <button type='submit' class="btn btn-success">Add Todo</button>
                    </form>
                </div>
                <TaskList title={'Pending Todo:'} buttonText={'Done'} tasks={this.state.todoList} buttonFunction={this.removeTodo} />
                <TaskList title={'Completed:'} buttonText={"Delete"} tasks={this.state.todoCompleted} buttonFunction={this.deleteTodo} />
            </div>
        );
    }
    addTodo(e){
        e.preventDefault();
        if (this.state.task !== "") {
            this.setState({task: '', todoList: [ ...this.state.todoList, this.state.task] });
        }
    }
    removeTodo = key =>{
        let todoList = this.state.todoList;
        let index = todoList.indexOf(key);
        if(index > -1){
            todoList.splice(index, 1);
            this.setState({todoList: todoList})
            this.setState({todoCompleted: [...this.state.todoCompleted, key]});
        }
    }

    deleteTodo = key =>{
        let todoCompleted = this.state.todoCompleted;
        let index = todoCompleted.indexOf(key);
        if(index > -1){
            todoCompleted.splice(index, 1);
            this.setState({todoCompleted: todoCompleted})
        }
    }
}

export default App;