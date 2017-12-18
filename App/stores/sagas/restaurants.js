import * as a from '../actions'
import * as c from '../actions/constants'

import Api from '../../../config/api'
import * as Uri from '../../../config/api/endpoints'

import { all, call, fork, take, put } from 'redux-saga/effects'

function * receiveResponse (response) {
  if (response.status === 200) {
    yield put(a.receiveEntities('restaurants', response.data.data))
  }
}

function * fetchRestaurants () {
  while (true) {
    const action = yield take(c.FETCH_ENTITIES)

    if (action.meta.type === 'restaurants') {
      const response = yield call(Api.get,
          Uri.restaurantsByArea(action.meta.areaId))

      yield fork(receiveResponse, response)
    }
  }
}

export function * watchRestaurants () {
  yield all([
    fetchRestaurants()
  ])
}
