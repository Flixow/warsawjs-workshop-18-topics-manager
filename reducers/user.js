import {
  SET_USER,
} from '../actions'

const INITIAL_STATE = {
  profile: {},
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SET_USER:
    return {...state, ...action.payload}
  default:
    return state
  }
}
