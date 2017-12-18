
const PREFIX = '/api'

const SEARCH_PREFIX = `${PREFIX}/search`

const AREAS_URL = `${PREFIX}/areas`

const MEALS_URL = `${PREFIX}/meals`

const RESTAURANTS_URL = `${PREFIX}/restaurants`

export const getMeal = (mealId) => {
  return `${MEALS_URL}/${mealId}`
}

export const searchAreas = (searchTerm) => {
  return `${SEARCH_PREFIX}/areas/${searchTerm}`
}

export const restaurantsByArea = (areaId) => {
  return `${AREAS_URL}/${areaId}/restaurants`
}

export const mealsByRestaurant = (restaurantId) => {
  return `${RESTAURANTS_URL}/${restaurantId}/meals`
}
