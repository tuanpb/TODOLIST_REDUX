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
            piority: task.piority || '',
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
        this.props.addTask(this.state)
        if (!this.state.id) this.clearData()
    }

    clearData = () => {
        this.setState({
            name: '',
            desc: '',
            date: new Date(),
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
                <div className='rowItem'>
                    <p>Duo Date</p>
                    <input className='date' type='date' min={new Date().toISOString()} />
                    {/* <DatePicker
                        selected={new Date()}
                        minDate={new Date()}
                        dateFormat='dd/mm/yyyy'
                    /> */}
                </div>
                <div className='rowItem'>
                    <p>Piority</p>
                    <select
                        name='piority'
                        value={piority || 1}
                        onChange={this.onChange}
                    >
                        <option value={0}>Low</option>
                        <option value={1}>Normal</option>
                        <option value={2}>High</option>
                    </select>
                </div>
                <div className='btnGroup'>
                    <div className={`btn btn-success ${this.state.name ? '' : 'btn-disabled'}`} onClick={this.onSubmit}>{this.props.task ? 'Update' : 'Create'}</div>
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
