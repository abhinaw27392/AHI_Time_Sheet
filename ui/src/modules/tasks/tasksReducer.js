import { FORM_REQUEST, FORM_SUBMITTED, SUBMIT_FAILURE } from './tasksAction'
import { combineReducers } from 'redux'

const tasks = (state = {
    isFetching: false
}, action) => {
    switch (action.type) {
        case FORM_REQUEST:
        case FORM_SUBMITTED:
        case SUBMIT_FAILURE:
            return Object.assign({}, state, action)
        default:
            return state
    }
}

export const getPropsMap = (state, reducer) => {
    const props = state['tasksReducer'];
    if (props === null) return null;
    return props[reducer];
}

const tasksReducer = combineReducers({
    tasks
})
export default tasksReducer