import { combineReducers } from 'redux'

import areas from './areas'
import meals from './meals'
import widgets from './widgets'
import dropdown from './dropdown'
import orderCard from './orderCard'
import shoppingBag from './shoppingBag'
import restaurants from './restaurants'

const rootReducer = combineReducers({
  areas,
  meals,
  widgets,
  dropdown,
  orderCard,
  restaurants,
  shoppingBag
})

export default rootReducer
