// import redux
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

// import local
import authenticationReducer from '../modules/authentication/authenticationReducer'
import { errors } from '../modules/common/error/errorReducer'

const appReducer = combineReducers({
  authenticationReducer,
  errors,
  router: routerReducer

})

export default appReducer