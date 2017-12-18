
export const getMealById = (state, mealId) => {
  return state.meals.items.filter(meal => meal.id === mealId)
}

export const getVisibility = (state, type) => {
  return state.widgets[type].isVisible
}

export const getPropFromBag = (state, prop) => {
  return state.shoppingBag[prop]
}
