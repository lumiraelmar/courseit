const initialState = {
  lastPokemon: {}
}

export const pokemon = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_LAST_POKEMON':
      return {
        ...state,
        lastPokemon: action.lastPokemon
      }
    default:
      return state
  }
}