import React from 'react'
import PropTypes from 'proptypes'

import Container from './Container'

const Dropdown = ({ areas, closeList, isLoading, selectItem, children }) => (
  <div className='dropdown'>
    {children}
    {(closeList)
      ? null
      : (<Container {...{ areas, isLoading, selectItem }} />)
    }
  </div>
)

Dropdown.propTypes = {
  areas: PropTypes.array,
  closeList: PropTypes.bool,
  isLoading: PropTypes.bool
}

export default Dropdown
