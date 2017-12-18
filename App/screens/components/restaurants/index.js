import React from 'react'
import PropTypes from 'proptypes'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

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

import RestaurantList from './restaurant-list'
import * as actions from '../../../stores/actions'
import '../../../../../../../public/css/restaurants.css'

const Restaurants = ({ isLoading, restaurants, browseMenu }) => (
  <Section>
    <Space />
    <Banner
      greeting='Hello! there'
      mainText='Where would you like to order from today?'
      subText={`We found ${restaurants.length} restaurants in your area`} />

    <Space />
    <GridContainer>
      <Row>
        <Column xSmall={12} small={3}>
          <FilterBox />
        </Column>
        <Column xSmall={12} small={9}>
          <ResultsBox>
            <MenuLabel
              primaryText='Obiagu'
              secondaryText=' Restaurants' />

            {(isLoading)
              ? <Spinner classname='large' />
              : <RestaurantList {...{restaurants, browseMenu}} />
            }
          </ResultsBox>
        </Column>
      </Row>
    </GridContainer>

    <Space />

  </Section>
)

Restaurants.propTypes = {
  isLoading: PropTypes.bool,
  restaurants: PropTypes.array
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.restaurants.isLoading,
    restaurants: state.restaurants.items
  }
}
const mapDisptachToProps = (dispatch, { history }) => {
  return {
    browseMenu: (id, name) => {
      dispatch(
        actions.fetchEntities({type: 'meals', restaurantId: id}))
      history.push(`/restaurants/${name}/meals`)
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDisptachToProps)(Restaurants))
