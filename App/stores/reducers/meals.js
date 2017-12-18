import * as c from '../actions/constants'

const defaultState = {
  isLoading: false,
  items: [],
  error: ''
}

const meals = (state = defaultState, action) => {
  switch (action.type) {
    case c.FETCH_ENTITIES:
      if (action.meta.type === 'meals') {
        return { ...state, isLoading: true }
      }
      return state
    case c.RECEIVE_ENTITIES:
      if (action.meta.type === 'meals') {
        return {
          ...state,
          isLoading: false,
          items: action.meta.data
        }
      }
      return state
    default:
      return state
  }
}

export default meals
