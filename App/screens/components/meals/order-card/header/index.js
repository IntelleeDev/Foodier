import React from 'react'
import PropTypes from 'proptypes'

const Header = ({ onClose }) => (
  <div className='order-card-header'>
    <div className='right padded' onClick={onClose}>
      <i className='fa fa-close active white icon-button medium' />
    </div>
  </div>
)

Header.propTypes = {
  onClose: PropTypes.func
}

export default Header
