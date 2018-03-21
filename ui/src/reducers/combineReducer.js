// import redux
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

// import local
import authenticationReducer from '../modules/authentication/authenticationReducer'
import { errors } from '../modules/common/error/errorReducer'
import timesheetReducer from '../modules/timesheet/timesheetReducer'
import departmentReducer from '../modules/department/departmentReducer'
import projectReducer from '../modules/project/projectReducer'
import employeeReducer from '../modules/employee/employeeReducer'
import tasksReducer from '../modules/tasks/tasksReducer'



const appReducer = combineReducers({
  authenticationReducer,
  timesheetReducer,
  departmentReducer,
  projectReducer,
  employeeReducer,
  tasksReducer,
  errors,
  router: routerReducer

})

export default appReducer
