import React from 'react'
import PropTypes from 'proptypes'
import { Section } from '../utils'

export const Content = ({ children }) => (
  <Section>
    { children }
  </Section>
)

Content.propTypes = {
  children: PropTypes.object
}

export const Footer = () => (
  <footer className='footer'>
    <div className='centerfy'>
      <i className='fa fa-copyright' />
      <strong>foodier</strong>
    </div>
  </footer>
)
