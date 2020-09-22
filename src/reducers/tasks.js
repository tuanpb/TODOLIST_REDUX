const types = {
    LIST_ALL: 'LIST_ALL'
}
const uuidv1 = require('uuid/v1')
const initialState = [
    { id: uuidv1(), name: 'Hoc Reactjs', piority: 0 },
    { id: uuidv1(), name: 'Hoc Redux', piority: 1 },
    { id: uuidv1(), name: 'Hoc NodeJs', piority: 2 }
]
var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LIST_ALL:
            return state
        default: return state
    }
}
export default myReducer