import React from 'react'
import PropTypes from 'proptypes'
import { Section } from '../utils'

export const Button = ({
  icon,
  title,
  onClick,
  className,
  isDisabled }) => (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={`button ${className}`}>
      <span className='bold'>
        {title}
      </span>
    </button>
)

Button.defaultProps = {
  isDisabled: false
}

Button.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.object,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string
}

export const Banner = ({ greeting, mainText, subText }) => (
  <Section>
    <div className='centerfy greeting'>
      <span className='button tiny bold primary small-font'>
        &nbsp;&nbsp;&nbsp;
        { greeting }
        &nbsp;&nbsp;&nbsp;
      </span>
      <h3>{ mainText }</h3>
      <p className='small-font'>
        <strong>
          { subText }
        </strong>
      </p>
    </div>
  </Section>
)

Banner.propTypes = {
  greeting: PropTypes.string.isRequired,
  mainText: PropTypes.string,
  subText: PropTypes.string
}

export const FilterBox = ({ children }) => (
  <div className='filter-box'>
    {children}
  </div>
)

export const IconButton = ({ onClick, className, icon }) => (
  <span
    onClick={onClick}
    className={`icon-button ${className}`}>
    { icon }
  </span>
)

IconButton.propTypes = {
  onClick: PropTypes.func,
  icon: PropTypes.node,
  className: PropTypes.string
}

export const MenuLabel = ({ classname, primaryText, secondaryText }) => (
  <h3>
    <span className={`info ${classname}`}>
      { primaryText }
    </span>
    { secondaryText }
  </h3>
)

MenuLabel.propTypes = {
  primaryText: PropTypes.string,
  secondaryText: PropTypes.string
}

export const ResultsBox = ({ children }) => (
  <div className='results-box'>
    {children}
  </div>
)

export const Spinner = ({ classname }) => (
  <div className={`spinner ${classname}`}>
    <i className='fa fa-circle-thin loader' />
  </div>
)

export const Segment = ({ title, headerColor, children }) => (
  <Section className='segment'>
    <header className={`header ${headerColor}`}>
      <span className='bold'>{title}</span>
    </header>
    <div>
      { children }
    </div>
  </Section>
)

Segment.propTypes = {
  title: PropTypes.string,
  headerColor: PropTypes.string,
  children: PropTypes.object
}
