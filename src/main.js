import '@babel/polyfill'

import * as React from 'react'
import { render } from 'react-dom'
import Root from './routes'

import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

render(
  <Root store={store}>
  </Root>,
  document.getElementById('root'),
)
