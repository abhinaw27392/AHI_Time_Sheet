import { FORM_REQUEST, FORM_SUBMITTED, SUBMIT_FAILURE } from './projectAction'
import { combineReducers } from 'redux'

const project = (state = {
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
    const props = state['departmentReducer'];
    if (props === null) return null;
    return props[reducer];
}

const projectReducer = combineReducers({
    project
})
export default projectReducer