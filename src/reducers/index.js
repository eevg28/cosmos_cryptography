import { combineReducers } from 'redux'

import appStateReducer from './appStateReducer'

const reducers = combineReducers({
  appState: appStateReducer,
})

export default reducers