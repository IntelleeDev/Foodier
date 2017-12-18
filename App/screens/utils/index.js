import React from 'react'
import PropTypes from 'proptypes'

export const Column = ({ children, xSmall, small, medium, textAlign }) => (
  <div className={
    `col-${xSmall}
    ${(small) ? `col-sm-${small}` : ''}
    ${(medium) ? `col-md-${medium}` : ''}
    ${(textAlign) ? `${textAlign}` : ''}`}>
    {children}
  </div>
)

Column.propTypes = {
  xSmall: PropTypes.number,
  small: PropTypes.number,
  medium: PropTypes.number,
  textAlign: PropTypes.string
}

export const GridContainer = ({ children }) => (
  <div className='container'>
    {children}
  </div>
)

export const Row = ({ children, className }) => (
  <div className={`row ${(className) ? `${className}` : ''}`}>
    {children}
  </div>
)

export const Section = ({ children, className }) => (
  <section
    className={`${className}`}>
    {children}
  </section>
)

Section.propTypes = {
  className: PropTypes.string
}

export const Space = () => (
  <div className='space' />
)

export const SpaceSmall = () => (
  <div className='space-small' />
)
