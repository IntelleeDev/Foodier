import { all } from 'redux-saga/effects'
import { watchAreas } from './areas'
import { watchMeals } from './meals'
import { watchRestaurants } from './restaurants'

function * rootSaga () {
  yield all([
    watchAreas(),
    watchMeals(),
    watchRestaurants()
  ])
}

export default rootSaga
