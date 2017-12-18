import React from 'react'
import PropTypes from 'proptypes'

import { Item } from './Item'

export const Content = ({ items, removeItem }) => (
  <div className='shop-bag-content left'>
    {items.map((item, index) =>
      <Item
        key={index}
        {...item}
        removeItem={() => removeItem(item.id)} />
    )}
  </div>
)

Content.propTypes = {
  items: PropTypes.array,
  removeItem: PropTypes.func
}
