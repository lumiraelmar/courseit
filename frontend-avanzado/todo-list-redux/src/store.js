import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

const initialState = {
  inputValue: '',
  itemList: []
};

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_INPUT_VALUE':
      return  {
        ...state,
        inputValue: action.inputValue
      }
    case 'ADD_ITEM':
      const { itemList, inputValue} = state
      return {
        ...state,
        itemList: [...itemList, inputValue],
        inputValue: ''
      }
    default:
      return state;
  }
};

export const addInputValue = (value) => dispatch => {
  return dispatch({
    type: 'ADD_INPUT_VALUE',
    inputValue: value
  });
};

export const addItem = () => dispatch => {
  return dispatch({
    type: 'ADD_ITEM'
  });
};

export function initializeStore() {
  return createStore(reducer, initialState, applyMiddleware(thunkMiddleware))
}