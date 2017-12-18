import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux'

import rootSaga from '../../App/stores/sagas'
import rootReducer from '../../App/stores/reducers'

const loggerMiddleware = createLogger()
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  applyMiddleware(loggerMiddleware, sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default store
