import React from 'react'
import PropTypes from 'proptypes'

import ItemList from '../item-list'
import { Spinner } from '../../../../../widgets'

const Container = ({ areas, isLoading, selectItem }) => {
  const className = (areas.length > 0 || isLoading) ? 'list fluid' : 'list fluid hidden'
  return (
    <div {...{className}}>
      {(isLoading)
      ? (<Spinner />)
      : (<ItemList {...{ areas, selectItem }} />)}
    </div>
  )
}

Container.propTypes = {
  areas: PropTypes.array,
  isLoading: PropTypes.bool,
  selectItem: PropTypes.func.isRequired
}

export default Container
