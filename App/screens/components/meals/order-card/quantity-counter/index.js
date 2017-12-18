import React from 'react'
import PropTypes from 'proptypes'

import {
  Row,
  Column,
  GridContainer } from '../../../../utils'

const QuantityCounter = ({ quantity, onIncrement, onDecrement }) => (
  <GridContainer>
    <Row>
      <Column xSmall={4} small={4}>
        <span
          className='circle-button'
          onClick={onDecrement}>
          <i className='fa fa-minus' /></span>

      </Column>
      <Column xSmall={4} small={4}>
        <span className='bold numeric-label'>{ quantity }</span>
      </Column>
      <Column xSmall={4} small={4}>
        <span
          className='circle-button'
          onClick={onIncrement}><i className='fa fa-plus' /></span>

      </Column>
    </Row>
  </GridContainer>
)

QuantityCounter.propTypes = {
  quantity: PropTypes.number,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func
}

export default QuantityCounter
