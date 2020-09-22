import React from 'react';
import DatePicker from 'react-datepicker'

class TaskForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: this.props.task || {}
        }
    }
    onChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        this.setState({
            [name]: name === 'piority' ? Number(value) : value
        })
    }
    render() {
        const { id, name, desc, date, piority } = this.state.task
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
                        name='name'
                        value={desc}
                        onChange={this.onChange}
                    />
                </div>
                <div className='rowItem'>
                    <p>Duo Date</p>
                    <input className='' type='date' min={new Date().toISOString()} />
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
                    <div className='btn btn-success'>{this.props.task ? 'Update' : 'Success'}</div>
                </div>
            </div>
        )
    }
}

export default TaskForm;
