import React from 'react'
import PropTypes from 'proptypes'

import Actions from './actions'
import BrandImage from './brand-image'
import Description from './description'

const Restaurant = ({ name, about, imageUrl, deliveryTime, viewMenu }) => (
  <div className='item' onClick={viewMenu}>
    <BrandImage imageUrl={imageUrl} />
    <Description {...{name, about}} />
    <Actions {...{deliveryTime, viewMenu}} />
  </div>
)

Restaurant.propTypes = {
  name: PropTypes.string,
  about: PropTypes.string,
  imageUrl: PropTypes.string,
  deliveryTime: PropTypes.string
}

export default Restaurant
