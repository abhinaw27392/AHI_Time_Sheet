// import redux
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

// import local
import authenticationReducer from '../modules/authentication/authenticationReducer'
import { errors } from '../modules/common/error/errorReducer'

// import postDataReducer from '../modules/timesheet/timesheetReducer'  //-----------------------------------------added
import { reducer as formReducers } from 'redux-form'


const appReducer = combineReducers({
  // authenticationReducer, 
  form: formReducers,
  errors,
  router: routerReducer

})

export default appReducer