import React from 'react'
import PropTypes from 'prop-types'

const Caption = ({ text }) => (
  <div className='caption centerfy'>
    <span className='bold'>{text}</span>
  </div>
)

Caption.propTypes = {
  text: PropTypes.string.isRequired
}

export default Caption
