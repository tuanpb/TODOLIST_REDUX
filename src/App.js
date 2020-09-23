import React from 'react';
import './App.css';
import TaskForm from './components/TaskForm'
import TaskItem from './components/TaskItem';
import { connect } from 'react-redux';
import * as actions from './actions/index'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search: ''
    };
  }

  componentDidUpdate = () => {
    const data = JSON.stringify(this.props.tasks)
    localStorage.setItem('tasks', data);
  }

  onRemove = () => {
    if (!this.props.tasks.length) return
    const lstCheckboxElm = this.dom.querySelectorAll('label input[type="checkbox"]')
    const lstRemove = []
    Object.values(lstCheckboxElm).map(elm => {
      if (elm.checked) lstRemove.push(elm.getAttribute('data-id'))
    })
    this.props.removeTask(lstRemove)
  }

  onSearch = (text) => {
    this.setState({
      textFilter: text.toUpperCase()
    })
  }

  render() {
    let tasks = []
    if (this.state.textFilter) {
      if (this.props.tasks.length) {
        this.props.tasks.map(task => {
          if (task.name.toUpperCase().indexOf(this.state.textFilter) > -1) tasks.push(task)
        })
      }
    } else {
      tasks = this.props.tasks
    }
    return <div className='wrap'>
      <section className='newTask'>
        <div className='container'>
          <h2 className='title'>New Task</h2>
          <TaskForm />
        </div>
      </section>
      <section className='todoList' ref={dom => this.dom = dom}>
        <div className='container'>
          <h2 className='title'>To Do List</h2>
          <input type='text' placeholder='Search...' onChange={(e) => this.onSearch(e.target.value)} />
          <div className='lstItem'>
            {
              tasks.length
                ? tasks.map((task, index) => {
                  return <TaskItem key={task.id} index={index} task={task} />
                })
                : null
            }
          </div>
        </div>
        <div className='bulkAction'>
          <div>Bulk Action:</div>
          <div className='btnGroup'>
            <div className='btn btn-info'>Done</div>
            <div className='btn btn-delete' onClick={this.onRemove}>Remove</div>
          </div>
        </div>
      </section>
    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks.lstTask
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    removeTask: (task) => {
      dispatch(actions.removeTask(task));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
