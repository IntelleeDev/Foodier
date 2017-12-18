import React from 'react'
import PropTypes from 'proptypes'

export const BagIcon = ({ itemCount, onClick }) => (
  <div onClick={onClick}>
    <span className={`bag-icon-box ${(itemCount > 0) ? 'active' : ''}`}>
      <i className='fa fa-shopping-bag' />
    </span>
    &nbsp;
    <span className='item-count info'>
      { itemCount > 0 ? itemCount : '' }
    </span>
  </div>
)

BagIcon.propTypes = {
  itemCount: PropTypes.number
}
