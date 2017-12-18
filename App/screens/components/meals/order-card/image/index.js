import React from 'react'
import PropTypes from 'proptypes'

const Image = ({ src, alt }) => (
  <img className='fluid' src={src} alt={alt} />
)

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string
}

export default Image
