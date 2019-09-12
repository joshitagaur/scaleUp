import authReducer from './authReducer'
import userReducer from './userReducer'
import graphReducer from './graphReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  graph: graphReducer
});

export default rootReducer

// the key name will be the data property on the state object