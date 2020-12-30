import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { initialState, movieReducer } from './movies/reducers'

const rootReducer = combineReducers({ movie: movieReducer })
const composeEnhancer = compose

const store = createStore(
  rootReducer,
  { movie: initialState },
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
