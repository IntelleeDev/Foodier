import * as a from '../actions'
import * as c from '../actions/constants'
import { delay } from 'redux-saga'
import { all, call, fork, take, put } from 'redux-saga/effects'

import Api from '../../../config/api'
import * as Uri from '../../../config/api/endpoints'

function * receiveResponse (response) {
  if (response.status === 200) {
    yield put(a.receiveEntities('meals', response.data.data))
  }
}

function * fetchMeals () {
  while (true) {
    const action = yield take(c.FETCH_ENTITIES)

    if (action.meta.type === 'meals') {
      yield call(delay, 200)
      const response = yield call(Api.get,
        Uri.mealsByRestaurant(action.meta.restaurantId))

      yield fork(receiveResponse, response)
    }
  }
}

export function * watchMeals () {
  yield all([
    fetchMeals()
  ])
}
