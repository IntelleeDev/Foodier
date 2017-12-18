import * as c from '../actions/constants'
import { getMealById } from '../selectors'

const defaultState = {
  quantity: 0,
  totalPrice: 0,
  item: { }
}

const orderCard = (state = defaultState, action) => {
  switch (action.type) {
    case c.INCREMENT_QUANTITY:
      if (action.meta.type === 'orderCard') {
        const quantity =
          (state.quantity >= 1)
            ? state.quantity + 1
              : state.quantity

        const totalPrice = quantity * state.item.price

        return { ...state, quantity, totalPrice }
      }
      return state
    case c.DECREMENT_QUANTITY:
      if (action.meta.type === 'orderCard') {
        const quantity =
          (state.quantity > 1)
            ? state.quantity - 1
              : state.quantity

        const totalPrice = quantity * state.item.price

        return { ...state, quantity, totalPrice }
      }
      return state
    case c.SET_SELECTED_MEAL:
      return {
        quantity: 1,
        totalPrice: action.meta.meal.price,
        item: action.meta.meal
      }
    default:
      return state
  }
}

export default orderCard
