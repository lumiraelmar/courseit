import {applyMiddleware, createStore, combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { pokemon } from './reducers/pokemon'
import { login } from './reducers/login'

const initialState = {} 

export const addLastPokemon = (value) => dispatch => {
  return dispatch({
    type: 'ADD_LAST_POKEMON',
    lastPokemon: value
  })
}

export const addLogin = (value) => dispatch => {
  return dispatch({
    type: 'ADD_LOGIN',
    login: value
  })
}

export function initializeStore() {
  return createStore(
    combineReducers({ pokemon, login }),
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}