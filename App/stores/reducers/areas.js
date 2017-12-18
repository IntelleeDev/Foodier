import * as c from '../actions/constants'

const defaultState = {
  isLoading: false,
  items: [],
  error: ''
}

const areas = (state = defaultState, action) => {
  switch (action.type) {
    case c.FETCH_ENTITIES:
      if (action.meta.type === 'areas') {
        return { ...state, isLoading: true }
      }
      return state
    case c.RECEIVE_ENTITIES:
      if (action.meta.type === 'areas') {
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

export default areas
