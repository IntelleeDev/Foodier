import React from 'react'
import PropTypes from 'proptypes'

import { Provider } from 'react-redux'

const Root = ({ store, children }) => (
  <Provider store={store}>
    { children }
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
