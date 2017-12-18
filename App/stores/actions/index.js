import * as c from './constants'

export const showWidget = (type) => {
  return {
    type: c.SHOW_WIDGET,
    meta: { type }
  }
}

export const hideWidget = (type) => {
  return {
    type: c.HIDE_WIDGET,
    meta: { type }
  }
}

export const toggleVisibility = (meta) => {
  return {
    type: c.TOGGLE_VISIBILITY,
    meta: { ...meta }
  }
}

export const fetchEntities = (meta) => {
  return {
    type: c.FETCH_ENTITIES,
    meta: { ...meta }
  }
}

export const receiveEntities = (type, data) => {
  return {
    type: c.RECEIVE_ENTITIES,
    meta: { type, data }
  }
}

export const selectDropdownItem = (item) => {
  return { type: c.SELECT_DROPDOWN_ITEM, item }
}

export const resetDropdown = () => {
  return { type: c.RESET_DROPDOWN }
}

export const incrementQuantity = (type) => {
  return {
    type: c.INCREMENT_QUANTITY,
    meta: { type }
  }
}

export const decrementQuantity = (type) => {
  return {
    type: c.DECREMENT_QUANTITY,
    meta: { type }
  }
}

export const setSelectedMeal = (meta) => {
  return {
    type: c.SET_SELECTED_MEAL,
    meta: { ...meta }
  }
}

export const addToShoppingBag = (meta) => {
  return {
    type: c.ADD_TO_SHOPPING_BAG,
    meta: { ...meta }
  }
}

export const removeFromShoppingBag = (meta) => {
  return {
    type: c.REMOVE_FROM_SHOPPING_BAG,
    meta: { ...meta }
  }
}
