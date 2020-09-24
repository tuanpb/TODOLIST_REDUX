import React from 'react';
import TaskForm from '../components/TaskForm'
import { connect } from 'react-redux'
import * as actions from '../actions/index'

class TaskItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: this.props.task
        }
    }

    onRemove = () => {
        this.props.removeTask([this.state.task.id])
    }

    showDetail = () => {
        this.isShow = !this.isShow;
        this.forceUpdate()
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ task: nextProps.task })
    }

    render() {
        const { id, name } = this.state.task
        return <div className='rowItem'>
            <div className='item'>
                <label>
                    <input data-id={id} type="checkbox" value="" />
                    <span><p title={name}>{name}</p></span>
                </label>
                <div className='btnGroup'>
                    <div className='btn btn-primary' onClick={() => this.showDetail()}>Detail</div>
                    <div className='btn btn-delete' onClick={this.onRemove}>Remove</div>
                </div>
            </div>
            {
                this.isShow
                    ? <div className='detail'>
                        <div className='line'></div>
                        <TaskForm onUpdate={() => this.showDetail()} task={this.props.task} />
                    </div>
                    : null
            }
        </div>
    }
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        removeTask: (task) => {
            dispatch(actions.removeTask(task));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);
