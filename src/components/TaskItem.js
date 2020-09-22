import React from 'react';
import TaskForm from '../components/TaskForm'

class TaskItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: this.props.task
        }
    }
    render() {
        const { id, name } = this.state.task
        return <div className='rowItem'>
            <div className='item'>
                <label>
                    <input type="checkbox" value="" />
                    <span><p title={name}>{name}</p></span>
                </label>
                <div className='btnGroup'>
                    <div className='btn btn-primary' onClick={() => {
                        this.showDetail = !this.showDetail;
                        this.forceUpdate()
                    }
                    }>Detail</div>
                    <div className='btn btn-delete'>Remove</div>
                </div>
            </div>
            {
                this.showDetail
                    ? <div className='detail'>
                        <div className='line'></div>
                        <TaskForm task={this.props.task} />
                    </div>
                    : null
            }
        </div>
    }
}

export default TaskItem;
