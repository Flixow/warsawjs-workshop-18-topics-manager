import {
  SET_TOPICS,
  PUSH_TOPIC,
} from '../actions'

const INITIAL_STATE = {
  list: [],
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SET_TOPICS:
    return {
      ...state,
      list: action.topics
    }
    case PUSH_TOPIC:
      return {
        ...state,
        list: [action.topic, ...state.list]
      }
  default:
    return state
  }
}
