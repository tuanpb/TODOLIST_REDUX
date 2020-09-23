import React from 'react';
import { connect } from 'react-redux'
// import DatePicker from 'react-datepicker'
import * as actions from '../actions/index'

class TaskForm extends React.Component {
    constructor(props) {
        super(props);
        const task = this.props.task || {}
        this.state = {
            id: task.id || '',
            name: task.name || '',
            desc: task.desc || '',
            date: task.date || new Date(),
            piority: task.piority || 1,
        }
    }
    onChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        this.setState({
            [name]: name === 'piority' ? Number(value) : value
        })
    }

    onSubmit = () => {
        if (this.disabledButton()) return
        this.props.addTask(this.state)
        if (!this.state.id) this.clearData()
    }

    disabledButton = () => {
        if (!this.state.name) return true
        if (this.props.task && this.props.task.id) {
            if (this.props.task.name === this.state.name &&
                this.props.task.desc === this.state.desc &&
                this.props.task.date === this.state.date &&
                this.props.task.piority === this.state.piority) return true
        }
        return false
    }

    clearData = () => {
        this.setState({
            name: '',
            desc: '',
            date: new Date().toLocaleDateString(),
            piority: '',
        })
    }

    render() {
        const { id, name, desc, date, piority } = this.state
        return (
            <div className='taskForm'>
                <div className='rowItem'>
                    <input
                        type='text'
                        placeholder='Add new task...'
                        name='name'
                        value={name || ''}
                        onChange={this.onChange}
                    />
                </div>
                <div className='rowItem'>
                    <p>Description</p>
                    <textarea rows='4'
                        name='desc'
                        value={desc}
                        onChange={this.onChange}
                    />
                </div>
                <div className='rowItem column'>
                    <div>
                        <p>Duo Date</p>
                        <input className='date' type='date' />
                    </div>
                    <div>
                        <p>Piority</p>
                        <select
                            name='piority'
                            value={piority}
                            onChange={this.onChange}
                        >
                            <option value={1}>Low</option>
                            <option value={2}>Normal</option>
                            <option value={3}>High</option>
                        </select>
                    </div>
                </div>
                <div className='btnGroup'>
                    <div className={`btn btn-success ${this.disabledButton() ? 'btn-disabled' : ''}`} onClick={this.onSubmit}>{this.props.task ? 'Update' : 'Add'}</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        addTask: (task) => {
            dispatch(actions.addTask(task));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
