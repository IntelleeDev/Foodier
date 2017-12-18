import React from 'react'
import PropTypes from 'proptypes'

import {
  Row,
  Column,
  SpaceSmall } from '../../../utils'
import ContentContainer from '../content-container'
import FoodCardContainer from '../food-card-container'

const Meal = ({ name, price, imageUrl, description, showOrderCard }) => (
  <Column xSmall={12} small={6}>
    <FoodCardContainer onClick={() => showOrderCard()}>
      <Row classname='no-gutters'>
        <Column xSmall={12} small={6} medium={6}>
          <div className='image'>
            <img className='fluid' src='/images/food_background.jpg' />
          </div>
        </Column>

        <Column xSmall={12} small={6} medium={6}>
          <ContentContainer>
            <span className='bold'>{ name }</span>
            <SpaceSmall />
            <span className='obscure bold tiny'>
              {description}
            </span>
            <br />
            <SpaceSmall />
            <span className='bold tiny'>
              N {price}
            </span>
          </ContentContainer>
        </Column>
      </Row>
    </FoodCardContainer>
  </Column>
)

Meal.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  imageUrl: PropTypes.string,
  description: PropTypes.string
}

export default Meal
