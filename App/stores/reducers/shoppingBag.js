import {
  ADD_TO_SHOPPING_BAG,
  REMOVE_FROM_SHOPPING_BAG
} from '../actions/constants'

const defaultState = {
  totalPrice: 0,
  deliveryFee: 500,
  items: []
}

const shoppingBag = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TO_SHOPPING_BAG:
      const currentBagState = state.items.slice(0, state.items.length)
      const newItem = action.meta.item

      const itemIndex = getItemIndex(newItem, currentBagState)
      if (itemIndex === -1) {
        currentBagState.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          imageUrl: newItem.cover_photo,
          quantity: action.meta.quantity
        })
      } else {
        currentBagState.map(item => {
          if (item.id === newItem.id) {
            return { ...item, quantity: ++item.quantity }
          }
          return item
        })
      }

      return {
        ...state,
        totalPrice: calTotalPrice(currentBagState),
        items: currentBagState
      }
    case REMOVE_FROM_SHOPPING_BAG:
      const bagState = state.items.slice(0, state.items.length)
      const newBagState = removeFromBag(bagState, action.meta.id)
      return {
        ...state,
        totalPrice: calTotalPrice(newBagState),
        items: newBagState
      }
    default:
      return state
  }
}

function getItemIndex (itemToFind, bag) {
  return bag.findIndex(item => itemToFind.id === item.id)
}

function removeFromBag (bag, id) {
  return bag.filter(item => item.id !== id)
}

function calTotalPrice (bag) {
  return bag.reduce((total, newItem) => {
    return total + Number(newItem.price * newItem.quantity)
  }, 0)
}

export default shoppingBag
