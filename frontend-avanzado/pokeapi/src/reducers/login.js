const initialState = {
  login: false
}

export const login = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_LOGIN':
      return {
        ...state,
        login: action.login
      }
    default:
      return state
  }
}