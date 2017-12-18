import React from 'react'
import PropTypes from 'proptypes'

import { Row, Column } from '../../../../../utils'

export const CostLabel = ({ subTotal }) => (
  <div className='shop-bag-cost'>
    <Row>
      <Column xSmall={6} small={6}>
        <span className='bold tiny'>Subtotal</span>
      </Column>
      <Column xSmall={6} small={6} textAlign='right'>
        <span className='bold tiny'><i className='fa fa-usd' />{subTotal}</span>
      </Column>
    </Row>
  </div>
)

CostLabel.propTypes = {
  subTotal: PropTypes.number
}
