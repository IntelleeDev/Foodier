import './bootstrap'
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import Root from './Root'
import store from './config/store'

ReactDOM.render(
  <Root store={store} >
    <App />
  </Root>,
  document.getElementById('root'))
