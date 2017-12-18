import * as a from '../actions'
import * as c from '../actions/constants'

import { delay } from 'redux-saga'
import { all, call, fork, take, put } from 'redux-saga/effects'

import Api from '../../../config/api'
import * as Uri from '../../../config/api/endpoints'

function * receiveResponse (response) {
  if (response.status === 200) {
    yield put(a.receiveEntities('areas', response.data.data))
  }
}

function * fetchAreas () {
  while (true) {
    const action = yield take(c.FETCH_ENTITIES)

    if (action.meta.type === 'areas') {
      yield call(delay, 200)
      const response = yield call(Api.get, Uri.searchAreas(action.meta.searchTerm))

      yield fork(receiveResponse, response)
    }
  }
}

export function * watchAreas () {
  yield all([
    fetchAreas()
  ])
}
