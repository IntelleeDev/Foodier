import React from 'react'
import PropTypes from 'proptypes'

import Item from '../item'

const ItemList = ({ areas, selectItem }) => (
  <ul>
    {areas.map((area, index) => {
      return (
        <Item key={index}
          id={area.id}
          name={area.name}
          cityName={area.city_name}
          onItemSelected={() => selectItem(area)} />)
    })}
  </ul>
)

ItemList.propTypes = {
  areas: PropTypes.array
}

export default ItemList
