import * as types from '../constants/ActionTypes'
const uuidv1 = require('uuid/v1')
const initialState = {
    lstTask: [
        { id: uuidv1(), name: 'Hoc Reactjs', piority: 0 },
        { id: uuidv1(), name: 'Hoc Redux', piority: 1 },
        { id: uuidv1(), name: 'Hoc NodeJs', piority: 2 }
    ]
}

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LIST_ALL:
            return state
        case types.ADD_TASK:
            const task = { ...action.task, id: uuidv1() }
            const newList = [...state.lstTask]
            newList.push(task)
            return { ...state, ...{ lstTask: newList } }
        default:
            console.log('reducer', state)
            return state
    }
}
export default myReducer