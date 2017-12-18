import * as c from '../actions/constants'

const defaultState = {
  orderCard: { isVisible: false },
  signInForm: { isVisible: false },
  signUpForm: { isVisible: false },
  shoppingBag: { isVisible: false }
}

const widgets = (state = defaultState, action) => {
  switch (action.type) {
    case c.SHOW_WIDGET:
      return {
        ...state,
        [action.meta.type]: { isVisible: true }
      }
    case c.HIDE_WIDGET:
      return {
        ...state,
        [action.meta.type]: { isVisible: false }
      }
    case c.TOGGLE_VISIBILITY:
      return {
        ...state,
        [action.meta.type]: { isVisible: !(state[action.meta.type].isVisible) }
      }
    default:
      return state
  }
}

export default widgets
