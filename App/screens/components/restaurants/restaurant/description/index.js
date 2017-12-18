import React from 'react'
import PropTypes from 'proptypes'

const Description = ({ name, about }) => (
  <div className='content'>
    <span className='title text-color-primary bold'>{ name }</span>
    <span className='tiny bold obscure'>{ about }</span>
  </div>
)

Description.propTypes = {
  name: PropTypes.string,
  about: PropTypes.string
}

export default Description
