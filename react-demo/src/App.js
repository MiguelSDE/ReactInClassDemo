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
                <h1>To-do List</h1>
                <form onSubmit={(e) => this.addTodo(e)}>
                    <input
                        type='text'
                        className='input'
                        placeholder='Enter Todo Item'
                        value={this.state.task}
                        onChange={(e) => this.setState({task: e.target.value})}
                    />
                    <button type='submit'>Add Todo</button>
                </form>
                <TaskList title={'Pending Todo:'} buttonText={'Done'} tasks={this.state.todoList} buttonFunction={this.removeTodo} />
                <TaskList title={'Completed:'} buttonText={"Delete"} tasks={this.state.todoCompleted} buttonFunction={this.deleteTodo} />
            </div>
        );
    }
    addTodo(e){
        e.preventDefault();
        if (this.state.task !== null || this.state.task !== "") {
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