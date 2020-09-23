import * as types from '../constants/ActionTypes'
const uuidv1 = require('uuid/v1')

const data = JSON.parse(localStorage.getItem('tasks'))
const initialState = {
    lstTask: data ? data : [{ id: uuidv1(), name: 'Hoc Reactjs', piority: 0 }]
}

const findIndex = (id, data) => {
    let index
    data.map((val, key) => {
        if (val.id === id) index = key
    })
    return index
}

const myReducer = (state = initialState, action) => {
    const newList = [...state.lstTask]
    switch (action.type) {
        case types.LIST_ALL:
            return state
        case types.ADD_TASK:
            if (action.task.id) {
                const index = findIndex(action.task.id, state.lstTask)
                newList[index] = action.task
                return { ...state, ...{ lstTask: newList } }
            } else {
                const task = { ...action.task, id: uuidv1() }
                newList.push(task)
                return { ...state, ...{ lstTask: newList } }
            }
        case types.REMOVE_TASK:
            newList.map((task, index) => {
                if (action.lstRemove.indexOf(task.id) > - 1) {
                    newList.splice(index, 1)
                }
            })
            return { ...state, ...{ lstTask: newList } }
        default:
            return state
    }
}
export default myReducer