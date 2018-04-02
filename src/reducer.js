const defaultState = {
      counter: 0
  }

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "INCREASE_COUNTER":
      return {...state, counter: action.payload}
    default:
      return state
  }
}

export default reducer
