import React from 'react'
import PropTypes from 'proptypes'

import { Content } from './content'
import { Actions } from './actions'

export const Bag = ({
  items,
  subTotal,
  removeItem,
  toCheckOut }) => (
    <div className='shop-bag'>
      <Content {...{items, removeItem}} />
      <Actions itemCount={items.length} {...{subTotal, toCheckOut}} />
    </div>
)

Bag.propTypes = {
  items: PropTypes.array,
  subTotal: PropTypes.number,
  removeItem: PropTypes.func,
  toCheckOut: PropTypes.func
}
