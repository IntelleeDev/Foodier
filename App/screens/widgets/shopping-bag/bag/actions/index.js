import React from 'react'
import PropTypes from 'proptypes'

import { CostLabel } from './cost-label'
import { CheckOut } from './checkout'

export const Actions = ({ subTotal, itemCount, toCheckOut }) => (
  <div className='shop-bag-actions'>
    <CostLabel {...{ subTotal }} />
    <CheckOut {...{toCheckOut, itemCount}} />
  </div>
)

Actions.propTypes = {
  toCheckOut: PropTypes.func,
  subTotal: PropTypes.number,
  itemCount: PropTypes.number
}
