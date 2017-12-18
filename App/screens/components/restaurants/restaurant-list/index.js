import React from 'react'
import PropTypes from 'proptypes'

import Restaurant from '../restaurant'
import { Row, Column } from '../../../utils'

const RestaurantList = ({ restaurants, browseMenu }) => (
  <Row>
    {restaurants.map((restaurant, index) => (
      <Column key={index} xSmall={12} small={4}>
        <Restaurant
          {...restaurant}
          viewMenu={() => browseMenu(restaurant.id, restaurant.name)} />
      </Column>
    ))}
  </Row>
)

RestaurantList.propTypes = {
  restaurants: PropTypes.array,
  browseMenu: PropTypes.func
}

export default RestaurantList
