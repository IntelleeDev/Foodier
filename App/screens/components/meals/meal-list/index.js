import React from 'react'
import PropTypes from 'proptypes'

import Meal from '../Meal'
import { Row } from '../../../utils'

const MealList = ({ meals, showOrderCard }) => (
  <Row>
    {meals.map((meal, index) =>
      <Meal
        key={index}
        {...meal}
        showOrderCard={() => showOrderCard(meal)} />
    )}
  </Row>
)

MealList.propTypes = {
  meals: PropTypes.array,
  showOrderCard: PropTypes.func.isRequired
}

export default MealList
