import React from 'react';
import './App.css';
import TaskForm from './components/TaskForm'
import TaskItem from './components/TaskItem';
import { connect } from "react-redux";
const uuidv1 = require('uuid/v1')
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: []
    };
  }

  componentWillReceiveProps = (nextProps) => {
    console.log(nextProps)
  }
  render() {
    console.log('khai')
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
              this.props.tasks.length && this.props.tasks.map((task, index) => {
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
  console.log('mapStateToProps', state)
  return {
    tasks: state.tasks.lstTask
  }
}

export default connect(mapStateToProps, null)(App);
