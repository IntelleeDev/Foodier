import React from 'react'
import PropTypes from 'proptypes'

import { Row, Column } from '../../../../utils'
import QuantityCounter from '../quantity-counter'

const Action = ({
  meal,
  addToBag,
  quantity,
  totalPrice,
  onIncrement,
  onDecrement }) => (

    <div className='actions'>
      <Row>
        <Column xSmall={6} small={4}>
          <QuantityCounter
            {...{quantity, onIncrement, onDecrement}} />
        </Column>
        <Column xSmall={6} small={8}>
          <button
            onClick={() => addToBag(meal, quantity)}
            className='button bold fluid info'>
            Add to Cart
          <span className='float-right'><i className='fa fa-usd' /> {totalPrice}</span></button>
        </Column>
      </Row>
    </div>
)

Action.propTypes = {
  meal: PropTypes.object,
  quantity: PropTypes.number,
  totalPrice: PropTypes.number
}

export default Action
