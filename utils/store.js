import {createStore, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import api from './api'

import rootReducer from '../reducers'

const enhancers = compose(
  typeof window !== 'undefined' && process.env.NODE_ENV !== 'production'
    ? window.devToolsExtension && window.devToolsExtension()
    : f => f
)

const createStoreWithMiddleware = applyMiddleware(thunk.withExtraArgument({api}))(createStore)

export default initialState =>
  createStoreWithMiddleware(rootReducer, initialState, enhancers)
