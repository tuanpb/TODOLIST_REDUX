import React from 'react';
import './App.css';
import TaskForm from './components/TaskForm'
import TaskItem from './components/TaskItem';
import { connect } from "react-redux";
const uuidv1 = require('uuid/v1')
// const initialState = [
//   { id: uuidv1(), name: 'Hoc Reactjs', piority: 0 },
//   { id: uuidv1(), name: 'Hoc Redux', piority: 1 },
//   { id: uuidv1(), name: 'Hoc NodeJs', piority: 2 }
// ]
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: []
    };
  }
  render() {
    return <div className='wrap'>
      <section className='newTask'>
        <div className='container'>
          <h2 className='title'>New Task</h2>
          <TaskForm />
        </div>
      </section>
      <section className='todoList'>
        <div className='container'>
          <h2 className='title'>To Do List</h2>
          <input type='text' placeholder='Search...' />
          <div className='lstItem'>
            {
              this.state.tasks.length && this.state.tasks.map((task, index) => {
                return <TaskItem key={task.id} index={index} task={task} />
              })
            }
          </div>
        </div>
        <div className='bulkAction'>
          <div>Bulk Action:</div>
          <div className='btnGroup'>
            <div className='btn btn-info'>Done</div>
            <div className='btn btn-delete'>Remove</div>
          </div>
        </div>
      </section>
    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToProps, null)(App);
