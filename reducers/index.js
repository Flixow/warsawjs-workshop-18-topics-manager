import {combineReducers} from 'redux'

import user from './user'
import topics from './topics'

export default combineReducers({
  user,
  topics,
})
