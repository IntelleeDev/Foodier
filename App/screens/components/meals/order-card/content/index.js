import React from 'react'
import PropTypes from 'proptypes'

const Content = ({ name, description }) => (
  <div className='content'>
    <span className='bold main-text'>{ name }</span>
    <span className='tiny bold obscure sub-text'>{ description }</span>
  </div>
)

Content.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string
}

export default Content
