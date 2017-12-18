import * as c from '../actions/constants'

const defaultState = {
  closeList: false,
  selectedItem: {}
}

const dropdown = (state = defaultState, action) => {
  switch (action.type) {
    case c.SELECT_DROPDOWN_ITEM:
      return { ...state, closeList: true, selectedItem: action.item }
    case c.RESET_DROPDOWN:
      return { ...state, closeList: false, selectedItem: {} }
    default:
      return state
  }
}
export default dropdown
