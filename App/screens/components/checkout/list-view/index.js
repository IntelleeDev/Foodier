import React from 'react'
import PropTypes from 'proptypes'

import { ListItem } from '../list-item'

export const ListView = ({ items }) => (
  <div className='list-view'>
    <div className='items'>
      {items.map((item, index) => {
        return (
          <div key={index}>
            <ListItem {...item} />
            <div className='list-view list-divider' />
          </div>
        )
      })}
    </div>
  </div>
)

ListView.propTypes = {
  items: PropTypes.array
}
