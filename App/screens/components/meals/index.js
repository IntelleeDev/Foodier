import React from 'react'
import PropTypes from 'proptypes'
import { connect } from 'react-redux'

import MealList from './meal-list'
import OrderCard from './order-card'

import {
  Row,
  Space,
  Column,
  GridContainer,
  Section } from '../../utils'

import {
  Banner,
  Spinner,
  MenuLabel,
  FilterBox,
  ResultsBox } from '../../widgets'

import { showWidget, setSelectedMeal } from '../../../stores/actions'
import '../../../../../../../public/css/meals.css'

const Meals = ({
  meal,
  meals,
  isLoading,
  showCard,
  showOrderCard }) => (

    <Section>
      {(showCard)
        ? <OrderCard {...{meal}} />
        : null
      }
      <Space />

      <Banner
        greeting='Delicious!'
        mainText='What would you like to eat today?'
        subText='Freshly prepared meals just for you' />

      <Space />

      <GridContainer>
        <Row>
          <Column xSmall={12} small={3}>
            <FilterBox />
          </Column>
          <Column xSmall={12} small={9}>
            <ResultsBox>
              <MenuLabel
                primaryText='Most Popular'
                secondaryText='' />
              {(isLoading)
                ? <Spinner classname='large' />
                : <MealList {...{meals, showOrderCard}} />
              }
            </ResultsBox>
          </Column>
        </Row>
      </GridContainer>
      <Space /><br />
    </Section>
)

Meals.propTypes = {
  meals: PropTypes.array,
  meal: PropTypes.object,
  isLoading: PropTypes.bool
}

const mapStateToProps = (state) => {
  return {
    meals: state.meals.items,
    meal: state.orderCard.item,
    showCard: state.widgets.orderCard.isVisible,
    isLoading: state.meals.isLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showOrderCard: (meal) => {
      dispatch(showWidget('orderCard'))
      dispatch(setSelectedMeal({ meal }))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Meals)
